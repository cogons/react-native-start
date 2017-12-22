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
import Today from "./TodayBtn"
import {connect} from "react-redux";
class CardItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            showSetting: false
        }
    }

    _renderHistory(arr) {

        return arr.map((item, i) => {
            return <Text key={i} style={[styles.history]}>{item}</Text>
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={[
                    styles.days,
                    this.props.cards[this.props.uuid].today == 0
                        ? {}
                        : {
                            color: "#333"
                        }
                ]}>{this.props.cards[this.props.uuid].days}</Text>
                <View style={[styles.content]}>
                    <Text style={[styles.contentTitle]}>{this.props.cards[this.props.uuid].content}</Text>
                    <Text style={[styles.contentDetail]}>{this.props.cards[this.props.uuid].content}</Text>
                </View>

                {this._renderHistory(this.props.cards[this.props.uuid].history)}
                <Today uuid={this.props.cards[this.props.uuid].uuid}/>
            </View>
        )
    }
}
const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({});
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

const center = {
    alignItems: "center",
    justifyContent: "center"
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4961AE",
        height: 60,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 2
                },
                shadowOpacity: 0.05,
                shadowRadius: 5
            },
            android: {
                elevation: 10
            }
        })
    },
    spacing: {

        marginRight: 5

    },
    days: {
        color: Colors.white,
        fontSize: 30,
        width: 60,
        textAlign: "center"
    },
    today: {
        ...center,
        width: 60,
        backgroundColor: "#607BBD",
        height: 60
    },
    history: {
        width: 20,
        alignItems: "center",
        justifyContent: "center",
        color: "white"

    },
    content: {
        flex: 1
    },
    contentTitle: {
        fontSize: 16,
        color: "white"
    },
    contentDetail: {
        fontSize: 12,
        marginTop: 5,
        color: "#A0AED5"
    }
})