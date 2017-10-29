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

import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux';
import { setTitle } from '../actions'

const NAME = '@UniPerson';
const CHANNEL = 'Random';
const AVATAR =
    'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';
class ChatList extends React.Component {
    state = {
        typing: '',
        messages: [{
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        },
        {
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        }, {
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        },
        {
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        },
        {
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        },
        {
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        },
        {
            channel: 'Maths',
            sender: 'Maths',
            avatar: AVATAR,
            message: 'Maths',
        }],
    };

    renderItem({ item }) {
        return (
            <TouchableOpacity onPress={() => {Actions.Chat()}}>
            <View style={styles.row} key={Math.random()} >
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <View style={styles.rowText}>
                    <Text style={styles.sender}>{item.sender}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

    componentWillMount() {
        this.props.setTitle('Chat Lists');
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <KeyboardAvoidingView behavior="padding">
                        <View style={styles.footer}>
                            <TextInput
                                value={this.state.typing}
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Search..."
                                onChangeText={text => this.setState({ typing: text })}
                            />
                            <TouchableOpacity >
                                <Icon name="search" size={30} color="#fff" style={styles.search} />
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                    <FlatList
                        data={this.state.messages}
                        renderItem={this.renderItem}
                        keyExtractor={item => Math.random()}
                    />
                    <TouchableOpacity onPress={() => {Actions.CreateGroup()}}>
                    <Text style={styles.end}>Create Group</Text>
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
export default connect(mapStateToProps, { setTitle })(ChatList);







const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    end: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 12,
        color: 'grey',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    search: {
        marginRight: 20,
        marginTop: 15
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
});
