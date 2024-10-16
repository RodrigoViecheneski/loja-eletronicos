import { StyleSheet, Text, View } from "react-native";

export default function Screen() {
    return (
        <View style={styles.container}>
            <Text> FUI EU QUEM FEZ :D</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});