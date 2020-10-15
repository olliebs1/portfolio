import React, { Component } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import '../contactPage.css'
import ScrollLock from 'react-scrolllock';



const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export default class ContactPage extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      }
    };
  }


handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();

    if (formValid(this.state)) {
      this.sendFeedback()
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }  

  sendFeedback = (e) => {
      const details = {
          Name: this.state.firstName + ' ' + this.state.lastName, 
          Email: this.state.email,
          Message: this.state.message
      }
    emailjs.send(
      'gmail', 'portfolio_template', details, 'user_Ge7bx8Ee70XM20JGITOv0'
      ).then(res => {
          console.log(res)
        Swal.fire({
          title: 'Email Successfully Sent',
          icon: 'success'
        })
      })
      .catch(err => {
        Swal.fire({
          title: 'Email Failed to Send',
          icon: 'error'
        })
        console.error('Email Error:', err)
      })
  }


  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "message":
        formErrors.message =
          value.length < 1 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
      <ScrollLock />
        <div className="form-wrapper">
          <h1>Get in touch!</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="text"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea className='message' cols='30' rows='8' type='text' placeholder='Message' name='message' onChange={this.handleChange}></textarea>
            </div>
            <div className="sendEmail">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}