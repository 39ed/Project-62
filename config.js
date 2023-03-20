import firebase from "firebase"

  var firebaseConfig = {
  apiKey: "AIzaSyBvYuiiy-fEJEcyN6a2fE7sNgFiM3yv3pE",
  authDomain: "testing-d3272.firebaseapp.com",
  databaseURL: "https://testing-d3272-default-rtdb.firebaseio.com",
  projectId: "testing-d3272",
  storageBucket: "testing-d3272.appspot.com",
  messagingSenderId: "764134662313",
  appId: "1:764134662313:web:a634ce1a169ac5270189b8"
};

firebase.initializeApp(firebaseConfig)

export default firebase.database()