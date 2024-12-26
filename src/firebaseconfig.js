

// import { initializeApp } from "firebase/app";



// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// const app = initializeApp(firebaseConfig);

// export default app;


import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: `process.env.REACT_APP_FIREBASE_API_KEY`,
  authDomain: `process.env.REACT_APP_FIREBASE_AUTH_DOMAIN`,
  databaseURL: `process.env.REACT_APP_FIREBASE_DATABASE_URL`,
  projectId: `process.env.REACT_APP_FIREBASE_PROJECT_ID`,
  storageBucket: `process.env.REACT_APP_FIREBASE_STORAGE_BUCKET`,
  messagingSenderId: `process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID`,
  appId: `process.env.REACT_APP_FIREBASE_APP_ID`,
  measurementId: `process.env.REACT_APP_MEASUREMENT_ID`
};




// const app = initializeApp(firebaseConfig, '[APP_CONFIG]');
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const databaseUrl = process.env.REACT_APP_FIREBASE_DATABASE_URL;

export default app;


// const fullUrl = `${databaseUrl}/.lp?start=t&ser=60117786&cb=19&v=5&p=${process.env.REACT_APP_FIREBASE_APP_ID}&ns=process`;


