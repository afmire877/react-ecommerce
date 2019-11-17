import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firebase-storage';

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
    this.storage = app.storage();

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

  doAddUserData = (data, uid) =>
    this.db
      .collection('users')
      .doc(uid)
      .set(data);

  // DB API
  getRoles = () => this.db.collection('roles').get();
  getProducts = () => this.db.collection('products').get();
  getProduct = id =>
    this.db
      .collection('products')
      .doc(id)
      .get();

  // Storage API

  getImage = image =>
    this.storage.ref(`images/${image}`).getDownloadURL();
}

export default Firebase;
