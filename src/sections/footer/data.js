import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { FaLinkedin } from "react-icons/fa";
import {AiFillGithub} from 'react-icons/ai'

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#services', title: 'Skills'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#experience', title: 'Experience'},
    {id: 6, link: '#contact', title: 'Contact'}
]

export const socials = [
    {id: 1, link: 'https://instagram.com', icon: <AiOutlineInstagram/>},
    {id: 2, link: 'https://twitter.com/omonuj', icon: <AiOutlineTwitter/>},
    {id: 3, link: 'https://www.linkedin.com/in/odoh-jonah/', icon: <FaLinkedin/>},
    {id: 4, link: null, icon: <AiFillGithub/>}
]
