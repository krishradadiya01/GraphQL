import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import { styles } from '../themes';
import { colors } from '../themes/colors';

export const CSafereaView = ({children, ...props}) => {
  return (
    <SafeAreaView {...props} style={[localStyles(props.style).root]}>
      {children}
    </SafeAreaView>
  );
};

const localStyles = (style) =>
  StyleSheet.create({
    root: {
      ...styles.flex,
      backgroundColor: colors.white,
      ...style,
    },
});
