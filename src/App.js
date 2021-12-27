import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import RouteConfig from './RouteConfig/RouteConfig';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <Router>
    <Navbar/>
    <div className="App">
       <RouteConfig/>
      
    </div>
    </Router>
  );
}

export default App;
