import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, TouchableHighlight, ScrollView, Dimensions, SafeAreaView, Text } from 'react-native';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import {Row, Container, Col} from 'react-bootstrap'
import BackButton from '../components/BackButton';
import ScrollHorizental from '../components/ScrollHorizental'
import ButtomNavigation from '../components/ButtomNavigation'
import MenuList from '../components/MenuList'

export default function HomeStore({ navigation }) {
    const imageStyle = {
        marginTop: '1em',
    }
    const containerStyle = {
        marginTop: '2em'
    }
        return(
        <View style={{flex: 1}}>
            <ScrollView style={styles.scrollView} scrollEnabled={true} showsVerticalScrollIndicator={false}>
            <BackButton goBack={() => navigation.navigate('LoginScreen')} />
            <View style={styles.viewMenu}>
                <MenuList style={styles.listMenu} />
            </View>
            <Container style={containerStyle}> 
                <Text>تعليمات السلامة</Text>
                <ScrollHorizental />
                {"\n"}
                {"\n"}
                <Text>تصنيفات</Text>
                <ScrollHorizental />
                {"\n"}
                {"\n"}
                {"\n"}
                {"\n"}
                <ScrollHorizental />
            </Container>
       
            </ScrollView>
        </View>
        );
}



const styles = StyleSheet.create({
    scrollView: {
      marginHorizontal: 20,
    },
    viewMenu: {
        flexDirection: 'row',
        marginLeft: 'auto',
        marginTop: 5,
    }
  });