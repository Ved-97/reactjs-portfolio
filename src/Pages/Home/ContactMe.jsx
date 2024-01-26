import React, { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First Name is required';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last Name is required';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formData.phoneNumber.trim() === '') {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number format';
    }
    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can submit the data or perform further actions
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section id="Contact" className="flex flex-col items-center justify-center text-center p-16">
      <div>
        <h2 className="text-4xl font-bold mt-4">Contact Me</h2>
        <p className="text-lg mt-4 mb-5">
          Submit the form below or shoot me an email - vedchokshi1597@gmail.com
        </p>
      </div>
      <form className="w-fit flex flex-col " onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            <div className="flex flex-col items-start gap-2">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none focus:shadow-outline-primary"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              
              />
              {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
            </div>

            <div className="flex flex-col items-start gap-2">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none focus:shadow-outline-primary"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                
              />
              {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
            </div>

            <div className="flex flex-col items-start gap-2">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none focus:shadow-outline-primary"
                name="email"
                value={formData.email}
                onChange={handleChange}
              
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
            </div>

            <div className="flex flex-col items-start gap-2">
              <span className="text-md">Phone Number</span>
              <input
                type="tel"
                className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none focus:shadow-outline-primary"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                
              />
              {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
            </div>

            <div className="flex flex-col col-span-2 items-start gap-2">
              <span className="text-md">Message</span>
              <textarea
                className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none focus:shadow-outline-primary"
                name="message"
                id="message"
                rows="8"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="text-red-500">{errors.message}</span>}
            </div>

            </div>
            <div className="text-center">
              <button className="bg-primary text-black py-2 px-6 rounded-full hover:bg-primary-dark focus:outline-none focus:shadow-outline-primary">
                Submit
              </button>
          </div>
      </form>
    </section>
  );
}