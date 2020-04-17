import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';


const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>مرحبا!</Header>
    <Paragraph>
      نتمنى لك تجربة جيدة مع تطبيق للبيت، يهدف هذا التطبيق إلى زيادة نسبة الأمان لدى المستخدم عن طريق إمكانية طلب الخضار والفواكه من المنزل
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('Root')}>
      الشراء مباشرة
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
      تسجيل الدخول
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('RegisterScreen')}>
      تسجيل حساب جديد
    </Button>
  </Background>
);

export default memo(Dashboard);
