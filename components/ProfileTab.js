import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';


export default function ProfileTab(name){
    return(
        <View style={styles.Container}>
            <Image
            style={styles.personalPhoto}
            source={{
            uri: 'https://via.placeholder.com/150',
            }}/>
            <Text style={styles.Name}>{name.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
    },
    personalPhoto: {
        width: 150,
        height: 150,
    },
    Name: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingTop: 5,
    }
});