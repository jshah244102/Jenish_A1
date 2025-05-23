import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 10, 
        gap: 10,
        backgroundColor: '#fff',
        width: '100%',
    },
    logo: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        borderRadius: 16,
        borderColor: '#000',
        borderWidth: 1,
        marginRight: 8,
    },
    /// Text should have boreder and container show in ui.
    text: {
        fontSize: 16,
        color: '#333',
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 16,
        marginRight: 8,
    }, 
    selectedCategoryText: {
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: "#1DB954",
        borderColor: "#1DB954",
    }
})

export default styles; // Export the stylesheet