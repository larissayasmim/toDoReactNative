import { StatusBar } from 'expo-status-bar';

import { Home } from './src/screens/Home/Home';


export default function App() {
  return (
    <>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        translucent
        networkActivityIndicatorVisible = {false}
      />  
         <Home/>
     
     
    </>
  );
}


