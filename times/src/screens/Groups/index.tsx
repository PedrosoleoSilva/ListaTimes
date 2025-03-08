import { StyleSheet, Text, View } from "react-native";

const Groups = () => {
    return (
        <View style={styles.container}>
            <Text>Groups</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Groups;