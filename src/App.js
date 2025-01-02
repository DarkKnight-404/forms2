import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormOne from './Pages/FormOne';



function App() {
  return (
    <div className="App">

        
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
        <Route path="/form_one" element={<FormOne />} />

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

