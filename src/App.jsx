import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { AuthLayout } from './layouts/AuthLayout'
import { NotFoundLayout } from './layouts/NotFoundLayout'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Products } from './pages/Products'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
      </Route>
      <Route element={<NotFoundLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
