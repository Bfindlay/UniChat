import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { LoginForm, RegisterForm } from './';

// create a component
class Login extends Component {


    renderComponent() {
        console.log(this.props.homeComponent);
        switch (this.props.homeComponent) {
            case 'Login':
                return <LoginForm />
            case 'Register':
                return <RegisterForm />
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../util/logo.png')} />
                    <Text style={styles.title}> UNICHAT</Text>
                    <Text style={styles.subTitle}>For University Students</Text>
                </View>
                <View style={styles.formContainer}>
                    {this.renderComponent()}
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

//make this component available to the app
export default connect(mapStateToProps, {})(Login);