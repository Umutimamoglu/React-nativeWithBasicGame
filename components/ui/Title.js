
import { Text, StyleSheet } from "react-native";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}


export default Title;



const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12,
        margin: 12,
        maxWidth: '60%'
    },
});
