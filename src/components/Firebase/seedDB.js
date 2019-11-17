const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccount.json');

const firebaseConfig = {
  apiKey: 'AIzaSyD2gf4yAzq0A5r7CVro_dVrnFTqKIHFBHs',
  authDomain: 'react-ecommerce-4dbd1.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-4dbd1.firebaseio.com',
  projectId: 'react-ecommerce-4dbd1',
  storageBucket: 'react-ecommerce-4dbd1.appspot.com',
  messagingSenderId: '243227018892',
  appId: '1:243227018892:web:779f24500fdf45fbe49da9',
  measurementId: 'G-J6QJ9PE4ZQ'
};

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(
      serviceAccount,
      firebaseConfig.databaseURL
    );
    console.log('Firebase Initialized');

    await firestoreService.restore(
      './src/components/Firebase/data.json'
    );
    console.log('Upload Success');
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
