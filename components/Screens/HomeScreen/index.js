import { ScrollView, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import styles from '../../Styles';
import HeaderForHomeScreen from './HeaderForHomeScreen';
import AudiobooksSection from './AudioBook';

/// Create an 

export default function HomeScreen() {

    const allItems = [
        { id: 1, title: "Hot Hits Canada", category: "Music" },
        { id: 2, title: "Pop Favourites", category: "Music" },
        { id: 3, title: "Hip-Hop Central", category: "Music" },
        { id: 4, title: "Daily Wellness", category: "Podcasts" },
        { id: 5, title: "Audiobook 1", category: "Audiobooks" },
        { id: 6, title: "Audiobook 2", category: "Audiobooks" },
    ];

    const recentItems = [
        { id: 'r1', title: 'Daily Mix 1' },
        { id: 'r2', title: 'Chill Hits' },
        { id: 'r3', title: 'Lo-Fi Beats' },
        { id: 'r4', title: 'Top EDM' },
        { id: 'r5', title: 'Your Weekly' },
        { id: 'r6', title: 'Focus Flow' },
    ];

    return (
        /// Give safe area to the component
        <View style={styles.container}>
            <HeaderForHomeScreen />

            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.grid}>
                    {allItems.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.card}>
                            <View style={styles.cardContent}>
                                <Image style={styles.cardImage} source={require('../../../assets/nodes.png')} />
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Recently Played</Text>
                <View style={styles.recentGrid}>
                    {recentItems.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.recentCards}>
                            <Image style={styles.recentTileImage} source={require('../../../assets/nodes.png')} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <View style={[StyleSheet.create({ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 8 })]}>
                                <Text style={styles.recentTileTitle}>Playlist</Text>
                                <Text style={styles.recentTileTitle}>User 1</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Audiobooks for you</Text>
                <AudiobooksSection />
            </ScrollView>
        </View>
    )
}

