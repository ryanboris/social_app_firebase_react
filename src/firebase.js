import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyDhqrHTH_8i427oYMM8gcbWpEjKxGpVLbs',
  authDomain: 'socialeyes-rboris.firebaseapp.com',
  databaseURL: 'https://socialeyes-rboris.firebaseio.com',
  projectId: 'socialeyes-rboris',
  storageBucket: 'socialeyes-rboris.appspot.com',
  messagingSenderId: '627510644545'
}

firebase.initializeApp(config)

export const firestore = firebase.firestore()

window.firebase = firebase

export default firebase
