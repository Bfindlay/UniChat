
import React, { Component } from 'react';
import { Text, Image, StyleSheet,     Platform,KeyboardAvoidingView, View, TextInput, TouchableOpacity, Alert, Button, StatusBar } from 'react-native';
import { LoginForm, RegisterForm } from './';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'
import { setTitle } from '../actions'
import { connect } from 'react-redux';
// create a component


const contact = {
    imgUrl: require('../util/avatar3.jpeg'),
    imgBackground:
    "h",
    name: "Study Group",
    postion: "Front-end Engineer",
    country: "Thailand",
    city: "Bangkok",
    tels: [
        { id: 1, name: "Mobile", number: "+66 (089)-928-2134" },
        { id: 2, name: "Work", number: "+41 (112)-435-9887" },
    ],
    emails: [
        { id: 1, name: "Personal", email: "elsie-goodman@mail.com" },
        { id: 2, name: "Work", email: "elsie@work.com" },
    ],
    feeds: [
        {
            id: 1,
            name: "",
            image:
            "",
        },
    ],
}


class CreateEvent extends Component {

    componentWillMount(){
        this.props.setTitle('Create Event');
    }

    render() {
        console.log('rendered');
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>

                <View style={styles.imageContainer}>
                <View
                    style={{
                        marginBottom: 12,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={styles.image}
                        source={require('../util/avatar3.jpeg')}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                   
                </View>
                
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
                            placeholderTextColor='black' />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='ascii-capable'
                            returnKeyType="next"
                            placeholder='Event Date'
                            placeholderTextColor='black' />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='Description'
                            placeholderTextColor='black' />
                        <TextInput style={styles.input}
                            autoCapitalize="none"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            autoCorrect={false}
                            keyboardType='email-address'
                            returnKeyType="next"
                            placeholder='+ Add Friends'
                            placeholderTextColor='black' />
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
        backgroundColor: '#fff',
        
        justifyContent: 'center'
    },
    imageContainer: {
        backgroundColor: "transparent",
        ...Platform.select({
            ios: {
                alignItems: "center",
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: "center",
            },
        }),
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
    image: {
        borderRadius: 40,
        height: 80,
        marginBottom: 10,
        width: 80,
    },
    formContainer: {
        padding: 20,
        backgroundColor : '#fff'
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
        backgroundColor: 'rgba(225,225,255,0.2)',
        marginBottom: 10,
        textAlign: 'center',
        padding: 10,
        color: '#000'
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