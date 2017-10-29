import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    Switch,
    ScrollView,
    TouchableOpacity,
    Picker
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { setTitle } from '../actions'



 class Permissions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tooggled: true
        }
    }
    componentWillMount(){
        this.props.setTitle('Permissions');
    }
    render() {
        return (
            <View style={styles.main}>
                <ScrollView style={styles.scroll}>
                    <View style={styles.iconRow}>
                        <Text style={styles.setting}> Make Post Public </Text>
                        <Switch
                            onValueChange={(value) => this.setState({ toggled: value })}
                            value={this.state.toggled}
                        />
                    </View>
                    <View style={styles.iconRow}>
                        <Text style={styles.setting}> Share Location With Post </Text>
                        <Switch
                            onValueChange={(value) => this.setState({ toggled: value })}
                            value={this.state.toggled}
                        />
                    </View>
                    <View>
                        <View style={styles.iconRow}>
                            <Text style={styles.setting}> Set Custom Permissions For: </Text>
                        </View>
                        <Picker
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Ben" value="java" />
                            <Picker.Item label="Jerry" value="js" />
                            <Picker.Item label="Tom" value="js" />
                            <Picker.Item label="Harry" value="js" />
                        </Picker>
                    </View>
                    <View style={styles.center}>
                        <TouchableOpacity onPress={() => Actions.Profile()}><Text style={styles.setting}>Save and Exit</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = ({app})  => {
    const { homeComponent } = app;
    return { homeComponent }
}

//make this component available to the app
export default connect(mapStateToProps, { setTitle })(Permissions);



const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scroll: {
        padding: 40,
    },
    setting: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 14
    },
    imageStyle: {
        marginLeft: 15,
        alignSelf: 'center',
        height: 30,
        width: 30
    },
    center:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 7
    },
    iconRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 7
    },
    titleInfoStyle: {
        fontSize: 16,
        color: '#8e8e93'
    }
});
