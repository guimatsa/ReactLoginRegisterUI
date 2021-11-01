import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Birthdate from './components/birthdate.component';
import Email from './components/email.component';
import Password from './components/password.component';
import Name_Sname from './components/name_sname.component';
import Verify from './components/verify.component';
import MasterForm from './components/steps.component';
import MasterForm2 from './components/steps2.component';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Switch>
              
              <Route exact path='/Email' component={Email} />
              <Route exact path='/Password' component={Password} />
              <Route exact path='/Birthdate' component={Birthdate} />
              <Route exact path='/Name_Sname' component={Name_Sname} />
              <Route exact path='/Verify' component={Verify} />
    
              <Route exact path='/MasterForm' component={MasterForm} />
              <Route exact path='/MasterForm2' component={MasterForm2} />
              
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
