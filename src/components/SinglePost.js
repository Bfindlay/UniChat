import React, { Component } from 'react';
import { ListItem, Text, StyleSheet, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'
import Prompt from 'react-native-prompt';
export default class SinglePost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promptVisible: false,
            message : ''
        }
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <View style={styles.row} key={Math.random()} >
                    <Image style={styles.avatar} source={{ uri: this.props.avatar }} />
                    <View style={styles.rowText}>
                        <Text style={styles.sender}>{this.props.username}</Text>
                        <Text style={styles.message}>{this.props.content}</Text>
                        <TouchableOpacity onPress={() => { this.setState({promptVisible : true})}}><Icon name="commenting" size={12} color="grey" /></TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { Actions.Permissions()}}><Icon name="cog" size={12} color="grey" /></TouchableOpacity>
                </View>
                <View>
                </View>
                <Prompt
                    title="Post a comment"
                    placeholder="Start typing"
                    defaultValue=""
                    visible={ this.state.promptVisible }
                    onCancel={ () => this.setState({
                    promptVisible: false,
                    message: "You cancelled"
                    }) }
                    onSubmit={ (value) => this.setState({
                    promptVisible: false,
                    message: `You said "${value}"`
                    })}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    nameContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    main: {
        flex: 1,
    },
    post: {
        padding: 10
    },
    name: {
        fontWeight: '600',
        fontSize: 14,
    },
    username: {
        fontWeight: '200',
        fontSize: 12,
    },
    iconRow: {
        flex: 1,
        paddingTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content: {
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10,
    },
    rowText: {
        flex: 1,
    },
    message: {
        fontSize: 18,
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10,
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10,
    },
});


// <View>
// <Thumbnail size={60} source={this.props.profilePicture} />
// <View>
//   <View style={styles.nameContainer}>
//     <Text style={styles.name}>{this.props.name}</Text>
//     <Text style={styles.username}>@{this.props.username}</Text>
//   </View>
//   <Text style={styles.content}>{this.props.content}</Text>
// </View>
// </View>