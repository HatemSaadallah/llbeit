import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import HorizontalLine from '../components/HorizontalLine';


export default function OrderScreen({navigation: {goBack}}){

    return (
    <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.containerUpper}>
            <Text>رقم الطلب: 34354343</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.containerMiddle}>
            <Text>كاش</Text>
            <Text style={styles.cashWord}>طريقة الدفع</Text>
        </SafeAreaView>
        <HorizontalLine />
        <Button 
            style={styles.orderNow} 
            title="قم بالطلب"
            onPress={() => goBack()}
            />
        <Button 
            style={styles.Cancel} 
            title="إلغاء"
            onPress={() => goBack()}/>
    </SafeAreaView>
    );   
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        width: '70%',
        height: '70%',
        alignSelf: 'center',
        marginTop: 30,
    },
    containerUpper: {
        backgroundColor: 'green',
        borderWidth: 2,
        width: '100%',
        height: '20%',
        alignSelf: 'center',
    },
    containerMiddle: {
        flexDirection: 'row',
        position: 'relative',
        left: 20,
    },
    cashWord: {
        position: 'absolute',
        right: 40,
    },
    Cancel: {
        position: 'absolute',
        bottom: 0,
        width: '80%',
        backgroundColor: 'white',
    },
    orderNow: {
        position: 'relative',
        bottom: 20,
        width: '80%',
    },
});