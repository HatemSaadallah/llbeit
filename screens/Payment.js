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
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup} from 'react-bootstrap';

import '../components/styles/Payment.css'


export default function Payment({navigation}){
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const styleRadio = {
        marginTop: 20,
    }
    const [open, setOpen] = React.useState(false);
    const [dropDownMenu, setDropDownMenu] = React.useState('');
    let dataDropDown = ["Hello", "Hi", "Henlo"];
    const handleClickOpen = (event) => {
        setOpen(true);
    };

    const handleClose = (event) => {
        setOpen(false);
        
    };
    const handleCloseAndMoveOn = (event) => {
        navigation.navigate('OrderScreen');
        setOpen(false);
    };

    const [text, setText] = React.useState('');
    return(
        <View>
            <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous"
            />
        <View style={styles.container}>
            <h2>
                التأكد من المعلومات
            </h2>
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
            <h3 class="methodPurchasing">
                اختر طريقة التوصيل
            </h3>
        </View>
        <div class="mthodlol">
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Radio style={styleRadio} name="hi" aria-label="Radio button for following text input" />
                <span>وضع العنوان يدويا</span>
                </InputGroup.Prepend>
                <InputGroup.Prepend>
                <InputGroup.Radio style={styleRadio} name="hi" aria-label="Radio button for following text input" />
                <span>استخدام خدمة خرائط جوجل</span>
                </InputGroup.Prepend>
                <FormControl aria-label="Text input with radio button" />
            </InputGroup>
        </div>


        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        التالي
      </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">تأكيد عملية الشراء</DialogTitle>
        <DialogContent>
          <TextInput
                style={{height: 40}}
                placeholder="مثال: غزة - شارع النصر"
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
        <Text style={styles.textMessage}>
            ضع عنوان سكنك هنا:          
        </Text>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            إلغاء
          </Button>
          <Button onClick={handleCloseAndMoveOn} color="primary">
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