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
import { Actions } from 'react-native-router-flux'
const NAME = '@UniPerson';
const CHANNEL = 'Random';
const AVATAR =
    'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';

class Chat extends React.Component {
    state = {
        typing: '',
        messages: ['Hello'],
    };

    componentWillMount() {
        this.props.setTitle('Group Chat');
    }

    sendMessage = () => {
        // read message from component state
        const message = this.state.typing;
    
        // send message to our channel, with sender name
        let m = {
          channel: CHANNEL,
          sender: NAME,
          avatar: AVATAR,
          message,
        };
        
        this.setState({ messages : this.state.messages.concat([m])})
        // set the component state (clears text input)
        this.setState({
          typing: '',
        });
      };

    renderItem({ item }) {
        return (
            <View style={styles.row} key={Math.random()} >
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <View style={styles.rowText}>
                    <Text style={styles.sender}>{item.sender}</Text>
                    <Text style={styles.message}>{item.message}</Text>
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
                    <KeyboardAvoidingView behavior="padding">
                    <TouchableOpacity onPress={() => {Actions.CreateEvent()}}>
                    <Text style={styles.end}>Create Event</Text>
                    </TouchableOpacity>
                        <View style={styles.footer}>
                            <TextInput
                                value={this.state.typing}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Sag etwas..."
                                onChangeText={text => this.setState({ typing: text })}
                            />
                            <TouchableOpacity onPress={this.sendMessage}>
                                <Text style={styles.send}>Send</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                   
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
export default connect(mapStateToProps, { setTitle })(Chat);



const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
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
    end: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 12,
        color: 'grey',
    },
    message: {
        fontSize: 18,
    },
    sender: {
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
        flex: 1,
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20,
    },
});