import React, { Component } from "react"
import { Card, Rating } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome';
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
import EventFeed from "./EventFeed"
import { setTitle } from '../actions'
import { connect } from 'react-redux';

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
    pad:{
        padding: 20,
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
    imgUrl: "https://pbs.twimg.com/profile_images/512021063509626880/QUga2R6j_reasonably_small.jpeg",
    imgBackground:
    "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
    name: "Study Group",
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

class EventInfo extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        index: 0,
        routes: [
            { key: "1", title: "View Feed", count: '', icon: "fa-telegram" },
            { key: "2", title: "Friends", count: 86, icon: "fa-thumbs-up" },
            { key: "3", title: "Posts", count: 95, icon: "fa-handshake" },
            { key: "4", title: "Groups", count: 2, icon: "fa-address-book" },
        ],
    }

    componentWillMount(){
        this.props.setTitle('Event Info');
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

    _renderScene = () => {
        return <EventFeed />
        
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
                        <Icon
                            name="group"
                            color="#3B5A98"

                        />
                    </View>
                    <View style={{ marginLeft: 14, marginRight: 14 }}>
                        <Icon
                            name="group"
                            color="#3B5A98"

                        />
                    </View>
                    <View>
                        <Icon
                            name="group"
                            color="#3B5A98"

                        />
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
                        <View style={styles.pad}>
                            { this._renderScene()}
                        </View> 
                    </Card>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = ({ app }) => {
    const { homeComponent } = app;
    return { homeComponent }
}

//make this component available to the app
export default connect(mapStateToProps, {setTitle})(EventInfo);

