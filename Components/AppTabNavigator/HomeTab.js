import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

export default class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={style.container}>
                 <Header>
                    <Left><Icon name='ios-camera' style={{ paddingLeft:10 }}/></Left>
                    <Body><Text>Instagram</Text></Body>
                    <Right><Icon name='ios-send' style={{ paddingRight:10 }}/></Right>
                </Header>
                <Content>
                <View style={{ height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                            <View style={{flexDirection:'row','alignItems':'center'}}>
                                <Icon name="md-play" style={{fontSize:14}}></Icon>
                                <Text style={{fontWeight:'bold'}}> Watch All</Text>
                            </View>
                        </View>

                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                alignItems: 'center',
                                paddingStart: 5,
                                paddingEnd: 5
                            }}>
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/newbijohn/avatar' }} />
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/jacobyu/avatar' }} />
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/blockchainstudio/avatar' }} />
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/gomdory/avatar' }} />
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/bbooaae/avatar' }} />
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/codingman/avatar' }} />
                                <Thumbnail 
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={{uri: 'https://steemitimages.com/u/bukio/avatar' }} />
                                
                            </ScrollView>
                        </View>
                </View>
                    <CardComponent />
                </Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
