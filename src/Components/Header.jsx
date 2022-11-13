import logo from '../assets/imgs/logo.png';
import '../assets/styles/Header.css';
import Plantilla from './Plantilla';

function Header() {
    return (
      <div>
        <header>
            <img src={logo} alt="cat"/>
            <h1>Barber Sholos</h1>
            <nav>
             <ul>
               <li><a href="#">Cortes de Moda</a></li>
               <li><a href="#">Contacto</a></li>
               <li><a href="#">Ubicación</a></li>
               <li><a href="#">Reservas</a></li>
               <input type="search" placeholder="Search" id="Buscador" />
             </ul>
            </nav>
        </header>
      </div>
        
      );
}

export default Header;
