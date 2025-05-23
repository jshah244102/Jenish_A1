import { ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import styles from '../../Styles';
import HeaderForHomeScreen from './HeaderForHomeScreen';

/// Create an 

export default function HomeScreen() {
    return (
        /// Give safe area to the component
        <View style={styles.container}>
            <HeaderForHomeScreen />
            <ScrollView style={styles.scrollViewContainer}>
                
            </ScrollView>
        </View>
    )
}

