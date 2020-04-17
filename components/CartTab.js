import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
// import Button from '@material-ui/core/Button';
import './styles/CartTab.css'
import { Image } from 'react-bootstrap';



export default function OptionButton({ label, onPress, isLastOption, url, cost, isSelected, setSelection, marketCost }) {
    
  return (
    <View style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={styles.costStyle}>
        <h4>{cost}₪ :سعر البائع</h4>
        <h4>{marketCost}₪ :عرض السوق</h4>
        </View>
        <View style={styles.quanitity}>
          <h6>
            <form>
              <input type="number" id="quantity" name="quantity" min="1" max="5"/>:الكمية 
            </form>
            </h6>
        </View>
        <View style={styles.checkbox}>
          <span id="verify">تأكيد الشراء</span>
            <CheckBox
            class="check"
            value={isSelected}
            onValueChange={setSelection}
                />
        </View>
      <View style={styles.wholyContainer}>
        <View style={styles.optionTextContainer}>
          <h2 class="label">{label}</h2>
        </View>
        <View style={styles.optionIconContainer}>
            <img class="image" src={url} alt="testing"/>
        </View>
      </View>
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
  wholyContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
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
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  buyMe: {
    alignItems: 'flex-end',
    },
  checkbox: {
    flexDirection: 'row',
    marginRight: 'auto',
    marginTop: 120,
    position: "absolute"
    },
    quanitity: {
      flexDirection: 'row',
      marginRight: 'auto',
      marginTop: 80,
      marginLeft: 5,
      position: "absolute"
    },
    costStyle: {
      position: 'relative',
    }
});
