import React from 'react'
import tema_aks from "../assets/temaaks.png"
import btnAks from "../assets/Снимок_экрана_2024-05-01_132638-removebg-preview.png"
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <img src={tema_aks} alt="" />
                    <div className='btn_aks'> <img src={btnAks} alt="" /></div>
                    <button className="btn_login">ВОЙТИ</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
