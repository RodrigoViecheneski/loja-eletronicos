import { Stack } from "expo-router";
//<Stack.Screen name="[id]"/> stack dinâmica
export default function CategoryLayout() {
    return (
        <Stack>
            <Stack.Screen name="list" options={{ title: 'Categorias'}}/>
            <Stack.Screen name="[id]"/> 
        </Stack>
    );
}