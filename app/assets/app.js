/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Homeworks from "./pages/Homeworks";
import Contact from "./pages/Contact";
import Announcements from "./pages/Announcements";
import Login from "./pages/Login";
import background from "./images/background_image.jpg";


function App(){
    return (
          <div className="App container-fluid" style={{ backgroundImage: `url(${background})` }}>
              <Router>
                  <Navigation />
                  <Switch>
                      <Route path="/" exact component={Home}/>
                      <Route path="/homeworks" exact component={Homeworks}/>
                      <Route path="/contact" exact component={Contact}/>
                      <Route path="/announcements" exact component={Announcements}/>
                      <Route path="/login" exact component={Login}/>
                  </Switch>
              </Router>
          </div>
    );
}

const Home = () => (
    <div>
        <h1>homepage</h1>
    </div>
);

ReactDOM.render(<App/>,document.getElementById("root"))

export default App;
