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
import Styles from "../../Constants/Styles"
import {connect} from "react-redux";
import {toggoleToday} from "../../Redux/Actions/card"

class Today extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: true,
            showSetting: false
        }
    }

    _tap() {
        this
            .props
            .toggoleToday(this.props.uuid)
        console.log(this.props.toggoleToday)
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                console.log(this.props.toggoleToday(this.props.uuid))
            }}
                style={[
                styles.container,
                this.props.cards[this.props.uuid].today !== 0
                    ? {
                        backgroundColor: "white"
                    }
                    : {}
            ]}>
                <Text
                    style={this.props.cards[this.props.uuid].today !== 0
                    ? styles.textChecked
                    : styles.text}>{this.props.cards[this.props.uuid].today}</Text>
            </TouchableOpacity>
        )
    }

}

const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({toggoleToday});
export default connect(mapStateToProps, mapDispatchToProps)(Today);

const styles = StyleSheet.create({

    container: {
        ...Styles.center,
        width: 60,
        height: 60,
        backgroundColor: "#607BBD"
    },
    spacing: {

        marginRight: 5

    },
    text: {

        color: "#6E8CC5",
        fontSize: 30

    },
    textChecked: {

        color: "#446EB4",
        fontSize: 30

    },
    days: {
        color: Colors.gray2,
        fontSize: 20
    }

})