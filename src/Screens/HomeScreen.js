import React from 'react';
import {View, StyleSheet, Text, ListView} from 'react-native';
import {connect} from "react-redux";
import {login} from "../Redux/Actions/actionCreator";
import CardItem from "../Components/Home/CardItem"
import Header from "../Components/Header"
import Colors from "../Constants/Colors"
import LinearGradient from 'react-native-linear-gradient';
import Container from "../Components/Container"
import {ShuffleItems, GetItems} from "../Redux/Actions/CardAction"
import moment from 'moment'
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    let detailList = this
      .props
      .cards
      .list
      .map((t) => this.props.cards[t])
    this.state = {
      dataSource: ds.cloneWithRows(detailList)
    };
  }

  componentDidMount() {
    if (this.props.cards.shuffle_time !== moment().format("YYYY-MM-DD")) {
      this
        .props
        .ShuffleItems()
    }
    this
      .props
      .GetItems()
  }

  static navigationOptions = {
    title: '我的打卡',
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
      borderBottomWidth: 0,
      color: "white"
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerBackTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  };

  _render() {
    let self = this
    return (
      <View style={styles.body}>
        <View style={styles.welcome}>
          <Text style={styles.welcomeText} onPress={this.props.ShuffleItems}>我的太空舱</Text>
        </View>

        <ListView
          style={styles.listView}
          dataSource={ds.cloneWithRows(this.props.cards.list.map((t) => this.props.cards[t]))}
          renderRow={(rowData) => <CardItem uuid={rowData.uuid} navigation={self.props.navigation}/>}/></View>

    );
  }

  render() {
    return (
      <Container
        leftIcon="cubes"
        rightIcon="space-shuttle"
        leftAction={() => this.props.navigation.navigate("Settings")}
        rightAction={() => this.props.navigation.navigate("Edit", {item: undefined})}>

        {this._render()}
      </Container>

    )
  }

}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  body: {
    marginHorizontal: 20
  },
  welcome: {
    height: 60,
    justifyContent: "center",
    marginVertical: 30
  },
  welcomeText: {
    fontSize: 20,
    color: "white",
    lineHeight: 30,
    backgroundColor: "transparent"
  },
  listView: {
    height: "100%"
  }
});

const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({ShuffleItems, GetItems});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
