import * as React from 'react';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import OptionButton from '../components/CartTab';
import * as WebBrowser from 'expo-web-browser';


export default function MyCart({navigation}) {
    return (
      <View style={{flex: 1}}>
          
          <Button
          title="اشتري الآن"
          onPress={() => navigation.navigate('Payment')}
        />
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <OptionButton
              icon="md-school"
              label="بضاعة 1"
              
          />
          <OptionButton
              icon="md-compass"
              label="بضاعة 2"
              
          />
  
          <OptionButton
              icon="ios-chatboxes"
              label="بضاعة 3"
              
              isLastOption
          />
          </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    contentContainer: {
      paddingTop: 15,
      
    },
    optionIconContainer: {
      marginRight: 12,
    },
    option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: 0,
      borderColor: '#ededed',
    },
    lastOption: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    optionText: {
      fontSize: 15,
      alignSelf: 'flex-start',
      marginTop: 1,
    },
});
