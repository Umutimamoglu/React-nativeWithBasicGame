import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constant/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/card";
import InstractionText from "../components/ui/instractionText";




function StartGameScreen({ onPickedNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('')


    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
            Alert.alert(
                'invalid number',
                'number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            )
            return
        }
        onPickedNumber(chosenNumber)

    }

    return (
        <View style={styles.rootContainer}>
            <Title>
                Guees My number
            </Title>
            <Card style={styles.inputContainer}>
                <InstractionText > Enter a Number</InstractionText>
                <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>
                            Reset
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>
                            Confirm
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;



const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, marginTop: 100,
        alignItems: 'center',

    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800, borderRadius: 8,

        elevation: 4, // just  android
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.1,


    }, instractionText: {
        color: Colors.accent500,
        fontSize: 24
    },
    numberInput: {

        height: 50,
        width: 50,
        fontSize: 32,
        borderColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})