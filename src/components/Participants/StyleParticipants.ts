import { StyleSheet } from "react-native"

export const StylesPart = StyleSheet.create({


  participantBlock: {
    flexDirection: 'row',
    marginBottom: 20,

  },

  contentBlock: {
    color: "#dcdcdc",
    marginBottom: 1,
    backgroundColor: "#363636",
    minHeight: 60,
    borderRadius: 6,
    padding: 20,
    flex: 1,
    marginRight: 4,  
    textAlign: 'center', 
  },


  buttonMinus: {
    backgroundColor: '#363636',
    minHeight: 60,
    width: 40,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 6,
  
    
  },

  taskAndCircle: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },

  propsNameSty: {
    marginLeft: 10,
    fontSize: 16,
    paddingRight: 18,
    color: '#d3d3d3',
  },

  taskCompletedSty: {
    marginLeft: 10,
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: '#808080',
  },



})