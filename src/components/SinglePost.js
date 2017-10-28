import React, { Component } from 'react';
import { ListItem, Text, StyleSheet, View, Image } from 'react-native';

export default class SinglePost extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
            <Image style={styles.avatar} source={{ uri: this.props.avatar }} />
            <View>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{this.props.name}</Text>
                <Text style={styles.username}>@{this.props.username}</Text>
            </View>
            <Text style={styles.content}>{this.props.content}</Text>
            </View>
        </View>
        )
    }
  
}

const styles = StyleSheet.create({
nameContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  post:{
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
  content: {
    fontSize: 16,
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