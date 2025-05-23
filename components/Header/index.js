import { StyleSheet, Text, View } from 'react-native';
import { stylesForHeader } from '../Styles';

export default function Header() {
    return (
        <View style={stylesForHeader.container}>
            <Text style={stylesForHeader.title}>Music App</Text>
            <Text style={stylesForHeader.authorTitle}>by Jenish Shah</Text>
        </View>
    );
}


