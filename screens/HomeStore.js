import * as React from 'react';

import { Platform, StatusBar, StyleSheet, View, TouchableHighlight, ScrollView, Dimensions, SafeAreaView, Text } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import {Row, Container, Col} from 'react-bootstrap';
import BackButton from '../components/BackButton';
import ScrollHorizental from '../components/ScrollHorizental';
import ButtomNavigation from '../components/ButtomNavigation';
import MenuList from '../components/MenuList';
import SafetyInstructions from '../components/SafetyInstructions';
import '../components/styles/HomeStyle.css'
import {vegies} from '../data/vegies';
import {categories} from '../data/dataArrays';
import Spinner from 'react-native-loading-spinner-overlay';


export default function HomeStore({ navigation }) {
    const imageStyle = {
        marginTop: '1em',
    }
    const containerStyle = {
        marginTop: '2em'
    }
    const [spinner, changeSpinner] = React.useState(true);
        React.useEffect(() => {
            // setInterval(() => {
                changeSpinner(false);
            // }, 3000);
            }, 1000);
        return(
        <View style={{flex: 1}}>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                />
             
            <ScrollView style={styles.scrollView} scrollEnabled={true} showsVerticalScrollIndicator={false}>
            <BackButton goBack={() => navigation.navigate('LoginScreen')} />
            <View style={styles.viewMenu}>
                <MenuList style={styles.listMenu} />
            </View>
            <Container style={containerStyle} style={{flex: 1}}> 
                {/* <Spinner
                    visible={spinner}
                    textContent={'جاري تحميل الصفحة'}
                    textStyle={styles.spinnerTextStyle}
                    /> */}
                <h3 class="instructions">تعليمات السلامة</h3>
                <SafetyInstructions />
                <h3 class="categories">تصنيفات</h3>
                    <ScrollView
                        horizontal={true}>
                            <div onClick={navigation.navigate('')}>
                                <img class="lol" src="https://drive.google.com/uc?id=1eVqzC4P-AIW0AiKNXGgin-WW6ejjvNg3" />
                            <p>فواكه</p>
                            </div>
                            <div>
                                <img class="lol" src="https://drive.google.com/uc?id=1dPEkj6e-mPWVKnkIx_tIWPitX-9qZgqt" />
                                <p>خضار</p>
                            </div>
                            <div>
                                <img class="lol" src="https://drive.google.com/uc?id=1dPEkj6e-mPWVKnkIx_tIWPitX-9qZgqt" />
                                <p>خضار</p>
                            </div>
                            <div>
                                <img class="lol" src="https://drive.google.com/uc?id=1dPEkj6e-mPWVKnkIx_tIWPitX-9qZgqt" />
                                <p>خضار</p>
                            </div>
                            <div>
                                <img class="lol" src="https://drive.google.com/uc?id=1dPEkj6e-mPWVKnkIx_tIWPitX-9qZgqt" />
                                <p>خضار</p>
                            </div>
                            <div>
                                <img class="lol" src="https://drive.google.com/uc?id=1dPEkj6e-mPWVKnkIx_tIWPitX-9qZgqt" />
                                <p>خضار</p>
                            </div>
                    </ScrollView>
                        <br/>
                        <h3 class="categories">أفضل الأصناف اليوم</h3>
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
    },
    spinnerTextStyle: {
        color: '#000',
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignContent: 'center',
        justifyContent: 'center'
      },
  });