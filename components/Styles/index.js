import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    scrollViewContainer: {
      flex: 1,
      flexDirection: 'column',
    }
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
    }
});

export default styles;
export { stylesForHeader };