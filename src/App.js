import React, {Component} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{
  
    render(){
      return (
          <Router>
              <Route path="/" exact component={Profile} />
              <Route path="/chat" component={Chat} />
          </Router>
      );
    }
  }
  
  export default App;