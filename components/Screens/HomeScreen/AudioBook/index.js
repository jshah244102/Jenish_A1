import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const audiobooks = [
    {
        id: 1,
        title: "Mastering Conversation...",
        author: "Helen Stone",
        image: require('../../../../assets/nodes.png'),
    },
    {
        id: 2,
        title: "Control your mind and...",
        author: "Eric Robertson",
        image: require('../../../../assets/nodes.png'),
    },
    {
        id: 3,
        title: "Ikigai: The japanese sec...",
        author: "Hector Garcia",
        image: require('../../../../assets/nodes.png'),
    },
];

export default function AudiobooksSection() {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
        );
    };

    return (
        <View>
            <View style={styles.audioGrid}>
                {audiobooks.map((book) => (
                    // <View key={book.id} style={styles.audioCard}>
                        <TouchableOpacity style={styles.audioCard} key={book.id}>
                            <TouchableOpacity
                                style={styles.heartIcon}
                                onPress={() => toggleFavorite(book.id)}
                            >
                                <Text style={{ fontSize: 18 }}>
                                    {favorites.includes(book.id) ? '♥' : '♡'}
                                </Text>
                            </TouchableOpacity>
                            <Image source={book.image} style={styles.audioImage} />
                            <Text style={styles.audioPremium}>Included in Premium</Text>
                            <Text style={styles.audioTitle}>{book.title}</Text>
                            <Text style={styles.audioAuthor}>{book.author}</Text>
                        </TouchableOpacity>

                    // </View>
                ))}
            </View>
        </View>
    );
}
