import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCS4yHQJbxbZDNJzw8-qUmIa5C7t-z_ea8",
  authDomain: "bt3103-fb450.firebaseapp.com",
  databaseURL: "https://bt3103-fb450.firebaseio.com",
  projectId: "bt3103-fb450",
  storageBucket: "bt3103-fb450.appspot.com",
  messagingSenderId: "648095119323",
  appId: "1:648095119323:web:e8843a852ed90ac43899fe",
  measurementId: "G-N0J7JCDSRW"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;