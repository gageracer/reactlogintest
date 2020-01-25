import React from 'react';
import { View, Text } from 'react-native';


export default class HomeScreen extends React.Component {
    
    state = { uname: "User", pass: "1234" };

    static navigationOptions = {
        title: "HOME",
    };

    render() {
        
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome {this.state.uname}</Text>
            </View>
        );
    }
}

