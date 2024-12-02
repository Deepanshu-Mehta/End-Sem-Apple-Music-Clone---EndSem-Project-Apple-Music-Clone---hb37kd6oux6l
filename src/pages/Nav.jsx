import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({buttonText, buttonPath, login, setLogin, setToken}) => {
    const handleSignOut = () => {
        if (login) {
            setLogin(false);
            setToken('');
        }
    };

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-[#2c2c2c] flex flex-row justify-between text-white items-center">
            <div className='p-3 px-10'>
                <Link to='/'><i className="fa-brands fa-apple fa-2xl text-white text-3xl"/> <span className='text-[x-large]'>Music</span></Link>
            </div>
            <div className='p-3 '>
                <Link to={buttonPath} onClick={handleSignOut}>
                    <p className='bg-[#d60017] rounded-md py-1 px-2'>
                        <i className="fa-solid fa-user"/> {buttonText}
                    </p>
                </Link>
            </div>
        </nav>
        </div>
    )
}

export default Nav
