import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/card";
import InstractionText from "../components/ui/instractionText";


function generateRandomNumberBetween(min, max, exclude) {

    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomNumberBetween(max, min, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess)


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {


        if ((
            direction === ' lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!!!", ' You know this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;

        } else {
            minBoundary = currentGuess + 1;

        }
        const newRndNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <Card>
                <InstractionText style={styles.instractionText}>Higher or Lower</InstractionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >-</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>


                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    guessText: {
        fontSize: 32,
        color: '#ddb52f',
        marginVertical: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        marginTop: 12,
    },
    button: {
        fontSize: 28,
        color: '#fff',
        marginHorizontal: 20,
    },
    instractionText: {
        marginBottom: 12,
    },
    logContainer: {
        marginTop: 32,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
});
