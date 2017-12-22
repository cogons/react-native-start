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
                <Text style={[styles.days]}>{this.props.cards[this.props.uuid].days}</Text>
                <Text style={[styles.content]}>{this.props.cards[this.props.uuid].content}</Text>
                {this._renderHistory(this.props.cards[this.props.uuid].history)}
                <Today style={[styles.today]} uuid={this.props.cards[this.props.uuid].uuid}/>
            </View>
        )
    }
}
const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({});
export default connect(mapStateToProps, mapDispatchToProps)(CardItem);

const styles = StyleSheet.create({

    container: {
        backgroundColor: Color.white,
        height: 60,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
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
        color: Colors.gray2,
        fontSize: 20,
        width: 60,
        textAlign: "center"
    }
})