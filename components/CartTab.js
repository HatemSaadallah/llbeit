import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, CheckBox } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
// import Button from '@material-ui/core/Button';

import { Image } from 'react-bootstrap';



export default function OptionButton({ label, onPress, isLastOption }) {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
        <View style={styles.checkbox}>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
                />
        </View>
      <View style={styles.wholyContainer}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
          
          <Text>هذا الكلام سوف يستبدل</Text>

        </View>
        <View style={styles.optionIconContainer}>
            <Image src="https://via.placeholder.com/150" alt="testing"/>
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
    marginTop: 20,
    position: "absolute"
    }
});
