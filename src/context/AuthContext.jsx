'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth'
import { auth } from '@/firebase/config'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // 登录函数
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      
      // 保存用户信息到 localStorage
      const userData = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
      }
      localStorage.setItem('user', JSON.stringify(userData))
      
      return result
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  // 登出函数
  const logout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('user')
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  // 监听认证状态变化
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    // 从 localStorage 恢复用户会话
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext) 