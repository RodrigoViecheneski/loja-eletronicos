import { Stack } from "expo-router";
import { StyleSheet, SafeAreaView, ScrollView, View, Button } from "react-native";



export default function Screen() {

    const handleBuyButton = () => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{title: ''}}/>
            <ScrollView style={styles.area}>
                
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button
                    title="Comprar Agora"
                    onPress={handleBuyButton}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    area: {
        flex: 1,
        padding: 10
    },
    buttonArea: {
        padding: 10
    }
});