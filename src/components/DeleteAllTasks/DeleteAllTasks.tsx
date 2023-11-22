import { View, Text, TouchableOpacity } from "react-native";
import { stylesDeleteAll } from "./StylesDeleteAllTasks";
import { Feather  } from '@expo/vector-icons'


type PropsDelAllTasksTy = {
  setArrayTasks: React.Dispatch<React.SetStateAction<string[]>>;
  setIsTaskCompletedAmount: React.Dispatch<React.SetStateAction<number>>;
  isTaskCompletedAmount: number;
}




export function DeleteAllTasks(props: PropsDelAllTasksTy) {
  
  function handleDeleteAllTasks() {
    props.setArrayTasks([]);
    props.setIsTaskCompletedAmount(props.isTaskCompletedAmount = 0)
  }

  return (

    <View style={ stylesDeleteAll.container}>
      <View >    
        <TouchableOpacity style={ stylesDeleteAll.textAndButtonSty} onPress={handleDeleteAllTasks} >
            <Text  style={ stylesDeleteAll.textSty}>Delete All</Text>
            <Text style={ stylesDeleteAll.trashSty}> 
              <Feather name="trash-2" size={16} color="#ff000095" />
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}