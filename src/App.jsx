import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//Import Style
import './App.scss'

//Import Pages
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Logements from './pages/Logements'
import Error from './pages/Error'

//Import Layouts
import Header from './layouts/Header'
import Footer from './layouts/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Logements" element={<Logements />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Error" element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/erreur" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App