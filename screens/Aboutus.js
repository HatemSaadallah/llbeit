import React from 'react';
import {Image, View, StyleSheet} from 'react-native'
import ProfileTab from '../components/ProfileTab';
import HorizontalLine from '../components/HorizontalLine';

export default function Aboutus(){
    const names = ["Hatem", "Mohammed", "Iman", "Karam", "Fares"];
    return(
        <View>
            <View>
            <ProfileTab name="names"/>
            </View>
            <View style={styles.lineStyle}>
            <HorizontalLine  />
            </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
    nameTab: {
        marginBottom: 20,
    },
    lineStyle: {
        marginTop: 20,
        marginBottom: 20,
    }
});