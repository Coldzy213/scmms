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
          <div>
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
            
        </div>
      </div>
    </div>
    
  )
}
