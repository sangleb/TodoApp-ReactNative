import { useState } from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { theme } from "./theme";
import { TodoItem } from "./todoItem";


type TodoItem = {
    todoValue: string,
    isCompleted?: boolean,
}

export default function HomeScreen() {
    const [todo, setTodo] = useState("");

    const [todoList, setTodoList] = useState<TodoItem[]>([]);




    function handleChangeText(text: string) {
        setTodo(text);
    }

    function handleSubmit() {
        if (todo.length === 0) {
            return;
        }
        console.log("todo added is - ", todo);
        setTodo("");
        setTodoList([
            ...todoList,
            {
                todoValue: todo,
                isCompleted: false,
            }
        ]);
        setTodo("");
    }

    function handleTodoComplete(todoIndex: number) {
        const newTodoList = todoList.map((currentTodo, index) => {
            if (index !== todoIndex) {
                return currentTodo;
            }
            return {
                ...currentTodo,
                isCompleted: !currentTodo.isCompleted,
            }
        }        );
        setTodoList(newTodoList);
    }
    return (
        <ScrollView
            style= {styles.container}
            contentContainerStyle={{
                justifyContent: 'center',
                marginTop: 30,
                paddingBottom: 16,
            }}
            // stickyHeaderIndices={[0]}
        >
            <TextInput
                placeholder="add a new todo..."
                style={styles.textInput}
                onChangeText={handleChangeText}
                returnKeyType="done"
                value={todo}
                onSubmitEditing={handleSubmit}
                
            />
            {
                todoList.map((currentTodo, index) => (
                    <TodoItem 
                        key={index}
                        todoValue={currentTodo.todoValue}
                        isCompleted={currentTodo.isCompleted}
                        markComplete={() => handleTodoComplete(index)}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.whiteColor,
        flex: 1,
    },
    textInput: {
        backgroundColor: theme.lightBlueColor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        fontSize: 18,
    }
})