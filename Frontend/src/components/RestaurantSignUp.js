import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { POST_RESTAURANT } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

// List of cities in India for the select dropdown
const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur"];

const RestaurantSignUp = ({btnClicked,setBtnClicked}) => {
  const navigate=useNavigate();
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
    // Simulate API call
    axios.post(POST_RESTAURANT, values)
      .then(response => {
        console.log('Restaurant registered:', response.data);
        setBtnClicked(!btnClicked);
        alert('Restaurant registered successfully!');
      })
      .catch(error => {
        console.error('There was an error registering the restaurant:', error);
        alert('Failed to register the restaurant.');
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const handleClick=()=>{
    alert("btn clicked");
    navigate(-1);
  }
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Restaurant Sign Up</h2>

      <Formik
        initialValues={{ name: '', menu: '', category: '', city: '', address: '', phone: '' }}
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <button onClick={handleClick} className='text-red-500'>Click to go Back</button>
    </div>
  );
};

export default RestaurantSignUp;
