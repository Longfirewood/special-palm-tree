import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
} from "react-native";

import React from "react";
import ListItem from "./ListItem";

const ConnectionsList = ({navigation}) => {

    const pressHandler = () => {
       
        navigation.navigate('Main');
        console.log('item_presed')
    }

    return (
        <View >            
            <Text style={styles.text}> ConnectionsList </Text>
        <View style={styles.main}> 

            <TouchableOpacity onPress={pressHandler}>
                <ListItem />
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandler}>
                <ListItem />
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandler}>
                <ListItem />
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandler}>
                <ListItem />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={pressHandler}>
                <ListItem />
            </TouchableOpacity>

            
        </View>
          
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: "center",
        margin: 10
    },
    main: {
        display: "flex",
        alignItems: "center",
        margin: 50
    }

});


export default ConnectionsList;