import oldman from '../../assets/oldman-picture.jpg'
import holding from '../../assets/holding-hands.jpg'

import './Person.css'

export const Person = () => {
  return (
    <div className = 'personImg'>
        <img src = {oldman} className = 'oldman'/>
        <img src = {holding} className = 'holding-hands'/>
    </div>
  )
}
