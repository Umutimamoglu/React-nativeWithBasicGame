import { View, StyleSheet, Text, Pressable, Platform } from "react-native";


function PrimaryButton({ children, onPress }) {



    return (
        <View style={styles.butttonOuterContainer} >
            <Pressable style={({ pressed }) =>
                pressed
                    ? [styles.buttonInnerContainer, Platform.OS === 'ios' && styles.pressed]
                    : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: '#644202' }}
            >

                <Text style={styles.buttonText}> {children}</Text>

            </Pressable >
        </View>
    );
}

export default PrimaryButton

const styles = StyleSheet.create({
    butttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden' // buradaki hiçbir efekt dışarıya taşamaz
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',

        paddingVertical: 8,
        paddingHorizontal: 16,

        elevation: 2,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
})
