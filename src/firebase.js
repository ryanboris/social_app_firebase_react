import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { config } from './config'

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`)

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const createdAt = new Date()
    const { displayName, email, photoURL } = user
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error(error)
    }
  }
  return getUserDocument(user.uid)
}

export const getUserDocument = async uid => {
  if (!uid) return null
  try {
    const userDocument = await firestore
      .collection('users')
      .doc(uid)
      .get()

    return { uid, ...userDocument.data() }
  } catch (error) {
    console.error(error)
  }
}

window.firebase = firebase

export default firebase
