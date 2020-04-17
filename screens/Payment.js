import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DialogScreen from '../components/Dialog'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import DropdownMenu from 'react-native-dropdown-menu';



export default function Payment({navigation}){
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [open, setOpen] = React.useState(false);
    const [dropDownMenu, setDropDownMenu] = React.useState('');
    let dataDropDown = ["Hello", "Hi", "Henlo"];
    const handleClickOpen = (event) => {
        setOpen(true);
        console.log(event.target.value);
    };

    const handleClose = (event) => {
        setOpen(false);
        navigation.navigate('OrderScreen');
    };
    const [text, setText] = React.useState('');
    return(
        <View>
        <View style={styles.container}>
            <Text style={styles.text}>
                التأكد من المعلومات
            </Text>
            <TextField
                required
                id="standard-basic" 
                label="الاسم بالكامل" />

            <TextField
                required
                id="standard-basic" 
                label="رقم الجوال" 
                type="number"
                />
            <Text>اختر طريقة التوصيل</Text>
        </View>
        <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="اكتب العنوان" />
                <FormControlLabel value="male" control={<Radio />} label="اختر العنوان " />
            </RadioGroup>
        </FormControl>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        التالي
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <Text style={styles.textMessage}>
            ضع عنوانك هنا
          </Text>
          <TextInput
                style={{height: 40}}
                placeholder="مثال: غزة - شارع النصر"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />

        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => this.handleClose(e)} color="primary">
            إلغاء
          </Button>
          <Button onClick={handleClose} color="primary">
            شراء
            
          </Button>
        </DialogActions>
      </Dialog>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50,
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    container2: {
        width: '80%',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text: {
    },
    button: {
        position: 'absolute',
        bottom: 0,
        marginTop: 200,
    },
    textMessage: {
        flexDirection: 'column',
        fontWeight: 'bold',
    }
});