import React, { useContext } from 'react';
import './darkmode.css'
import { BsSun } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import ThemeContext from '../../context/ThemeContext';


const DarkMode = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className='darkmode__btn'
            onClick={ toggleTheme }
        >
            {theme === 'dark' ? <MdOutlineDarkMode /> : <BsSun /> }
            
        </button>
    )
}

export default DarkMode