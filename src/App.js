import React from 'react';
import NavBar from './components/NavBar'
import {BrowserRouter,Route} from 'react-router-dom'
import Python from './components/Python'
import Home from './components/Home'
import JavaScript from './components/JavaScript'
class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
        <NavBar/>
           <Route exact path="/" component={Home}/>
           <Route path="/python" component={Python}/>
           <Route path="/javascript" component={JavaScript} />
        </BrowserRouter>
    )
  }
}

export default App;
