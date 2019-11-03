import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyD2gf4yAzq0A5r7CVro_dVrnFTqKIHFBHs',
  authDomain: 'react-ecommerce-4dbd1.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-4dbd1.firebaseio.com',
  projectId: 'react-ecommerce-4dbd1',
  storageBucket: 'react-ecommerce-4dbd1.appspot.com',
  messagingSenderId: '243227018892',
  appId: '1:243227018892:web:779f24500fdf45fbe49da9',
  measurementId: 'G-J6QJ9PE4ZQ'
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();

    this.db = app.firestore();
    // Social sign-in method
    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }
  // Auth API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);
  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);
  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doAddUserData = data => this.db.collection('users').add(data);

  getProducts = () => this.db.collection('products').get();
}

export default Firebase;