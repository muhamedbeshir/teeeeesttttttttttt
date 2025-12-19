// Utility functions for authentication using localStorage

export const saveUser = (userData) => {
  const users = getUsers()
  // Check if username already exists
  const existingUser = users.find(u => u.username === userData.username && u.userType === userData.userType)
  if (existingUser) {
    return { success: false, message: 'اسم المستخدم موجود بالفعل' }
  }
  
  // Add new user
  users.push({
    id: Date.now().toString(),
    username: userData.username,
    password: userData.password,
    userType: userData.userType,
    createdAt: new Date().toISOString()
  })
  
  localStorage.setItem('users', JSON.stringify(users))
  return { success: true }
}

export const getUsers = () => {
  const users = localStorage.getItem('users')
  return users ? JSON.parse(users) : []
}

export const loginUser = (username, password, userType) => {
  const users = getUsers()
  const user = users.find(u => 
    u.username === username && 
    u.password === password && 
    u.userType === userType
  )
  
  if (user) {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userType', userType)
    localStorage.setItem('currentUser', JSON.stringify(user))
    return { success: true }
  }
  
  return { success: false, message: 'اسم المستخدم أو كلمة المرور غير صحيحة' }
}

export const logout = () => {
  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userType')
  localStorage.removeItem('currentUser')
}

export const isAuthenticated = () => {
  return localStorage.getItem('isLoggedIn') === 'true'
}

