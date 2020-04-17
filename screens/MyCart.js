import * as React from 'react';
import {View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import OptionButton from '../components/CartTab';
import * as WebBrowser from 'expo-web-browser';



export default function MyCart({navigation}) {
  const [isActive, setActive] = React.useState("false");
  const [isSelected1, setSelection1] = React.useState(false);
  const [isSelected2, setSelection2] = React.useState(false);

  
  if(isSelected1 && isSelected2){
    console.log("test");
    setActive(null);
    setSelection1(false);
    setSelection2(false);
  }
  
    return (
      <View style={{flex: 1}}>
          
          <Button
          title="اشتري الآن"
          disabled={isActive}
          onPress={() => navigation.navigate('Payment')}
        />
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <OptionButton
              label="ليمون"
              url="https://www.ra2ej.com/site-images/sites/default/files/ra2ej-prod/article/1/2/252136/aacfe20cbfa5ab9ad4ecfe2435607baafdd0deb3-080617165229.jpg?preset=v3.0_620XDYN&save-png=1&rnd=0519151220141&gr=1"
              cost="20"
              marketCost="22"
              isSelected={isSelected1}
              setSelection={setSelection1}
          />
          <OptionButton
              label="بقدونس"
              url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQipK6mgm63_V2zJ10bPBkikkX_vTBpvv5y1bjuqxz0ukxH0EiM&usqp=CAU"
              cost="5"
              marketCost="3"
              isSelected={isSelected2}
              setSelection={setSelection2}
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
