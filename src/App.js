import React,{Component} from 'react';
import Navbar from './Component/navbar/Navbar'
import {Provider} from './Component/Context'
import Contacts from './Component/contacts/Contacts'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Component/pages/About'
import PageNotFound from './Component/pages/PageNotFound'
import AddContact from './Component/contacts/AddContact';
import EditContact from './Component/contacts/EditContact';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

class App extends Component{
  render()
  {
    return (
        <Provider>
          <Router>
          <div className= "App">
            <Navbar title="Clinet Panel"/>
            <Switch>
              <Route exact path = "/" component={Contacts} />
              <Route exact path = "/contact/add" component={AddContact} />             
              <Route exact path = "/contact/edit/:id" component={EditContact} />             
              <Route exact path = "/about" component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
          </Router>
        </Provider>
    )
  }
}

export default App;