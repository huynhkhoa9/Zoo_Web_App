import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Containers/Main'
import Animals from './Containers/Animals'
import Employees from './Containers/Employees'
import AddAnimal from './Containers/AddAnimal'
import AnimalAdded from './Containers/AnimalAdded'
import AddEmployee from './Containers/AddEmployee'
import EmployeeAdded from './Containers/EmployeeAdded'
import SignUp from './Containers/SignUp'
import UserMain from './Containers/UserMain'
import Login from './Containers/Login'
import EmployeeLogin from './Containers/EmployeeLogin'
import EmployeeMain from './Containers/EmployeeMain'
import AddRevenue from './Containers/AddRevenue'
import RevenueAdded from './Containers/RevenueAdded'

class App extends Component{

  render(){
    return(
      <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/Animals" component={Animals}></Route>
            <Route exact path="/Employees" component={Employees}></Route>
            <Route exact path="/AddAnimal" component={AddAnimal}></Route>
            <Route exact path="/AnimalAdded" component={AnimalAdded}></Route>
            <Route exact path="/RevenueAdded" component={RevenueAdded}></Route>
            <Route exact path="/AddEmployee" component={AddEmployee}></Route>
            <Route exact path="/EmployeeAdded" component={EmployeeAdded}></Route>
            <Route exact path="/Main" component={Main}></Route>
            <Route exact path="/SignUp" component={SignUp}></Route>
            <Route exact path="/UserMain" component={UserMain}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/EmployeeLogin" component={EmployeeLogin}></Route>
            <Route exact path="/EmployeeMain" component={EmployeeMain}></Route>
            <Route exact path="/AddRevenue" component={AddRevenue}></Route>
          </Switch>
      </Router>
    )
  }
}

export default App;
