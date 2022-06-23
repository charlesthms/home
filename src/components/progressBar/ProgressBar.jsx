import React, { useEffect, useState } from 'react';
import { useWindowScroll } from 'react-use';
import './progressBar.css';


const ProgressBar = () => {

    const { x, y } = useWindowScroll();
    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrolled(((y / height) * 100));
    }, [y]);

    return (
        <div className="progress-bar-wrapper">
            <div className='progress-bar' style={{ height: `${scrolled}%` }}></div>
        </div>
    )
}

export default ProgressBar