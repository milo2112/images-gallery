import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import LayoutCard from  './components/LayoutCard.jsx'

function App() {
  return (
        <div className='container'>
          <Header title = "Galeria de imágenes con React" />
          <LayoutCard />
          <Footer footer = "Todos los derechos reservados" />
        </div>
  )
}

export default App;
