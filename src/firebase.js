import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {config} from './config'

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

window.firebase = firebase

export default firebase
