import { Link, Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import logo from '../../assets/descarga.png'
import { AiOutlinePlus} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import './Nav.css'


const Nav = () =>{
    const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
      const userStored = localStorage.getItem('currentUser')
      console.log({userStored})
      if (userStored) {
        setCurrentUser(JSON.parse(userStored))
      }
    }, [])
  
    const handleSignOut = () => {
      setCurrentUser(null);
    };



    return(
        <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='Logo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          {currentUser ? (
            <Link className='nav-link'  to='/ubicacion/create'>
              <AiOutlinePlus/>Nueva Ubicacion
            </Link>
          ) : (
            <span className='nav-link' hidden>Loguees para crea una nueva ubicacion</span>
          )}

          {currentUser ? (
            <span className='nav-link' onClick={handleSignOut}>
              <FiUser/> Cerrar Sesión
            </span>
          ) : (
            <Link className='nav-link sign-in' to='/login'>
             <FiUser/> Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
    )
    
}

export default Nav