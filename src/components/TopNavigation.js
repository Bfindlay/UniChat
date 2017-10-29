import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Login, Home, MenuComponent, Chat, ChatList, Profile, CreateEvent, CreateGroup, Navbar, FriendRequests, EventInfo, Permissions } from './';
import { Router, Stack, Scene } from 'react-native-router-flux'
import { SideMenu, List, ListItem } from 'react-native-elements';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'


class TopNavigation extends Component {

    
    render(){
        const { mainContainer, nav, childContainer, iconRow, icon } = styles;
        const { loggedIn, title } = this.props;
 
        return (
            <View style={{ padding: 10, paddingTop: 30, flexDirection: 'row', backgroundColor: '#2c3e50' }}>
            
                <View style={{ flex: 1 }}><Text style={styles.title}>{ this.props.title} </Text></View>
            
                <Menu onSelect={(value) => { console.log("Testing") }}>
                    <MenuTrigger>
                    <Text style={{ fontSize: 20 }}>&#8942;</Text>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.dropdownOptions}>
                    <MenuOption value={1}>
                        <TouchableOpacity onPress={() => { Actions.Profile() }}>
                        <Text style={styles.menuOption}>Profile</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption value={2}>
                        <TouchableOpacity onPress={() => { Actions.Chat() }}>
                        <Text style={styles.menuOption}>Messenger</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption value={3}>
                        <TouchableOpacity onPress={() => { Actions.ChatList() }}>
                        <Text style={styles.menuOption}>Groups</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption value={4}>
                        <TouchableOpacity onPress={() => { Actions.Chat() }}>
                        <Text style={styles.menuOption}>Events</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption value={5}>
                        <TouchableOpacity onPress={() => { Actions.CreateEvent() }}>
                        <Text style={styles.menuOption}>Create Event</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    <MenuOption value={6}>
                    <TouchableOpacity onPress={() => { Actions.CreateGroup() }}>
                        <Text style={styles.menuOption}>Create Group</Text>
                    </TouchableOpacity>
                    </MenuOption>
                    <MenuOption value={7}>
                        <TouchableOpacity onPress={() => { Actions.Chat() }}>
                        <Text style={styles.menuOption}>Log Out</Text>
                        </TouchableOpacity>
                    </MenuOption>
                    </MenuOptions>
                </Menu>
                </View>
        )
    }
}

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

const mapStateToProps = ({app}) => {
   return { loggedIn : app.loggedIn, title: app.title};
}
export default connect(mapStateToProps, { })(TopNavigation);