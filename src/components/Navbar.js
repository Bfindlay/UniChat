import React, { Component } from 'react';
import { View, Text , Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';

class Navbar extends Component {

    
    render(){
        const { mainContainer, nav, childContainer, iconRow, icon } = styles;
        const { loggedIn } = this.props;
        console.log('nav bar', loggedIn);
        if(loggedIn){
            return (
                <View style={mainContainer} >
                    <View style={childContainer}>
                        {this.props.children}
                    </View>
                    <View style={ nav } >
                        <View style={ iconRow }>
                            <TouchableOpacity onPress={() => Actions.FriendRequests()}><Icon name="group" size={25} color="#fff" /></TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.Profile()}><Icon name="bars" size={25} color="#fff" /></TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.ChatList()}><Icon name="commenting" size={25} color="#fff" /></TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        }else{
            return(
                <View style={mainContainer} >
                <View style={childContainer}>
                    {this.props.children}
                </View>
            </View>
        )
        }
    }
}

const styles = {
    mainContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    childContainer: {
        flex:10,
        backgroundColor: 'transparent'
    },
    nav: {
        backgroundColor: '#2c3e50',
        flex: 1,

    },
    iconRow:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        width: 32,
        height:32,
    }
}

const mapStateToProps = ({app}) => {
   return { loggedIn : app.loggedIn};
}
export default connect(mapStateToProps, { })(Navbar);