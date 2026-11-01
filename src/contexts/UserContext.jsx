import { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext()

const DEMO_USERS = [
  {
    id: '1',
    email: 'demo@teslaworld.com',
    password: 'demo123',
    name: 'Alex Tesla',
    avatar: null,
    role: 'user',
    favorites: [],
    savedConfigs: [],
    createdAt: '2025-01-15'
  },
  {
    id: 'admin',
    email: 'admin@teslaworld.com',
    password: 'uvays1221',
    name: 'Admin',
    avatar: null,
    role: 'admin',
    favorites: [],
    savedConfigs: [],
    createdAt: '2024-01-01'
  }
]

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tesla-world-user')
    return saved ? JSON.parse(saved) : null
  })
  const [users, setUsers] = useState(() => {
    // Always ensure admin password is the fixed one
    const saved = localStorage.getItem('tesla-world-users')
    let list = saved ? JSON.parse(saved) : DEMO_USERS
    list = list.map(u => 
      u.role === 'admin' ? { ...u, password: 'uvays1221', email: 'admin@teslaworld.com' } : u
    )
    // Ensure admin account exists
    if (!list.find(u => u.role === 'admin')) {
      list.push(DEMO_USERS.find(u => u.role === 'admin'))
    }
    return list
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('tesla-world-user', JSON.stringify(user))
    } else {
      localStorage.removeItem('tesla-world-user')
    }
  }, [user])

  useEffect(() => {
    localStorage.setItem('tesla-world-users', JSON.stringify(users))
  }, [users])

  const login = (email, password) => {
    // Admin: faqat parol — uvays1221
    if (password === 'uvays1221') {
      const admin = users.find(u => u.role === 'admin') || {
        id: 'admin',
        email: 'admin@teslaworld.com',
        name: 'Admin',
        avatar: null,
        role: 'admin',
        favorites: [],
        savedConfigs: [],
        createdAt: '2024-01-01'
      }
      const { password: _, ...safeUser } = admin
      setUser(safeUser)
      return { success: true, user: safeUser }
    }

    // Boshqa userlar: faqat parol
    const found = users.find(u => u.password === password && u.role !== 'admin')
    if (found) {
      const { password: _, ...safeUser } = found
      setUser(safeUser)
      return { success: true, user: safeUser }
    }
    return { success: false, error: 'Noto‘g‘ri parol' }
  }

  const register = (name, email, password) => {
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' }
    }
    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      avatar: null,
      role: 'user',
      favorites: [],
      savedConfigs: [],
      createdAt: new Date().toISOString().split('T')[0]
    }
    setUsers(prev => [...prev, newUser])
    const { password: _, ...safeUser } = newUser
    setUser(safeUser)
    return { success: true, user: safeUser }
  }

  const logout = () => setUser(null)

  const updateProfile = (updates) => {
    if (!user) return
    const updated = { ...user, ...updates }
    setUser(updated)
    setUsers(prev => prev.map(u => u.id === user.id ? { ...u, ...updates } : u))
  }

  const addFavorite = (vehicleId) => {
    if (!user) return
    if (user.favorites.includes(vehicleId)) return
    const updated = { ...user, favorites: [...user.favorites, vehicleId] }
    setUser(updated)
    setUsers(prev => prev.map(u => u.id === user.id ? updated : u))
  }

  const removeFavorite = (vehicleId) => {
    if (!user) return
    const updated = { ...user, favorites: user.favorites.filter(id => id !== vehicleId) }
    setUser(updated)
    setUsers(prev => prev.map(u => u.id === user.id ? updated : u))
  }

  return (
    <UserContext.Provider value={{
      user,
      users,
      login,
      register,
      logout,
      updateProfile,
      addFavorite,
      removeFavorite,
      isAdmin: user?.role === 'admin',
      isAuthenticated: !!user
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) throw new Error('useUser must be used within UserProvider')
  return context
}
