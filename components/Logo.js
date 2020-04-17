import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={{uri: 'https://drive.google.com/uc?id=1FWl_sASF7EdeYFIFdEeYtg3hMgxgxoFR'}} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 170,
    marginBottom: 12,
  },
});

export default memo(Logo);
