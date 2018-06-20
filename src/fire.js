import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDUYF5D609Yu7AufIZhcyZnv_8E1aqBNVM",
  authDomain: "blog-8d470.firebaseapp.com",
  databaseURL: "https://blog-8d470.firebaseio.com",
  projectId: "blog-8d470",
  storageBucket: "blog-8d470.appspot.com",
  messagingSenderId: "248546940574"
};
const fire = firebase.initializeApp(config)

export default fire
