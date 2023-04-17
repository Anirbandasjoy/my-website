import React from 'react'



import "./FormStyle.css";


const Form = () => {
  return (
    <div className="form">
        <form action="#">
        <label>Your Name</label>
        <input type="text" />

        <label>Email</label>
        <input type="emil" />

        <label>Subject</label>
        <input type="text" />

        <label>Message</label>
        <textarea  rows="6" placeholder="Type Your Message Here"/>
        <button type='submit' className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form