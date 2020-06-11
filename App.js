import React, { Component,Fragment } from 'react';
import {Provider} from 'react-redux'
import CakeContainer from './components/cakeContainer';
import UserContainer from './components/userComponents';
import Login from './components/Login';
import store from './redux/store';
import Routers from './router/router';

class App extends Component{
    render(){
        return(
            
            
            <Provider store={store}>
           <div className="App">
           <Routers />
           {/* <UserContainer /> */}
       
           </div>
           </Provider>
           
            
        
       );
    }
}
export default App;