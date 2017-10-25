import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import { switchForm } from '../actions';
import { Actions } from 'react-native-router-flux'
const onButtonPress = () => {
    Alert.alert('Button has been pressed!');

};

// create a component
class LoginForm extends Component {

    constructor(props){
        super(props);
    }

    login(){
        Actions.Home();
    }
    setRegister(){
        this.props.switchForm('Register');
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Email'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput style={styles.input}
                    returnKeyType="go" ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />
                {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}

                <TouchableOpacity style={styles.buttonContainer} onPress={this.login.bind(this)}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.setRegister.bind(this)}>
                    <Text style={styles.register} > Dont have an account? Register </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    register: {
        color: '#fff',
        textAlign: 'center',
        margin: '4%'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        textAlign: 'center',
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    }

});

const mapStateToProps = ({app})  => {
    const { homeComponent } = app;
    return { homeComponent }
}

//make this component available to the app
export default connect(mapStateToProps, { switchForm })(LoginForm);