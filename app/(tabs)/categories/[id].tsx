import { View, StyleSheet, Text, FlatList } from "react-native";
import { getAllProducts, getProductsByCategory } from "../../../services/product";
import { ProductItem } from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";

export default function Screen() {
    const { id } = useLocalSearchParams(); // busca id
    const idCategory = parseInt(id as string);//tansforma id em str

    const category = getCategoryById(idCategory); //pega id cateforia
    if(!category) return router.back(); //se não encontrou a categoria retorna pagina
    
    const products = getProductsByCategory(idCategory);//pega os produtos por categoria

    return (
        <View style={styles.container}>
            <Stack.Screen options={{title: category.title}}/>
            <FlatList 
                data={products}  
               // renderItem={({item}) => <Text>{item.title}</Text>} 
                renderItem={({item}) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>
            );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20

    }
});