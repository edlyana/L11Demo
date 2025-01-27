import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
      onPress={()=>{
          let myData = JSON.parse(route.params.datastr);
          let item = {name:name};
          myData.push(item);
          fetch("https://a77d6a585ccf4ec7acd49c7edce86cae.api.mockbin.io/", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": "placeholderValue"
              },
              body:JSON.stringify(myData)
          })
          .then((response) => {
              navigation.navigate("Home");
          })
        }
      }
      />
    </View>
  );
};

export default Add;
