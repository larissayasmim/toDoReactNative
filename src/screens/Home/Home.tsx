import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image, NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";

import { MyStyles } from "./StyleHome";
import { Participants } from "../../components/Participants/Participants";
import { EmptyList } from "../../components/EmptyList/EmptyList";
import { DeleteAllTasks } from "../../components/DeleteAllTasks/DeleteAllTasks";

import { AntDesign } from '@expo/vector-icons';



export function Home() {
  
  const [arrayTasks, setArrayTasks ] = useState<string[]>([]);
  const [tasksContent, setTasksContent ] = useState('');
  var   [isTaskCompletedAmount, setIsTaskCompletedAmount] = useState(0);
  var   [takesStateisTaskCompleted, setTakesStateisTaskCompleted] = useState(false);


  function handleCreateNewName() {
    if(arrayTasks.includes(tasksContent)){
      return Alert.alert("Repeated Task", "This task already exists on your list.")
    } 
    else
    {
    setArrayTasks(prevState => [...prevState, tasksContent])
    setTasksContent('')
  }
  }

  // function handlePressEnterCreateNewTasks(e: NativeSyntheticEvent<TextInputKeyPressEventData>){
  //   if(e.nativeEvent.key === ''){
  //     if(arrayTasks.includes(tasksContent)){
  //       return Alert.alert("Repeated Task", "This task already exists on your list.")
  //     } 
  //     else
  //     {
  //     setArrayTasks(prevState => [...prevState, tasksContent])
  //     setTasksContent('')
  //   }

  //   }
  // }

  function handleRemoveName(item : string) {

   const arrayAfterDeletedTasks = arrayTasks.filter(arrayWithoutTasksDelet => arrayWithoutTasksDelet !== item)
    setArrayTasks(arrayAfterDeletedTasks)
    setIsTaskCompletedAmount(takesStateisTaskCompleted && isTaskCompletedAmount > 0 ? isTaskCompletedAmount - 1 : isTaskCompletedAmount + 0)//
   
  }

  const tasksAmount = arrayTasks.length
  var isNotEmpty = tasksContent.match(/^(\w+)/) ;

  return (

 
      <View style={MyStyles.container}>
        <Text style={MyStyles.titulo}><Image source={require('../../../assets/todo.png')}/></Text>
        {/* <Text style={MyStyles.subTitulo}><Image source={require('../../../assets/subt2.png')}/></Text> */}
    
        <View style={MyStyles.inputAndBotton} >
          <TextInput
          style={MyStyles.inputStyle}
          placeholder="Digite o nome desejado"
          placeholderTextColor='#6b6b6b'
          value={tasksContent}
          onChangeText={(event) => setTasksContent(event)}
          // onKeyPress={handlePressEnterCreateNewTasks}
          />  

          {isNotEmpty ?  
            <TouchableOpacity style={MyStyles.buttonAdd} onPress={handleCreateNewName}  >
              <Text> 
                <AntDesign name="pluscircleo" size={20} color="#1c1c1c" />
              </Text>   
            </TouchableOpacity> :  
            <TouchableOpacity style={MyStyles.buttonAddDisabled} disabled>
              <Text> 
              <AntDesign name="closecircleo" size={20} color="#1c1c1c" /> 
              </Text>   
            </TouchableOpacity> }

          </View>           
        
        <View style={MyStyles.createdAndCompletedSty}>
          <View style={MyStyles.createdAndNumberSty}>  
            <Text style={MyStyles.createdSty}>Created </Text> 
            <Text style={MyStyles.createdNumberSty}> {tasksAmount} </Text>
          </View>

            <View style={MyStyles.createdAndNumberSty}> 
              <Text style={MyStyles.completedSty}>Completed </Text>
              <Text style={MyStyles.createdNumberSty}> {isTaskCompletedAmount} </Text>
            </View>

        </View>       
        
        <FlatList
          data={arrayTasks}//here in data, i put the name of array what i created
          keyExtractor={item => item} // here i put the key, since it's an array-- the same thing as key 
          renderItem={({item}) => (
            <Participants 
              key={item}
              name={item}
              handleRemoveName={() => handleRemoveName(item)}
              isTaskCompletedAmount={isTaskCompletedAmount}
              setIsTaskCompletedAmount={setIsTaskCompletedAmount}
              setTakesStateisTaskCompleted={setTakesStateisTaskCompleted}
            
           
              />

          )}
          showsVerticalScrollIndicator={false} // this is to hide de vertical bar of scroll
          ListEmptyComponent={() => (
            <EmptyList />
          )}
        />

        {tasksAmount > 0 && 
          <DeleteAllTasks 
            setArrayTasks={setArrayTasks} 
            setIsTaskCompletedAmount={setIsTaskCompletedAmount}
            isTaskCompletedAmount={isTaskCompletedAmount}
          /> }
      </View>
   
    
  )
}