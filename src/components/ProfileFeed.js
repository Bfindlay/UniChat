
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SinglePost from './SinglePost';
import { StyleSheet, Button, View, Icon,Text, ScrollView } from 'react-native';


const mapStateToProps = ({ App }) => ({ App});


const renderPost = (post, index) => (
  <SinglePost
    key={index}
    name={post.name}
    username={post.username}
    profilePicture={post.profilePicture}
    content={post.content}
  />
)

export default class ProfileFeed extends Component {
  constructor(){
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


  render(){
    const { posts } = this.state;
    const endMsg = posts.length === 0 ? "There aren't any posts yet!" : "That's all the posts for now!"

    return (
      <View>
      <View>
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
      onPress= {() => {} }
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




