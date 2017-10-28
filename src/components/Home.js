import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LoginForm, RegisterForm, MenuComponent } from './';
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

class Home extends Component {


    constructor() {
        super();

    }


    render() {

        return (
            <MenuContext style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.titel}> HELLOOO </Text>
                </View>
            </MenuContext>
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title: {
        color: "#FFF",
        marginTop: 200,
        width: 180,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.9
    },
    subTitle: {
        color: '#fff',
        marginTop: 4,
        fontSize: 16
    }
});

const mapStateToProps = ({ app }) => {
    const { homeComponent } = app;
    return { homeComponent }
}

export default connect(mapStateToProps, {})(Home);