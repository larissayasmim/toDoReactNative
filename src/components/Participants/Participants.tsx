import { Text, TouchableOpacity, View } from "react-native";
import { StylesPart } from "./StyleParticipants";
import { useState } from "react";

import { Feather  } from '@expo/vector-icons'

type PropsTy = {
 
  name: string;
  handleRemoveName: () => void;
  // completedTasks : number;
  isTaskCompletedAmount: number;
  setIsTaskCompletedAmount: React.Dispatch<React.SetStateAction<number>>; 


  setTakesStateisTaskCompleted: React.Dispatch<React.SetStateAction<boolean>>;

  
}


export function Participants(props :PropsTy) {

  var [isTaskCompleted, setIsTaskCompleted] = useState(false);
  
  function handleSelectedTask() {
    setIsTaskCompleted(!isTaskCompleted)
    props.setIsTaskCompletedAmount(!isTaskCompleted === true ? props.isTaskCompletedAmount + 1 : props.isTaskCompletedAmount > 0 ? props.isTaskCompletedAmount - 1 : props.isTaskCompletedAmount + 0);  
    props.setTakesStateisTaskCompleted(!isTaskCompleted);
  } 
 
 
  
  return(
    <>
      <View style={StylesPart.participantBlock}>
       
          <TouchableOpacity style={StylesPart.contentBlock} onPress={handleSelectedTask}> 
            <View style={StylesPart.taskAndCircle} >
              <Text>
                { isTaskCompleted
                  ? <Feather name="check-circle" size={18} color="green" /> 
                  : <Feather name="circle" size={18} color="#4EA8DE" />
                }
              </Text>

              {isTaskCompleted 
                ? <Text style={StylesPart.taskCompletedSty}>{props.name}</Text> 
                : <Text style={StylesPart.propsNameSty}>{props.name}</Text> 
              }  


            </View>
          </TouchableOpacity>
        
        <TouchableOpacity style={StylesPart.buttonMinus} onPress={props.handleRemoveName} >
          <Text> 
            <Feather name="trash-2" size={18} color="#ff000095" />
          </Text>
        </TouchableOpacity>
      </View>
    </>

  )
}