import { StyleSheet } from "react-native";


export const stylesDeleteAll = StyleSheet.create({
  container: {
      color: 'white',
      flexDirection: 'row',
      width: 360,
      padding: 12,
      marginLeft: 4,
    
  },

  textAndButtonSty: {
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: "#363636",
    textAlign: 'center',
    marginLeft: 230,
    paddingLeft: 8,
    paddingRight: 4,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems:'center', 
  },
  textSty: {
    fontSize: 14,
    marginRight: 5,
    color: '#808080'
  },
  trashSty: {
    textAlign: 'center',
    marginRight: 4,
  }
})