
import { Text, View, Image} from "react-native";
import { styleEmpList } from "./StyleEmptyList";


export function EmptyList() {
  return(
   <>
  <View  style={styleEmpList.container} >
    <Image style={styleEmpList.imageSty} source={require('../../../assets/empty.png')}/>
    <View style={styleEmpList.textBlock}>
      <Text style={styleEmpList.phraseOne}>You don't have tasks registered yet</Text>
      <Text style={styleEmpList.texts}>Create tasks and organize your to-do items</Text>
    </View> 
    
    
  </View>
   </>
  )
}