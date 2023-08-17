import logo from '../img/eabt.png';
import logoMobile from '../img/eabt.png';
import { Link} from 'react-router-dom';
import { CartWidget } from './CartWidget';


function Nav(props) {
  const windowWidth = window.innerWidth;

  return (
    <nav >
      <div className='navbarContainer row'>
        <div className='navRedes'>
          <a href="https://www.facebook.com/profile.php?id=100075629097046"  rel="noopener noreferrer" target="_blank">
            <i className="bi bi-facebook face"></i>
          </a>
          <a
            href="https://www.instagram.com/espacio.analogico/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
          ><i className="inst bi bi-instagram inst"></i></a>
        </div>

        <Link to={'/'} className='navLogo'>
        <img
            src={windowWidth > 768 ? logo : logoMobile}
            alt="Espacio analogico logo"
            className='img-fluid'
          />
        </Link>
        <div  className="navCart" onClick={props.handleCartModal}>
        <CartWidget></CartWidget>
      </div>
      </div>
    </nav>

  );
}

export default Nav;

