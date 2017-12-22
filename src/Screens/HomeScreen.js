import React from 'react';
import {View, StyleSheet, Text, ListView} from 'react-native';
import {connect} from "react-redux";
import {login} from "../Redux/Actions/actionCreator";
import CardItem from "../Components/Home/CardItem"
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <CardItem uuid={rowData.uuid}/>}/>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});

const mapStateToProps = (store) => ({cards: store.CardReducer});
const mapDispatchToProps = ({});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
