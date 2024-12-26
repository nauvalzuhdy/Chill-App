import React from 'react';
import './Premium.css';
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import download_icon from '../../assets/download_icon.png'
import quality_icon from '../../assets/4k_icon.png'
import ads_icon from '../../assets/ads_icon.png'
import mode_icon from '../../assets/mode_icon.png'
import roll_icon from '../../assets/roll_icon.png'
import subtitle_icon from '../../assets/subtitle_icon.png'


const Premium = () => {
  return (
    <div className='premium'>
      <Navbar/>
      <div className='container-berlangganan'>
        <h3>Kenapa Harus Berlanggalan?</h3>
        <div className='content'>
          <div className='feature-1'>
            <img src={download_icon} alt="" />
            <p>Download Konten Pilihan</p>
          </div>
          <div className='feature-2'>
            <img src={quality_icon} alt="" />
            <p>Kualitas Maksimal Sampai Dengan 4K</p>
          </div>
          <div className='feature-3'>
            <img src={ads_icon} alt="" />
            <p>Tidak Ada Iklan</p>
          </div>
          <div className='feature-4'>
            <img src={mode_icon} alt="" />
            <p>Tonton di Tv, Tablet, Mobile, dan Laptop</p>
          </div>
          <div className='feature-5'>
            <img src={roll_icon} alt="" />
            <p>Tonton Semua Konten</p>
          </div>
          <div className='feature-6'>
            <img src={subtitle_icon} alt="" />
            <p>Subtitle Untuk Konten Pilihan</p>
          </div>
        </div>
      </div>
      <div className='container-pilih-paket'>
        <h3>Pilih Paketmu?</h3>
        <p>Temukan paket sesuai kebutuhanmu!</p>
        <div className='content-pilih-paket'>
          <div className='feature-paket'>
            <label>Individual</label>
            <br />
            <br />
            <p>Mulai dari Rp49,990/bulan</p>
            <p>1 Akun</p>
            <br />
            <p>
                ✓  Tidak ada iklan
            </p>
            <p>✓ Kualitas 720p</p>
            <p>✓ Download konten pilihan</p>
            <hr />
            <button>Langganan</button>
            <h5>Syarat dan Ketentuan Berlaku</h5>
          </div>
          <div className='feature-paket'>
            <label>Berdua</label>
            <br />
            <br />
            <p>Mulai dari Rp79,990/bulan</p>
            <p>2 Akun</p>
            <br />
            <p>✓ Tidak ada iklan</p>
            <p>✓ Kualitas 1080p</p>
            <p>✓ Download konten pilihan</p>
            <hr />
            <button>Langganan</button>
            <h5>Syarat dan Ketentuan Berlaku</h5>         
          </div>
          <div className='feature-paket'>
            <label>Keluarga</label>
            <br />
            <br />
            <p>Mulai dari Rp159,990/bulan</p>
            <p>5-7 Akun</p>
            <br />
            <p>✓ Tidak ada iklan</p>
            <p>✓ Kualitas 4K</p>
            <p>✓ Download konten pilihan</p>
            <hr />
            <button>Langganan</button>
            <h5>Syarat dan Ketentuan Berlaku</h5>
          </div>
         </div>
      </div>      
      <Footer/>
    </div>
  );
};

export default Premium;
