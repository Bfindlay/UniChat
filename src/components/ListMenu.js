import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,ScrollView} from 'react-native';
import { LoginForm, RegisterForm, MenuComponent } from './';

class ListMenu extends Component {


    constructor() {
        super();

    }


    render() {

        return (
            
            <ScrollView>
                <Text> Hello </Text>
            </ScrollView>

        );
    }
}

const mapStateToProps = ({ app }) => {
    const { homeComponent } = app;
    return { homeComponent }
}

export default connect(mapStateToProps, {})(ListMenu);