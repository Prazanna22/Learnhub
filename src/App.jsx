import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminPage } from "./components/AdminPage"
import { HomePage } from "./components/HomePage"
import { Navbar } from "./components/Navbar";



function App() {
 

  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
