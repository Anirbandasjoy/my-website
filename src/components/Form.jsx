import React from 'react';
import "./FormStyle.css";
import Swal from 'sweetalert2';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.name.email;
    const subject = e.target.name.subject;
    const message = e.target.name.message;
    console.log({ name, email, subject, message });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Message Send Successfully",
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        popup: 'sweetalert-custom-popup',
        title: 'sweetalert-custom-title', // Custom class for the title
        content: 'sweetalert-custom-content', // Custom class for the content
        background: 'sweetalert-custom-background',
      },
      backdrop: false,
    });

    e.target.reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input id='name' name='name' type="text" />

        <label>Email</label>
        <input id='email' name='email' type="email" />

        <label>Subject</label>
        <input id='subject' name='subject' type="text" />

        <label>Message</label>
        <textarea id='message' name='message' rows="6" placeholder="Type Your Message Here" />
        <button type='submit' className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
