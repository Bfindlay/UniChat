
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SinglePost from './SinglePost';
import { StyleSheet, Button, View, Icon, Text, ScrollView } from 'react-native';
import Hr from 'react-native-hr';

const mapStateToProps = ({ App }) => ({ App });


const renderPost = (post, index) => (
    <SinglePost
        key={index}
        name={post.name}
        username={post.username}
        avatar={post.avatar}
        content={post.content}
    />
)

export default class EventFeed extends Component {
    constructor() {
        super();
        this.state = {
            posts: [
                {
                    index: 1,
                    name: 'Cat',
                    username: 'Person',
                    avatar: require('../util/avatar.jpg'),
                    content: 'Cant wait to go to this event!'
                },
                {
                    index: 1,
                    name: 'Cat',
                    username: 'UniPerson',
                    avatar: require('../util/avatar2.jpg'),
                    content: 'This looks like fun!'
                },
            ]
        }
    }


    renderInfo() {
        return (
            <ScrollView>
                <View>
                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Event Name:</Text>
                            <Text style={styles.username}>Study Group</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Event Date: </Text>
                            <Text style={styles.username}>10am 11/11/17</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Description: </Text>
                            <Text style={styles.username}>Fun study group for maths!</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    render() {
        const { posts } = this.state;
        const endMsg = posts.length === 0 ? "There aren't any posts yet!" : "That's all the posts for now!"

        return (
            <View>
                <View>
                    {this.renderInfo()}
                    <Text style={styles.title}> 2 Friends Attending </Text>
                    <Hr lineColor='grey' 
                    lineStyle={{
                        backgroundColor: "blue",
                        height: 2
                     }}
                  />
                    <ScrollView>
                        {
                            posts.map(post => {
                                return renderPost(post, Math.random());
                            })
                        }
                    </ScrollView>
                    <Text style={styles.end}>{endMsg}</Text>
                </View>
                <Button
                    onPress={() => { }}
                    title="Change Event Info"
                    color="#2c3e50"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    title: {
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 5
    },
    end: {
        margin: 10,
        alignSelf: 'center',
        fontSize: 12,
        color: 'grey',
    }, 
    nameContainer: {
        padding: 2,
        flex: 1,
        flexDirection: 'row',
    },
    post: {
        padding: 10
    },
    name: {
        fontWeight: '600',
        fontSize: 14,
    },
    username: {
        fontWeight: '500',
        fontSize: 12,
    },
});




