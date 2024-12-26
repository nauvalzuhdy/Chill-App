import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/Logo.png'
import Google_icon from '../../assets/Google.png'
import {login, signup} from '../../firebase'
import loading_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

    // const[signState, setSignState] = useState("Masuk");
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const user_auth = async (event) => {
    //   event.preventDefault();
    //   if(signState==="masuk") {
    //     await login(email, password);
    //   } else {
    //     await daftar(name, email, password);
    //   }
    // }

    const [signState, setSignState] = useState('Masuk');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const user_auth = async (event) => {
      event.preventDefault();
      setLoading(true);
      if (signState === 'Masuk') {
        try {
          await login(username, password);
        } catch (error) {
          setError(error.message);
        }
      } else {
        if (password !== confirmPassword) {
          setError('Kata sandi tidak cocok');
          return;
        }
        try {
          await signup(username, password, confirmPassword);
        } catch (error) {
          setError(error.message);
        }
      }
      setLoading(false);
    };

    

    return (
        loading? <div className="loading-spinner">
          <img src={loading_spinner} alt="" />
        </div>:
        <div className='login'>
            <div className='container'>
               <div className='login-form'>
                  <img src={logo} className='login-logo' alt="" />
                  <h1>{signState}</h1>
                  {signState==="Masuk"?
                    <p>Selamat datang kembali!</p>:<p>Selamat datang!</p>
                  }
                  
                </div>
                <form action="">
                   <p>Username</p>
                   <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder='Masukkan username' />
                   <p>Kata Sandi</p>
                   <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Masukkan kata sandi'/>
                   {signState==="Daftar"? 
                    <>
                      <p>Konfirmasi Kata Sandi</p>
                      <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='Masukkan kata sandi'/>
                    </>: <></>}
                   {error && <p style={{ color: 'red' }}>{error}</p>}
                   <div className='daftar-lupa-sandi'>
                      {signState==="Masuk"?
                      <>
                        <span>Belum punya akun? <a onClick={()=>{setSignState("Daftar")}} href="#">Daftar</a></span>
                        <a href="#">Lupa kata sandi?</a>
                      </>:<span>Sudah punya akun? <a onClick={()=>{setSignState("Masuk")}} href="#">Masuk</a></span>
                    }
                       
                    </div>
                    <button onClick={user_auth} type='submit' className='tombol-masuk'>
                        <span>{signState}</span>
                    </button>
                    <h6>Atau</h6>
                    
                    <button className='btn-google'>
                        {signState==="Masuk"?
                        <>
                          <img src={Google_icon} alt="" />
                          <span>Masuk dengan Google</span>
                        </>:<><img src={Google_icon} alt="" />
                        <span>Daftar dengan Google</span>
                        </>
                        
                    }
                        
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login

// import React, { useState } from 'react';
// import './Login.css';
// import logo from '../../assets/Logo.png';
// import Google_icon from '../../assets/Google.png';
// import { login, signup } from '../../firebase';

// const Login = () => {
//   const [signState, setSignState] = useState('Masuk');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState(null);

//   const user_auth = async (event) => {
//     event.preventDefault();
//     if (signState === 'Masuk') {
//       try {
//         await login(username, password);
//       } catch (error) {
//         setError(error.message);
//       }
//     } else {
//       if (password !== confirmPassword) {
//         setError('Kata sandi tidak cocok');
//         return;
//       }
//       try {
//         await signup(username, password, confirmPassword);
//       } catch (error) {
//         setError(error.message);
//       }
//     }
//   };

//   return (
//     <div className="login">
//       <div className="container">
//         <div className="login-form">
//           <img src={logo} className="login-logo" alt="" />
//           <h1>{signState}</h1>
//           {signState === 'Masuk' ? (
//             <p>Selamat datang kembali!</p>
//           ) : (
//             <p>Selamat datang!</p>
//           )}
//         </div>
//         <form action="">
//           {signState === 'Daftar' ? (
//             <>
//               <p>Username</p>
//               <input
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 type="text"
//                 placeholder="Masukkan username"
//               />
//               <p>Kata Sandi</p>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="Masukkan kata sandi"
//               />
//             </>
//           ) : (
//             <></>
//           )}

//           {signState === 'Daftar' ? (
//             <>
//               <p>Konfirmasi Kata Sandi</p>
//               <input
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 type="password"
//                 placeholder="Masukkan kata sandi lagi"
//               />
//             </>
//           ) : (
//             <></>
//           )}
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <div className="daftar-lupa-sandi">
//             {signState === 'Masuk' ? (
//               <>
//                 <span>Belum punya akun? </span>
//                 <a onClick={() => setSignState('Daftar')} href="#">
//                   Daftar
//                 </a>
//                 <a href="#">Lupa kata sandi?</a>
//               </>
//             ) : (
//               <span>
//                 Sudah punya akun?{' '}
//                 <a onClick={() => setSignState('Masuk')} href="#">
//                   Masuk
//                 </a>
//               </span>
//             )}
//           </div>
//           <button onClick={user_auth} type="submit" className="tombol-masuk">
//             <span>{signState}</span>
//           </button>
//           <h6>Atau</h6>
//           <button className="btn-google">
//             {signState === 'Masuk' ? (
//               <>
//                 <img src={Google_icon} alt="" />
//                 <span>Masuk dengan Google</span>
//               </>
//             ) : (
//               <>
//                 <img src={Google_icon} alt="" />
//                 <span>Daftar dengan Google</span>
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;