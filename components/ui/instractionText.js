import { Text, StyleSheet } from "react-native"
import Colors from "../../constant/colors";

function InstractionText({ children }) {
    return <Text style={styles.instractionText}>{children}</Text>
}


export default InstractionText;

const styles = StyleSheet.create({
    instractionText: {
        color: Colors.accent500,
        fontSize: 24,
    }
}) 