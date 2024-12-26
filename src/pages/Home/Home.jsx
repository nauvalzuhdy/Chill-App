import React from 'react'
import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.png'
import hero_title from '../../assets/hero_title.png'
// import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../component/TitleCards/TitleCards'
import TitleCardsVer from '../../component/TitleCardsVer/TitleCardsVer'
import Footer from '../../component/Footer/Footer'
import volume_icon from '../../assets/volume-off_icon.png'


const Home = () => {
    return (
        <div className='home'>
            <Navbar/>
            <div className="hero">
                <img src={hero_banner} alt="" className='banner-img'/>
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img'/>
                    <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                    </p>
                    <div className="hero-btns">
                        <div className='left-btn'>
                            <button className='btn'><img src="" alt="" />Mulai</button>
                            <button className='btn dark-btn'><img src={info_icon} alt="" />Selengkapnya</button>
                            <button className='age'>18+</button>
                        </div>
                        <div className='right-btn'>
                           <button className='volume'><img src={volume_icon} alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-cards">
              <TitleCards/>
            </div>
            <div className="more-cards">
              <TitleCardsVer title={"Top Rating dan Series Hari ini"}/>
              <TitleCardsVer title={"Film Trending"}/>
              <TitleCardsVer title={"Rilis Baru"}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home

// renamed:    package-lock.json -> node_modules/.package-lock.json