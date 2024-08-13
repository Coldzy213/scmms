import oldman from '../../assets/oldman-picture.jpg'
import holding from '../../assets/holding-hands.jpg'

import './Main.css'

export const Main = () => {
  return (
    <div className = 'mainSection'>

      {
        //This part is the image and the description
      }
      <div className = 'personImg'>
          <div className = 'text'>
            <h2>WELCOME TO SENIOR CITIZEN MEMBERSHIP MANAGEMENT SYSTEM</h2>
            <p> Embrace a vibrant journey filled with friendship, purpose, 
                and enriching experiences. Explore our membership benefits and
                join us in creating cherished memories together.
            </p>
          </div>
          <img src = {oldman} className = 'oldman' alt = 'oldmanImage'/>
          <img src = {holding} className = 'holding-hands' alt = 'holding-handsImage'/>
      </div>
      
      {
        //This part is the login form
      }
      <div className = 'loginForm'>
        <div className = 'wrapper'>
            <h2>Login</h2>
            <div className = 'input-box'>
                <input type = 'text' placeholder = 'Username'/>
            </div>
            <div className = 'input-box'>
                <input type = 'password' placeholder = 'Password'/>
            </div>
            <div className = 'forgetLink'>
                <a href = '#'>Forgot Password?</a>
            </div>
            <div class="button">
              <input type="button" value="Login"/>
            </div>
        </div>
      </div>
    </div>
    
  )
}
