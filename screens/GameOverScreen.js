import { Text, View, Image, StyleSheet } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constant/colors"
import PrimaryButton from "../components/ui/PrimaryButton"


function GameOverScreen() {

    return (

        <View style={styles.rootContainer}>
            <Title> Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>

            <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highligth}>X</Text>  rounds to guess the number{' '} <Text style={styles.highligth}>Y</Text> </Text>.
            </View>
            <PrimaryButton> Start New Game </PrimaryButton>
        </View>

    )
}

export default GameOverScreen


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        flexSize: 24,
        textAlign: 'center',
        marginBottom: '24'

    },
    highligth: {
        fontFamily: 'opan-sans-bold',
        color: Colors.primary500
    }
})