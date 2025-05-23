import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    scrollViewContainer: {
        paddingHorizontal: 16,
        paddingTop: 10,
        gap: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    card: {
        width: '48%',
        backgroundColor: '#f2f2f2',
        padding: 12,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 2,
        borderColor: '#ddd',
        borderWidth: 1
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#000',
        fontSize: 14,
        flexShrink: 1,
    },

    cardImage: {
        width: 32,
        height: 32,
        borderRadius: 8,
        borderWidth: 1
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    recentGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },

    recentTileImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        backgroundColor: '#444',
        resizeMode: 'contain',
    },

    recentTileTitle: {
        marginTop: 0,
        color: '#000',
        fontSize: 12,
        flexShrink: 1,
        marginTop: 2,
        marginBottom: 4
    },

    recentCards: {
        backgroundColor: '#f2f2f2',
        width: 100,
        margin: 8,
        padding: 0,
        borderRadius: 10,
        alignItems: 'center',
    },
});

const stylesForHeader = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'green',
        borderBottomWidth: 3,
        paddingTop: 54,
        paddingHorizontal: 16,
        paddingBottom: 10,
        gap: 4
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    authorTitle: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    audioGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    audioCard: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 10,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    audioPremium: {
        color: 'green',
        fontSize: 12,
        marginBottom: 4,
    },
    audioTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },
    audioAuthor: {
        fontSize: 12,
        color: '#777',
    },
});

export default styles;
export { stylesForHeader };