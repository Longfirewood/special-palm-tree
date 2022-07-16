import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import React from "react";
import axios from "axios";

const MainPage = () => {

    const handler = async (event) => {
        if (event == 'f') {
            const json = JSON.stringify({data: 'forward'});
            await axios.post('http://192.168.0.18:3000/forward', json, {
                headers: {
                  'Content-Type': 'application/json'
                }}).then(function (response) {
                console.log(response.data);
              }).catch(error => console.log(error));;

        } else if (event == 'b') {
            const json = JSON.stringify({data: 'backward'});
            await axios.post('http://192.168.0.18:3000/backward', json, {
                headers: {
                  'Content-Type': 'application/json'
                }}).then(function (response) {
                console.log(response.data);
              }).catch(error => console.log(error));

        } else if (event == 'l') {
            const json = JSON.stringify({data: 'left'});
            await axios.post('http://192.168.0.18:3000/left', json, {
                headers: {
                  'Content-Type': 'application/json'
                }}).then(function (response) {
                console.log(response.data);
              }).catch(error => console.log(error));;
        } else if (event == 'r') {
            const json = JSON.stringify({data: 'right'});
            await axios.post('http://192.168.0.18:3000/right', json, {
                headers: {
                  'Content-Type': 'application/json'
                }}).then(function (response) {
                console.log(response.data);
              }).catch(error => console.log(error));;
        }

    }

    return (

        <View style={styles.parent}>
            <View style={styles.child}>
                <TouchableOpacity style={styles.item} onPress={() => handler('f')}>
                    <Text style={styles.text}>
                        Forward
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.middle}>
                <TouchableOpacity style={styles.item} onPress={() => handler('l')}>
                    <Text style={styles.text}>
                        Left
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => handler('r')}>
                    <Text style={styles.text}>
                        Right
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.child}>
                <TouchableOpacity style={styles.item} onPress={() => handler('b')}>
                    <Text style={styles.text}>
                        Backward
                    </Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default MainPage;

const styles = StyleSheet.create({
    parent: {
        display: "flex",
        flexDirection: "colomn",
        marginTop: 200,
        flex: 1,

    },
    child: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
    },
    middle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    item: {
        width: 100,
        borderWidth: 1,
        margin: 25,
        backgroundColor: "#DDDDDD",
        borderColor: "#fff",
        padding: 15,
        borderRadius: 15,

    },
    text: {
        textAlign: "center",
    }
});
