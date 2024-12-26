
import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={Logo} alt="" />
                <p>@2023 Chill All Right Reserved</p>
            </div>
            
            <div className='footer-links'>
               <ul className='Genre'>
                   <h3>Genre</h3>
                   <li>Aksi</li>
                   <li>Anak-Anak</li>
                   <li>Anime</li>
                   <li>Britania</li>
                   <li>Drama</li>
                   <li>Fantasi ilmiah & Fantasi</li>
                   <li>Kejahatan</li>
                   <li>KDrama</li>
                   <li>Komedi</li>
                   <li>Petualangan</li>
                   <li>Perang</li>
                   <li>Romantis</li>
                   <li>Sains & Alam</li>
                   <li>Thriller</li>
                </ul>
            
                <ul className='Bantuan'>
                   <h3>Bantuan</h3>
                   <li>FAQ</li>
                   <li>Kontak Kami</li>
                   <li>Privasi</li>
                   <li>Syarat & Ketentuan</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer