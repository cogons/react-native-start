import React from 'react';
import {View, StyleSheet, Text, ListView} from 'react-native';
import {connect} from "react-redux";
import {login} from "../Redux/Actions/actionCreator";
import CardItem from "../Components/Home/CardItem"
import Header from "../Components/Header"
import Color from "../Constants/Colors"
import LinearGradient from 'react-native-linear-gradient';
class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    let detailList = this
      .props
      .cards
      .list
      .map((t) => this.props.cards[t])
    this.state = {
      dataSource: ds.cloneWithRows(detailList)
    };
  }

  static navigationOptions = {
    title: '我的打卡'
  };

  render() {
    return (
      <LinearGradient colors={['#3B57B7', '#193088']} style={styles.linearGradient}>
        <Header navigation={this.props.navigation}/>
        <View style={styles.body}>
          <View style={styles.welcome}>
            <Text style={styles.welcomeText}>这是你在潜的{'\n'}第66天</Text>
          </View>

          <ListView
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <CardItem uuid={rowData.uuid}/>}/></View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  body: {
    marginTop: 60,
    marginHorizontal: 20
  },
  welcome: {
    height: 60,
    justifyContent: "center",
    marginVertical: 20
  },
  welcomeText: {
    fontSize: 20,
    color: "white",
    lineHeight: 30
  },
  listView: {
    height: "100%"
  }
});

const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
