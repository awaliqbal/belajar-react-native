import React, {Component} from "react";
import {View, Text, TextInput, Image} from "react-native";

class TampilanPertama extends Component{
render() {
    return(
        <View>
            <Text>
                hello world
            </Text>
            <Text>
                hari pertama belajar core component
            </Text>
            <TextInput style={{width: '100%', height: 50, borderWidth: 1}} />
            <Image source={require('./react-icon.png')} style={{width: 100, height: 100}} />
        </View>
         )
        }
}
export default TampilanPertama;