import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

import React from "react";

const Header = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                Application
            </Text>
        </View>

    )
}


const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver'
    },
    text: {
        fontSize: 18,
        textAlign: "center",
    }

});


export default Header;