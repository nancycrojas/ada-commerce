import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
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
      </Routes>
    </AppLayout>
  )
}

export default App
