import "./UserDetail.css";
import { useNavigate } from 'react-router-dom';

const UserDetail = () => {
    const navigate = useNavigate();

    const logout = () =>{
       navigate("/");
    }
      return(
          <div class="userDetail">
              <div class="user_heading">
                  <p class="title">User Detail : </p>
                  <button type="submit" class="button remove_margin" id="submit" onClick={logout}>Logout</button>
              </div>
              <p class="detail">Your Name : <span class="value">Abc..</span></p>
              <p class="detail">Your EmailId : <span class="value">abc@gmail.com</span></p>
              <p class="detail">Your MobileNumber : <span class="value">1289899...</span></p>
          </div>
      )
  
}
export default UserDetail;