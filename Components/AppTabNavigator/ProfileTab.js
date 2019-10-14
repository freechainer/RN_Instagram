import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default class ProfileTab extends Component {

    state = {
        activeIndex: 0,
    }

    senmentClicked = (activeIndex) => {
        this.setState({ 
          activeIndex 
        });
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={{ flex:1, backgroundColor: 'white'}}>
                <Header>
                    <Left><Icon name="md-person-add" style={{ paddingLeft:10 }} /></Left>
                    <Body><Text>anpigon</Text></Body>
                    <Right><EntypoIcon name="back-in-time" style={{ paddingRight:10, fontSize: 32 }} /></Right>
                </Header>
                <Content>
  <View style={{flexDirection:'row', paddingTop:10}}>
    <View style={{flex:1, alignItems:'center'}}>
      <Image source={{ url: 'https://steemitimages.com/u/anpigon/avatar' }}
             style={{width:75, height:75, borderRadius:37.5}}/>
    </View>
    <View style={{flex:3}}>
      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{alignItems:'center'}}>
          <Text>167</Text>
          <Text style={{fontSize:10, color:'gray'}}>posts</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>346</Text>
          <Text style={{fontSize:10, color:'gray'}}>follower</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text>192</Text>
          <Text style={{fontSize:10, color:'gray'}}>following</Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <Button bordered dark
                style={{flex:4, marginLeft:10, justifyContent:'center', height:30, marginTop:10}}>
          <Text>Edit Profile</Text>
        </Button>
        <Button bordered dark small icon
                style={{flex:1, marginRight:10, marginLeft:5, justifyContent:'center', height:30, marginTop:10}}>
          <Icon name="settings" />
        </Button>
      </View>
    </View>
  </View>
  <View style={{paddingHorizontal:10, paddingVertical:10}}>
    <Text style={{fontWeight:'bold'}}>안피곤</Text>
    <Text>Lark | Computer Jock | Commercial Pilot</Text>
    <Text>www.steemit.com/@anpigon</Text>
    <View style={{ flexDirection: 'row', justifyContent:'space-around', borderTopWidth:1,borderTopColor:'#eae5e5' }}>
    <Button transparent
    onPress={() => this.segmentClicked(0)}
    active={this.state.activeIndex === 0}>
    <Icon name='ios-apps' style={[ this.state.activeIndex === 1 ? {} : {color: 'grey'} ]}/>
    </Button>
    <Button transparent
    onPress={() => this.segmentClicked(1)}
    active={this.state.activeIndex === 1}>
    <Icon name='ios-list' style={[ this.state.activeIndex === 2 ? {} : {color: 'grey'} ]}/>
    </Button>
    <Button transparent
    onPress={() => this.segmentClicked(2)}
    active={this.state.activeIndex === 2}>
        <Icon name='ios-people' style={[ this.state.activeIndex === 3 ? {} : {color: 'grey'} ]}/>
    </Button>
    <Button transparent
    onPress={() => this.segmentClicked(3)}
    active={this.state.activeIndex === 3}>
        <Icon name='ios-bookmark' style={[ this.state.activeIndex === 4 ? {} : {color: 'grey'} ]}/>
    </Button>
</View>
  </View>
</Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})