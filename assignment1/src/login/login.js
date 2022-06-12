import { useFormik } from 'formik';
import { NavLink,useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const Login = () => {

    const navigate = useNavigate();
    const { errors, handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            email : "",
            password : ""
        },
        validationSchema: Yup.object({
            email : Yup.string().required("Email id is required"),
            password : Yup.string().required("Password is required")
        }),
        onSubmit: values => {
            console.log("hello",values);
            navigate('/user');

            let requestedPayload = {
                email: values.email,
                password: values.password,
            }
            // axios.post()
            console.log(requestedPayload, "payloadData");
        }
    })
    return (
        <>
            <div class="background">
                <p class="heading">Login</p>
                <p class="login">Create an account? <NavLink to="/" style={{ color: 'black' }} exact> Sign up </NavLink></p>
            </div>
            <div class="main_container">
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-25">
                            <label for="email">Email Id : </label>
                        </div>
                        <div class="col-75">
                            <input type="text" id="email" name="email" placeholder="Enter your registered email..." onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.email}</span>
                    </div>
                    <div class="row">
                        <div class="col-25">
                            <label for="email">Password : </label>
                        </div>
                        <div class="col-75">
                            <input type="password" id="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                        </div>
                        <span class="errorClass">{errors.password}</span>
                    </div>                  
                    <button type="submit" class="button" id="submit">Login</button>
                </form>
            </div>
        </>

    )

}
export default Login;