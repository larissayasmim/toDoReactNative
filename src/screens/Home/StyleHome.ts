import { StyleSheet } from "react-native"


export const MyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 24,
  },

  titulo : {
    fontSize: 40,
    textAlign: "center",
    color: '#ffffff',
    marginTop: 64,
    height: 50,
    marginBottom: 8,
  },

  subTitulo: {
    fontSize: 30,
    textAlign: "center",
    color: '#ffffff',
  },

  inputAndBotton: {
    
    flexDirection: "row",
    marginBottom: 40,

  },


  inputStyle: {
    backgroundColor: '#262626',
    marginTop: 40,
    marginRight: 10,
    fontSize: 16,
    color: '#fafafa',
    height: 50,
    borderRadius: 4,
    flex: 1,
    padding: 10,
  },

  buttonAdd: {
    backgroundColor: "#008000",
    fontSize: 16,
    color: "#f8f8ff",
    borderRadius: 4,
 
    marginTop: 40,
    padding: 15,
    textAlign: "center",
  
  
  },

  buttonAddDisabled: {
    backgroundColor:  '#696969',
    fontSize: 16,
    color: "#ffffff",
    borderRadius: 4,
 
    marginTop: 40,
    padding: 15,
    textAlign: "center",
  },


  createdAndCompletedSty: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
  
   
  },

  createdAndNumberSty: {
    flexDirection: 'row',
 
  },


  createdSty: {
    textAlign: "center",
    fontSize: 14,
    color: '#2A7E2E',
    fontWeight: 'bold',
  
  },
  completedSty: {
    textAlign: "center",
    fontSize: 14,
    color: '#4ea8de', 
    fontWeight: 'bold',   
  },

  createdNumberSty:{
    fontSize: 12,
    backgroundColor: '#363636',
    color: '#d9d9d9',
    borderRadius: 999,
    paddingRight: 6,
    paddingLeft: 6,
    fontWeight: 'bold',  
  },

})
