import React, { Component } from "react"
import { Card, Rating } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { setTitle } from '../actions'
import {
    Animated,
    Dimensions,
    Image,
    Linking,
    ListView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native"
import { TabViewAnimated, TabBar } from "react-native-tab-view"
import ProfileFeed from "./ProfileFeed"

const styles = StyleSheet.create({
    cardWrapper: {
        flex: 1,
    },
    cardContainer: {
        flex: 1,
        padding: 0,
        margin: 0,
        borderWidth: 0,
        backgroundColor: "#fff",
    },
    cardHeaderContainer: {
        marginTop: 45,
        marginBottom: 10,
    },

    contactHeaderName: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 4,
        textAlign: "center",
        color: "#5B5A5A",
    },
    placeIcon: {
        color: "#a5a5a5",
        fontSize: 26,
    },
    contactHeaderdDepartment: {
        fontSize: 15,
        textAlign: "center",
        color: "#a5a5a5",
        fontWeight: "600",
    },
    contactBodyContainer: {
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: 30,
    },
    image: {
        borderRadius: 40,
        height: 80,
        marginBottom: 10,
        width: 80,
    },
    imageContainer: {
        backgroundColor: "transparent",
        ...Platform.select({
            ios: {
                alignItems: "center",
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: "center",
            },
        }),
    },
    container: {
        flex: 1,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 12,
    },
    tabbar: {
        backgroundColor: "transparent",
    },
    indicator: {
        backgroundColor: "black",
    },
    page: {
        // width: Dimensions.get("window").width,
        marginTop: 30,
    },
})

const contact = {
    imgUrl: "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg",
    imgBackground:
    "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
    name: "Cat",
    postion: "Front-end Engineer",
    country: "Thailand",
    city: "Bangkok",
    tels: [
        { id: 1, name: "Mobile", number: "+66 (089)-928-2134" },
        { id: 2, name: "Work", number: "+41 (112)-435-9887" },
    ],
    emails: [
        { id: 1, name: "Personal", email: "elsie-goodman@mail.com" },
        { id: 2, name: "Work", email: "elsie@work.com" },
    ],
    feeds: [
        {
            id: 1,
            name: "",
            image:
            "https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb",
        },
    ],
}

const {
  city,
    country,
    emails,
    imgUrl,
    imgBackground,
    name,
    tels,
    feeds,
} = contact

class Profile extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        index: 0,
        routes: [
            { key: "1", title: "Profile", count: '', icon: "fa-telegram" },
            { key: "2", title: "Friends", count: 86, icon: "fa-thumbs-up" },
            { key: "3", title: "Posts", count: 95, icon: "fa-handshake" },
            { key: "4", title: "Groups", count: 2, icon: "fa-address-book" },
        ],
    }

    componentWillMount(){
        this.props.setTitle('Profile');
    }

    _handleIndexChange = index => {
        this.setState({
            index,
        })
    }

    _renderIcon = ({ route }) => {
        return (
            <Icon
                iconStyle={styles.placeIcon}
                name="fa-level-up"
                onPress={this.onPressPlace}
                underlayColor="transparent"
            />
        )
    }

    _renderHeader = props => {
        return (
            <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                renderLabel={this._renderLabel(props)}
                pressOpacity={0.8}
                pressColor="rgba(255, 64, 129, .5)"
                style={styles.tabbar}
            />
        )
    }

    _renderScene = ({ route }) => {
        switch (route.key) {
            case "1":
                return <ProfileFeed />
            case "2":
                return <ProfileFeed />
            case "3":
                return <ProfileFeed />
            case "4":
                return <ProfileFeed />
            default:
                return <View />
        }
    }

    _renderLabel = props => ({ route, index }) => {
        const inputRange = props.navigationState.routes.map((x, i) => i)
        const outputRange = inputRange.map(
            inputIndex => (inputIndex === index ? "black" : "gray"),
        )
        const color = props.position.interpolate({
            inputRange,
            outputRange,
        })

        return (
            <View>
                <Animated.Text
                    style={[
                        {
                            color: "gray",
                            textAlign: "center",
                            fontWeight: "400",
                            fontSize: 17.5,
                            marginBottom: 4,
                        },
                        { color },
                    ]}
                >
                    {route.count}
                </Animated.Text>
                <Animated.Text
                    style={[
                        {
                            fontSize: 12.5,
                            color: "gray",
                            textAlign: "center",
                        },
                        ,
                        { color },
                    ]}
                >
                    {route.title}
                </Animated.Text>
            </View>
        )
    }

    renderContactHeader = () => (
        <View style={styles.cardHeaderContainer}>
            <View style={styles.imageContainer}>
                <View
                    style={{
                        marginBottom: 12,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        style={styles.image}
                        source={{
                            uri: imgUrl,
                        }}
                    />
                    <Text style={styles.contactHeaderName}>{name}</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <View>
                        <Text>I like maths and donuts </Text>
                    </View>
                </View>
            </View>
        </View>
    )

    onPressPlace = () => {
        console.log("place")
    }

    onPressTel = number => {
        Linking.openURL(`tel:${number}`).catch(err => console.log("Error:", err))
    }

    onPressSms = () => {
        console.log("sms")
    }

    onPressEmail = email => {
        Linking.openURL(`mailto:${email}?subject=subject&body=body`).catch(err =>
            console.log("Error:", err),
        )
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.cardWrapper}>
                    <Card containerStyle={styles.cardContainer}>
                        {this.renderContactHeader()}
                        <TabViewAnimated
                            style={[styles.container, this.props.style]}
                            navigationState={this.state}
                            renderScene={this._renderScene}
                            renderHeader={this._renderHeader}
                            onIndexChange={this._handleIndexChange}
                        />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = ({app})  => {
    const { homeComponent } = app;
    return { homeComponent }
}

//make this component available to the app
export default connect(mapStateToProps, { setTitle })(Profile);





