import Home from "./pages/Home/Home"
import Book from "./pages/Book/Book";
import Login from "./pages/Login/Login";
import Data from "./pages/Data/Data";
import {Routes, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/book" element={<Book />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} />
      </Routes>
  );
}

export default App;
