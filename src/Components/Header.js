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
import Colors from "../Constants/Colors"
import {connect} from "react-redux";
class Header extends React.Component {

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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({});
export default connect(mapStateToProps, mapDispatchToProps)(Header);

const styles = StyleSheet.create({

    container: {
        position: "absolute",
        height: 70,
        width: "100%",
        top: 10,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    button: {},
    buttonText: {
        fontSize: 30,
        color: "white"
    },
    days: {
        color: Colors.gray2,
        fontSize: 20,
        width: 60,
        textAlign: "center"
    }
})