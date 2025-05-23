import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    audioGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 0
    },

    audioCard: {
        width: '44.8%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        position: 'relative',
        alignItems: 'center',
        marginBottom: 12,
        marginRight: '4%',
    },

    audioImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
        resizeMode: 'contain',
    },

    audioPremium: {
        color: 'green',
        fontSize: 12,
        marginBottom: 4,
        fontWeight: '500',
    },

    audioTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 2,
        textAlign: 'center',
    },

    audioAuthor: {
        fontSize: 12,
        color: '#555',
        textAlign: 'center',
    },

    heartIcon: {
        position: 'absolute',
        top: 80,
        right: 6,
        backgroundColor: '#fff',
        borderRadius: 12,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },

})

export default styles; // Export the stylesheet