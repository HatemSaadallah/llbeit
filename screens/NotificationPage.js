import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NotificationTab from "../components/NotificationTab";

export default function NotificationPage(){
    return(
        <View>
            <NotificationTab>Hello, I am tab</NotificationTab>
        </View>
    );
}

const styles = StyleSheet.create({
    recentWord: {
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20,
        fontSize: 20,
    }
});