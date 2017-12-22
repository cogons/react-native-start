import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Dimensions,
    Animated,
    Easing,
    View
} from 'react-native';
import Colors from "../../Constants/Colors"
import {connect} from "react-redux";

class Today extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            showSetting: false
        }
    }

    render() {
        return (
            <View>
                <Text>{this.props.cards[this.props.uuid].today}</Text>
            </View>
        )
    }

}

const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({});
export default connect(mapStateToProps, mapDispatchToProps)(Today);

const styles = StyleSheet.create({

    container: {
        backgroundColor: Color.white,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5
    },
    spacing: {

        marginRight: 5

    },
    days: {
        color: Colors.gray2,
        fontSize: 20
    }

})