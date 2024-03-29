import React , { useState } from 'react';
import { StyleSheet, View,  FlatList, Button} from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput'

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalHandler = goalTitle => {
    setCourseGoals((currentGoals) => [
      ...currentGoals, 
        {
          key : Math.random().toString() , value: goalTitle
        }
         ]);
         setIsAddMode(false);
      }

      const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
          return currentGoals.filter((goal) => goal.key !== goalId)
        })
      }

      const cancelGoalHandler = () => {
        setIsAddMode(false);
      }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
        <GoalInput 
            visible={isAddMode}
            onAddGoal ={goalHandler} 
            onCancel ={cancelGoalHandler}/>
          <FlatList 
              data={courseGoals}
              renderItem = {itemData => 
            <GoalItem
                id={itemData.item.key}
                onDelete={removeGoalHandler}
                title={itemData.item.value}/>}   
          />
   </View>
  );  
}

const styles = StyleSheet.create({
    screen: {
      padding: 50
    },
  
});
 