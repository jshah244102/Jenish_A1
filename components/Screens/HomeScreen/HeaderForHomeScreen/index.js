import { Image, View, Text } from "react-native";
import styles from "./styles";

export default function HeaderForHomeScreen() {
    // Now the ui of the component is defined that it should be horizontal and it should have a logo and some texts recomendations.
    return (
        <View style={styles.container}>
            <Image style={styles.logo}></Image>
            <Text style={styles.text}>All</Text>
            <Text style={styles.text}>Music</Text>
            <Text style={styles.text}>Podcasts</Text>
            <Text style={styles.text}>Audiobooks</Text>
        </View>
    );
}