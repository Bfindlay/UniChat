import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers';
import { Text, View, TouchableOpacity } from 'react-native';
import { Login, Home, MenuComponent, Chat } from './';
import { Router, Stack, Scene } from 'react-native-router-flux'
import { SideMenu, List, ListItem } from 'react-native-elements';


export default class App extends Component {

  
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
          <Provider store={store}>
          <Router>
            <Stack key="root">
              <Scene key="Login" hideNavBar={true} component={Login} title="Login"/>
              <MenuComponent> 
                <Scene key="Home" hideNavBar={true} component={Chat} title="Home"/>
              </MenuComponent>
            </Stack>
          </Router>
          </Provider>
        )
    }
}


