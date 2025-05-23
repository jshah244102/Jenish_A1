import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./styles";

export default function HeaderForHomeScreen() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Music", "Podcasts", "Audiobooks"];

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {/* Logo button */}
                <Image  style={styles.logo}source={require('../../../../assets/logo.jpg')}/>
                {categories.map((category, index) => (
                    <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
                        <Text style={[
                                styles.text,
                                selectedCategory === category && styles.selectedCategoryText
                            ]}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
