
import './App.css';
import HomePage from "./Pages/HomePage.jsx";
import SpecialsPage from "./Pages/SpecialsPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

import { BrowserRouter, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route path = "/" component={HomePage} exact></Route>
          <Route path = "/Menu" component={MenuPage} exact></Route>
          <Route path = "/Login" component={LoginPage} exact></Route>
          <Route path = "/Specials" component={SpecialsPage} exact></Route>
        </main>
        <footer>
          <h6 className="row center">eBistrot Pty Ltd</h6>
        </footer>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
