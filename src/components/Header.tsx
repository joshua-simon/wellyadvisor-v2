import { NavLink } from 'react-router-dom'

const Header =  () => {
   
        return(
            <header>
                <div className = 'container'>
                    <div className = 'logo'>
                        <img src="https://img.icons8.com/ios/50/000000/tripadvisor.png"/>
                        <p>Wellyadvisor</p>
                    </div>
                    <div className='container-links'>
                        <NavLink to = '/'>
                            <img src="https://img.icons8.com/ios/50/000000/home--v1.png"/>
                        </NavLink>
                        <img  src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-logout-interface-dreamstale-lineal-dreamstale.png" style = {{cursor:'pointer'}}/>
                        <NavLink to = '/signup' className = 'login-register'>
                          Register
                        </NavLink>
                    </div>
                </div>
            </header>
        )
    }
    
    export default Header