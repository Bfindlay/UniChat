
import React, { Component } from 'react';
import { Text, Image, StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Alert, Button, StatusBar } from 'react-native';
import { LoginForm, RegisterForm } from './';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'
import { setTitle } from '../actions'
import { connect } from 'react-redux';
// create a component
class CreateEvent extends Component {

    componentWillMount(){
        this.props.setTitle('Create Event');
    }

    render() {
        console.log('rendered');
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <Text style={styles.title}>Create Group Event</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <StatusBar barStyle="light-content" />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Event Name'
                            placeholderTextColor='rgba(225,225,225,0.7)' />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='ascii-capable'
                            returnKeyType="next"
                            placeholder='Event Date'
                            placeholderTextColor='rgba(225,225,225,0.7)' />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Description'
                            placeholderTextColor='rgba(225,225,225,0.7)' />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='+ Add Friends'
                            placeholderTextColor='rgba(225,225,225,0.7)' />
                        {/*   <Button onPress={onButtonPress} title = 'Login' style={styles.loginButton} /> */}
                        <TouchableOpacity onPress={() =>{Actions.EventInfo()}} style={styles.buttonContainer} >
                            <Text style={styles.buttonText}>Create Event</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}




// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        
        justifyContent: 'center'
    },
    end: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 12,
        color: 'grey',
      },
    loginContainer: {
        paddingTop: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        padding: 20
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    title: {
        color: "#FFF",
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
    },
    containerForm: {
        padding: 20
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
    search: {
        marginRight: 0,
        marginTop: 15
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    },
    footer: {
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        textAlign: 'center',
        padding: 10,
        color: '#fff'
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
    },
});

const mapStateToProps = ({ app }) => {
    const { homeComponent } = app;
    return { homeComponent }
}

//make this component available to the app
export default connect(mapStateToProps, {setTitle})(CreateEvent);