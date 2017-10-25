import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { LoginForm, RegisterForm, ListMenu } from './';


import Drawer from 'react-native-drawer'

class MenuComponent extends React.Component {
    render() {
        return (
            <Drawer
                type="static"
                content={ <ListMenu /> }
                openDrawerOffset={100}
                styles={drawerStyles}
                tweenHandler={Drawer.tweenPresets.parallax}
            >
                { this.props.children }
            </Drawer>
        )
    }
}

const mapStateToProps = ({ app }) => {
    const { homeComponent } = app;
    return { homeComponent }
}


const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  }

export default connect(mapStateToProps, {})(MenuComponent);