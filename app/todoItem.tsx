import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "./theme";



type TodoItemProps = {
    todoValue : string,
    isCompleted? : boolean,
    markComplete : () => void,
}


export function TodoItem({ todoValue, isCompleted, markComplete } : TodoItemProps) {

    function handlePress(){
        Alert.alert(
            "Manage Todo", 
            `Are you sure you want to mark todo as ${isCompleted? "pending" : "complete"}?`,
            [
                {
                    text: "No",
                    onPress: () => console.log("No Pressed"),
                },
                {
                    text: "Yes",
                    onPress: () => markComplete(),
                }
            ]
        )
    }

    return (
        <View style={styles.todoContainer}>
            <Text 
                style={[
                    styles.todoText,
                    isCompleted ? styles.textCompleted : undefined,
                ]}
            >
                {todoValue}
            </Text>
            <TouchableOpacity
                style={[
                    styles.button,
                    isCompleted ? styles.buttonCompleted : undefined 
                ]}
                onPress={handlePress}
            >
                <Text style={styles.buttonText}>
                    done
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    todoContainer: {
        paddingVertical: 20,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        borderBottomColor:theme.blackColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        borderRadius:5,
        padding: 8,
        backgroundColor: theme.lightRedColor,
    },
    buttonText: {
        color: theme.whiteColor,
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: 1.2,
        textTransform: "uppercase",
    },
    buttonCompleted: {
        backgroundColor: theme.greyColor,
    },
    textCompleted: {
        textDecorationLine: "line-through",
        color: theme.greyColor,
    }
})