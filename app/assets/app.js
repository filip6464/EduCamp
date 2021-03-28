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
import Homeworks from "./pages/Homeworks";
import Contact from "./pages/Contact";
import Announcements from "./pages/Announcements";
import Login from "./pages/Login";
import background from "./images/background_image.jpg";
import Navbar from "./components/navbar"
import Navigation_ReactBootstrap from "./components/reactBootstrap/Navigation_ReactBootstrap";
import Footer from "./components/Footer";
import AddPost from "./pages/admin/AddPost";
import ManageAnnouncements from "./pages/admin/ManageAnnouncements";
import ManageHomeworks from "./pages/admin/ManageHomeworks";


function App(){

    return (
          <div className="App" style={{ backgroundImage: `url(${background})` }}>
              <Router>
                  <Navigation_ReactBootstrap />
                  <div className="content">
                  <Switch>
                      <Route path="/" exact component={Homeworks}/>
                      <Route path="/homeworks" exact component={Homeworks}/>
                      <Route path="/contact" exact component={Contact}/>
                      <Route path="/announcements" exact component={Announcements}/>
                      <Route path="/login" exact component={Login}/>
                      <Route path="/admin/homeworks" exact component={ManageHomeworks}/>
                      <Route path="/admin/announcements" exact component={ManageAnnouncements}/>
                      <Route path="/admin/addpost" exact component={AddPost}/>
                  </Switch>
                  </div>
                  <Footer />
              </Router>
          </div>
    );
}


ReactDOM.render(<App/>,document.getElementById("root"))

export default App;
