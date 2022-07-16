import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

import React from "react";

const ListItem = () => {

    return (
        <View style={styles.main}>
                <Text style={styles.text}> DeviceName </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: "center",
    },
    main: {
        display: "flex",
        width: '80%',
        backgroundColor: 'silver', 
        padding: 20, 
        margin: 20, 
        borderRadius: 10
    }

});


export default ListItem;