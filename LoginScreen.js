import React from 'react';
import { StyleSheet,View,Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput placeholder="Username"></TextInput>
                <TextInput placeholder="Password" secureTextEntry={true}></TextInput>
                <Button title="Login"
                    onPress={() => this.props.navigation.navigate('Home',{
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});