import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Sidebar from './sidebar/Sidebar'
import Contact from './contact/Contact'
import About from './About'



function App() {
  return (
    <Router>
      <div className="App">        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />  
            <Route path="/about" element={<About/>} />
          </Routes>
        </div>
        <Sidebar />
      </div>
    </Router>
    
  )
}

export default App
