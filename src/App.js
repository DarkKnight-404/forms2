import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormOne from './Pages/FormOne';
import FormTwo from './Pages/FormTwo';
import FormThree from './Pages/FormThree';


function Llinks() {
  return <>
    <div >
      <h1>Candidate Forms</h1>

      <Link to='/form_one'>form one</Link>
      <br/>
      <Link to='/form_two'>form two</Link>
      <br/>
      <Link to='/form_three'>form three</Link>
      <br/>
    </div>
  </>
}
function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>

          {/* <Llinks></Llinks> */}


          {/* <Link to='/form_one'>form one</Link> */}

          {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Llinks />} />
          <Route path="/form_one" element={<FormOne />} />
          <Route path="/form_two" element={<FormTwo />} />
          <Route path="/form_three" element={<FormThree />} />

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

