import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import './ContactForm.css';
import config from "../config";



const ContactForm = () => {

    const { errors, handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            emailId: "",
            mobileNumber: "",
            subject: "",
            message: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Your name is required"),
            mobileNumber: Yup.string().required("Mobile Number is required").min(10, "Minimum 10 digits are required").max(10,
                "Maximum 10 digits are required"),
            emailId: Yup.string().required("Email Id is required").email("Please enter a valid email"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required")
        }),
        onSubmit: values => {

            // let newMessageRef = messagesRef.push();

            let requestedPayload = {
                name: values.name,
                email: values.emailId,
                mobileNumber: values.mobileNumber,
                message: values.message,
                subject: values.subject

            }
            // newMessageRef.set(requestedPayload);
            console.log(requestedPayload, "payloadData");
        }
    })
    return (
        <>
            <div class="background">
                <p class="heading">Sign Up</p>
                <p class="login">Already have an account? <NavLink to="/login" style={{color: 'black'}} exact> Log in</NavLink></p> 
            </div>
            <div class="main_container">
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-25">
                            <label for="name">Name : </label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="name" name="name" placeholder="Your name..." onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.name}</span>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="email">Email : </label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="email" name="email" placeholder="Your Email..." onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.emailId}</span>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="mobileNumber">Mobile Number : </label>
                        </div>
                        <div class="col-75">
                            <input type="number" id="mobileNumber" name="mobileNumber" placeholder="Your Mobile Number..." onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.mobileNumber}</span>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="subject">Subject : </label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="subject" name="subject" placeholder="Your Subject..." onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.subject}</span>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="message">Message : </label>
                        </div>
                        <div class="col-75">
                            <textarea rows={4} type="text" id="message" name="message" placeholder="Write Something..." onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.message}</span>
                    </div>
                    <button type="submit" class="button" id="submit">Submit</button>
                </form>
            </div>
        </>

    );

}
export default ContactForm;