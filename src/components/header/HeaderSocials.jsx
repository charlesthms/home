import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const HeaderSocials = () => {

    return (
        <div
            className='header__socials'
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1000"
        >
            <a href="https://github.com" target="_blank"><BsGithub /></a>
            <a href="" target="_blank"><BsLinkedin /></a>
            <a href="" target="_blank"><HiOutlineMail /></a>
        </div>
    )
}

export default HeaderSocials