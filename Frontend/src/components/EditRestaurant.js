import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { GET_RESTAURANT_BY_ID, UPDATE_RESTAURANT } from '../utils/constants';
import { useNavigate, useParams } from 'react-router-dom';

// List of cities in India for the select dropdown
const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur"];

const EditRestaurant = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [resData, setResData] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${GET_RESTAURANT_BY_ID}/${id}`);
        setResData(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching restaurant data:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };
    fetchData();
  }, [id]);

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Name is required'),
    menu: Yup.string()
      .test('menu', 'You can enter up to 4 items only', value => {
        const menuItems = value.split(',').map(item => item.trim());
        return menuItems.length <= 4;
      })
      .required('Menu is required'),
    category: Yup.string()
      .oneOf(['veg', 'non-veg', 'both'], 'Invalid category selection')
      .required('Category is required'),
    city: Yup.string()
      .oneOf(cities, 'Select a valid city from the list')
      .required('City is required'),
    address: Yup.string()
      .min(5, 'Address must be at least 5 characters long')
      .required('Address is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits long')
      .required('Phone number is required'),
  });

  // Function to handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("button clicked");
    
    axios.put(`${UPDATE_RESTAURANT}/${id}`, values) // Use PUT for updating
      .then(response => {
        console.log('Restaurant updated:', response.data);
        alert('Restaurant updated successfully!');
        navigate(-1); // Navigate back after successful update
      })
      .catch(error => {
        console.error('Error updating restaurant:', error);
        alert('Failed to update the restaurant.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleClick = () => {
    navigate(-1); // Navigate back when button is clicked
  };

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Restaurant Edit Form</h2>
      <Formik
        initialValues={{ 
          name: resData.name || '',
          menu: resData.menu || '',
          category: resData.category || '',
          city: resData.city || '',
          address: resData.address || '',
          phone: resData.phone || ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Menu Field */}
            <div>
              <label htmlFor="menu" className="block text-gray-700">Menu</label>
              <Field
                type="text"
                name="menu"
                id="menu"
                placeholder="e.g., Pizza, Burger, Pasta, Salad"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="menu" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Category Field */}
            <div>
              <label htmlFor="category" className="block text-gray-700">Category</label>
              <Field
                as="select"
                name="category"
                id="category"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="" label="Select category" />
                <option value="veg" label="Veg" />
                <option value="non-veg" label="Non-Veg" />
                <option value="both" label="Both" />
              </Field>
              <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* City Field */}
            <div>
              <label htmlFor="city" className="block text-gray-700">City</label>
              <Field
                as="select"
                name="city"
                id="city"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              >
                <option value="" label="Select city" />
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </Field>
              <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Address Field */}
            <div>
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <Field
                type="text"
                name="address"
                id="address"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className="w-full mt-1 p-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition"
              >
                {isSubmitting ? 'Submitting...' : 'Update'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <button onClick={handleClick} className='text-red-500 mt-4'>Click to go Back</button>
    </div>
  );
};

export default EditRestaurant;
