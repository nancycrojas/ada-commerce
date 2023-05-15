import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { Register } from './pages/auth/Register'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Products } from './pages/Products'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppLayout>
  )
}

export default App
