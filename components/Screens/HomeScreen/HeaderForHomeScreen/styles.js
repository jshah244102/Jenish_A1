import { StyleSheet } from 'react-native';
// Create a new stylesheet for horiontal view for header in homw screen where it contains logo and some recomedation texts
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
    },
    /// Text should have boreder and container show in ui.
    text: {
        fontSize: 16,
        color: '#333',
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    }
})

export default styles; // Export the stylesheet