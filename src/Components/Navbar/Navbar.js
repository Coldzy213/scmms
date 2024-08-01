import './Navbar.css'
import logo from '../../assets/logo.jpg'


export const Navbar = () => {
  return (
    <div className = 'nav'>
        <img src = {logo} className = 'logo'/>
        <ul className = 'nav-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Service</li>
        </ul>
    </div>
  )
}
