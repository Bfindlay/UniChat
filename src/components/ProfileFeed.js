
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SinglePost from './SinglePost';
import { StyleSheet, Button, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default class ProfileFeed extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          index: 1,
          name: 'Cat',
          username: 'UniPerson',
          avatar: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
          content: 'I love maths homework!!!'
        },
        {
          index: 1,
          name: 'Cat',
          username: 'UniPerson',
          avatar: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
          content: 'This is fun'
        },
        {
          index: 1,
          name: 'Cat',
          username: 'UniPerson',
          avatar: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
          content: 'I just ate food'
        },
        {
          index: 1,
          name: 'Cat',
          username: 'UniPerson',
          avatar: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg',
          content: 'What is the time'
        }
      ]
    }
  }


  render() {
    const { posts } = this.state;
    const endMsg = posts.length === 0 ? "There aren't any posts yet!" : "That's all the posts for now!"

    return (
      <View>
        <View>
          <View style={styles.post}>
            <TextInput
              value={this.state.typing}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Create a post..."
              onChangeText={text => this.setState({ typing: text })}
            />
            <View style={styles.sendPost}>
              <TouchableOpacity onPress={() => {alert("Post Created")}}>
                <Icon name="send" size={15} color="#000" style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> {Actions.Permissions()}}>
                <Icon name="cog" size={15} color="#000" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
          </View>
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
          title="View More"
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
  sendPost:{
    flex: 1,
    flexDirection:  'row'
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1,
    height: 40
  },
  post: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  permissions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    padding: 3,
    paddingRight: 5
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  end: {
    margin: 10,
    alignSelf: 'center',
    fontSize: 12,
    color: 'grey',
  }
});




