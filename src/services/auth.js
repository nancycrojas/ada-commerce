import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import { auth } from '../firebase/config'

export const loginWithEmail = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    const { user } = userCredential
    // console.log(user)
    return user
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
  }
}

export const register = async ({ email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const { user } = userCredential
    // console.log(user)
    return user
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.log(errorCode, errorMessage)
  }
}
