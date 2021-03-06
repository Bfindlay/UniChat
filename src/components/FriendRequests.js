import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    FlatList,
    Image,
} from 'react-native';

import { connect } from 'react-redux';
import { setTitle } from '../actions'


import Icon from 'react-native-vector-icons/FontAwesome';

const NAME = '@UniPerson';
const CHANNEL = 'Random';
const AVATAR =
    'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';

class FriendRequests extends React.Component {
    state = {
        typing: '',
        messages: [{
            channel: 'Maths',
            sender: '@Person',
            avatar: AVATAR,
            message: '8 Mutual Friends',
        },
        {
            channel: '',
            sender: '@UniPerson',
            avatar: AVATAR,
            message: '13 Mutual Friends',
        }],
    };

    componentWillMount(){
        this.props.setTitle('Friend Requests');
    }
    renderItem({ item }) {
        return (
            <View style={styles.row} key={Math.random()} >
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <View style={styles.rowText}>
                    <Text style={styles.sender}>{item.sender}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
                <View style={styles.iconRow}>
                <TouchableOpacity>
                <Icon name="check" size={20} color="#00FF00" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name="remove" size={20} color='#FF0000' style={styles.icon} />
                </TouchableOpacity>
            </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <FlatList
                        data={this.state.messages}
                        renderItem={this.renderItem}
                        keyExtractor={item => Math.random()}
                    />
                    <TouchableOpacity>
                    <Text style={styles.end}>Accept All Requests</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({app})  => {
    const { homeComponent } = app;
    return { homeComponent }
}

//make this component available to the app
export default connect(mapStateToProps, { setTitle })(FriendRequests);



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    title: {
        color: "#2c3e50",
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        opacity: 0.9
    },
    iconRow: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' 
    },
    container: {
        flex: 10,

        backgroundColor: '#FFF',
    },
    create: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10
    },
    search: {
        marginRight: 20,
        marginTop: 15
    },
    end: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 12,
        color: 'grey',
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
    nameInput: {
        backgroundColor: 'rgba(225,225,225,0.8)',
        textAlign: 'center',
        padding: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    message: {
        fontSize: 14,
    },
    sender: {
        fontSize: 12,
        fontWeight: 'bold',
        paddingRight: 10,
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee',
    },
    input: {
        paddingHorizontal: 20,
        fontSize: 18,
        height: 60,
        flex: 1,
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
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
});
