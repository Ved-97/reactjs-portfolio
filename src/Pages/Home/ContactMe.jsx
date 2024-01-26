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
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
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
      setSubmissionStatus(null);
    } else {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.REACT_APP_API_KEY, // Replace with your actual API access key
            ...formData,
          }),
        });

        if (response.ok) {
          setSubmissionStatus('success');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: '',
          });
        } else {
          setSubmissionStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionStatus('error');
      }
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
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="w-fit flex flex-col "
        onSubmit={handleSubmit}
      >

        <div className="grid grid-cols-2 gap-x-8 gap-y-8">
          {/* First Name */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-start gap-2">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col col-span-2 items-start gap-2">
            <span className="text-md">Message</span>
            <textarea
              className="w-full py-2 px-4 rounded border border-sky-600 bg-white focus:outline-none"
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

        <div className="text-center mt-5">
          <button type="submit" className="btn btn-outline-primary ml-4">
            Submit
          </button>
        </div>
      </form>

      {submissionStatus === 'success' && (
        <div className="text-green-500 mt-3">Form submitted successfully!</div>
      )}
      {submissionStatus === 'error' && (
        <div className="text-red-500 mt-3">Error submitting the form. Please try again later.</div>
      )}
    </section>
  );
}
