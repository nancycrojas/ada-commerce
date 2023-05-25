import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import { auth } from '../firebase/config'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [userLoading, setUserLoading] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLoading(false)
        setUser({
          email: user.email,
          uid: user.uid,
        })
        // const uid = user.uid
        console.log('esta logueado')
        console.log(user)
      } else {
        setUserLoading(false)
        console.log('no esta logueado')
      }
    })
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }

  const handleLogout = () => {
    signOut(auth)
    setUser(null)
  }

  return (
    <UserContext.Provider
      value={{ user, handleLogin, handleLogout, userLoading }}
    >
      {children}
    </UserContext.Provider>
  )
}
