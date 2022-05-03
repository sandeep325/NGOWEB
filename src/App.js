import React from "react";
import { BrowserRouter as Router, Route, Switch , } from 'react-router-dom';
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Pages/Home";
import HowitWork from "./Components/Pages/HowitWork";
import Donate from "./Components/Pages/Donate";
import Gallery from "./Components/Pages/Gallery";
import Blog from "./Components/Pages/Blog";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import BlogDetail from "./Components/Pages/BlogDetail";
function App() {
  return (
    <>
      <Router>

<Header/>
      
<Switch>
                   <Route exact path="/" component={Home} />
                    <Route exact path="/howit_work" component={HowitWork} />
                    <Route exact path="/donate" component={Donate} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path = "/bloglist"   component={Blog} />
                    <Route exact path = "/about" component={About} />
                    <Route exact path = "/contact" component={Contact} /> 
                    <Route exact path = "/blog_single" component={BlogDetail} /> 

                  </Switch>

<Footer/>
</Router>
    </>

  );
}

export default App;
