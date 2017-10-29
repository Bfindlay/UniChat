import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Login, Home, MenuComponent, Chat, ChatList, Profile, CreateEvent, CreateGroup, Navbar, FriendRequests, EventInfo, Permissions, TopNavigation } from './';
import { Router, Stack, Scene } from 'react-native-router-flux'
import { SideMenu, List, ListItem } from 'react-native-elements';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'

console.disableYellowBox = true;

 class App extends Component {



  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <Navbar>
        <MenuContext style={{ flex: 1 }}>
          <TopNavigation />
          <Router>
            <Stack key="root">
              <Scene key="Login" hideNavBar={true} component={Login} title="Login" />
              <Scene key="Chat" hideNavBar={true} component={Chat} title="Chat" />
              <Scene key="ChatList" hideNavBar={true} component={ChatList} title="Chat List" />
              <Scene key="Profile" hideNavBar={true} component={Profile} title="Profile" />
              <Scene key="CreateEvent" hideNavBar={true} component={CreateEvent} title="Create Event" />
              <Scene key="CreateGroup" hideNavBar={true} component={CreateGroup} title="Create Group" />
              <Scene key="FriendRequests" hideNavBar={true} component={FriendRequests} title="Requests" />
              <Scene key="EventInfo" hideNavBar={true} component={EventInfo} title="EventInfo" />
              <Scene key="Permissions" hideNavBar={true} component={Permissions} title="Permissions" />
            </Stack>
          </Router>
        </MenuContext>
        </Navbar>
      </Provider>
    )
  }
}


const mapStateToProps = ({app}) => {
  return { title: app.title}
}
export default App;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
  ,
  menuOption: {
    fontWeight: 'bold',
    color: '#fff'
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  menuTrigger: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  menuTriggerText: {
    color: 'lightgrey',
    fontWeight: '600',
    fontSize: 20
  },
  disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentText: {
    fontSize: 18
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#2c3e50',
    backgroundColor: '#2c3e50',
    borderWidth: 2,
    width: '40%',
    height: '100%'
  }
});