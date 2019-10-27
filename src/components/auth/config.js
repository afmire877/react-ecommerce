import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyD2gf4yAzq0A5r7CVro_dVrnFTqKIHFBHs",
    authDomain: "react-ecommerce-4dbd1.firebaseapp.com",
    databaseURL: "https://react-ecommerce-4dbd1.firebaseio.com",
    projectId: "react-ecommerce-4dbd1",
    storageBucket: "react-ecommerce-4dbd1.appspot.com",
    messagingSenderId: "243227018892",
    appId: "1:243227018892:web:779f24500fdf45fbe49da9",
    measurementId: "G-J6QJ9PE4ZQ"
  };


firebase.initializeApp(firebaseConfig);
export default firebase;