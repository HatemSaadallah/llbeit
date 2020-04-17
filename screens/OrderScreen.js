import React from 'react';
import {Text, StyleSheet, SafeAreaView, View, Button} from 'react-native';

import HorizontalLine from '../components/HorizontalLine';
import BackButton from '../components/BackButton';
import '../components/styles/OrderScreen.css'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'


export default function OrderScreen({ navigation }){
    // const [open, setOpen] = React.useState(false);
    // const handleClickOpen = (event) => {
    //     setOpen(true);
    // };
    
    // const handleClose = (event) => {
    //     setOpen(false);
        
    // };
    // const handleCloseAndMoveOn = (event) => {
    //     navigation.navigate('HomeStore');
    //     setOpen(false);
    // };
    return (
        <View>
        <BackButton />
        <View>
            <div class="cardBoard">
                <div class="heading"> 
                    <h6>رقم الطلب: 59393838</h6>   
                    
                </div>
                <hr />
                <div class="container">
                    <span>:طريقة الدفع </span>
                    <span class="cash">كاش</span>
                    <hr />
                    <span>:التكلفة الأولية </span>
                    <span class="cash">₪32</span>
                    <br />
                    <span>:تكلفة التوصيل </span>
                    <span class="cash">₪3</span>
                    <br />
                    <span>:مصاريف الأخرى </span>
                    <span class="cash">₪3</span>
                    <br />
                    <span>:خصم </span>
                    <span class="cash">-</span>
                    <br />
                    <span>:ضريبة </span>
                    <span class="cash">₪1.60</span>
                    <br />
                    <br />
                    <br />
                    <span>:المجموع الكلي </span>
                    <span class="cash">₪40.60</span>
                </div>
            </div>
            </View>
            <div class="accpepted">
                <h6>شكرا على استخدامكم خدمة للبيت</h6>
            </div>
            
            <Button
                color="#841584"
                title="شراء"
                style={styles.buttonhshsh}
            
                />  

            <Button
                color="#841584"
                title="إلغاء"
                onPress={() => navigation.navigate('Root')}
                />
 
            

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
    },
    buttonhshsh: {
        marginBottom: 10,
    }
});