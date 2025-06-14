import {Link} from "react-router-dom";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo"
            src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Cart</li>
            <li>Contact</li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
  
        </div>
      </div>
    )
  }
  export default Header;