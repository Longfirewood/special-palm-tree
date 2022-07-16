import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {BleManager} from 'react-native-ble-manager';
import { NativeBaseProvider, Switch } from "native-base";
// import BluetoothStateManager from 'react-native-bluetooth-state-manager';

// async function scanDevices() {
//     BleManager.start({ showAlert: false }).then(() => {
//         console.log("Module initialized");
//       });
// }


const Connect = ({navigation}) => {

  
    const [isBluetoothOn, setBluetoothState] = useState(true);

    const handleConnectPress = () => {
        console.log('pressed')
        navigation.navigate('List');
    }


    return (
        <View style={styles.main}>
            
                <NativeBaseProvider >
                    <View style={styles.switch}>
                        <Switch size="md" />
                        <Text> Bluetooth </Text>
                    </View>
                </NativeBaseProvider>
           
            
            <TouchableOpacity onPress={handleConnectPress} style={styles.connect}>
                <Text style={styles.text}>
                    Scan
                </Text>
            </TouchableOpacity>
            

        </View>

    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: "center",
    },
    connect: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: 'silver',
        borderTopLeftRadius: '25%',
        borderTopRightRadius: '10%',
        borderBottomLeftRadius: '10%',
        borderBottomRightRadius: '25%',
        height: 120,
        width: 150,
        marginTop: 250,
    },
    main: {
        display: "flex",
        alignItems: "center",
    }, 

    switch: {
        display: "flex",
        // flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
    }, 
    

});


export default Connect;