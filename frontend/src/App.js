
import './App.css';
import HomePage from "./Pages/HomePage.jsx";
import SpecialsPage from "./Pages/SpecialsPage.jsx";
import MenuPage from "./Pages/MenuPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";

import { BrowserRouter, Route } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Route path = "/" component={HomePage} exact></Route>
          <Route path = "/Menu" component={MenuPage} exact></Route>
          <Route path = "/Login" component={LoginPage} exact></Route>
          <Route path = "/Specials" component={SpecialsPage} exact></Route>
          <Route path = "/SignIn" component={SignInPage} exact></Route>
          <Route path = "/Register" component={RegisterPage} exact></Route>
          <Route path="/profile" component={ProfilePage} exact></Route>
        </main>
        <footer>
          <h6 className="row center">eBistrot Pty Ltd</h6>
        </footer>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
