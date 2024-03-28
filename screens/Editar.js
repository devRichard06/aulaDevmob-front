import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import Button from '../components/ui/Button'



const Editar = () => {

  const route = useRoute()
  const navigationw = useNavigation()
  const { user } = route.params

  const [txtName, setTxtName] = useState(user.name)
  const [txtEmail, setTxtEmail] = useState(user.email)
  const [txtAvatar, setTxtAvatar] = useState(user.avatar)

  const editUser = async () => {
    try {
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user' + user.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: txtName, email: txtEmail, avatar: txtAvatar })
      })
      const data = await result.json()
      console.log(data)
      if (data?.success) {
        navigation.goBack()
      } else {
        alert(data.error)
      }

    } catch (error) {
      console.log('Error postUser ' + error.message)
      alert(data.error)
    }
  }


  const removeUser = async () => {
    try {
      const result = await fetch('https://backend-api-express-1sem2024-rbd1.onrender.com/user' + user.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
       
      })
      const data = await result.json()
      console.log(data)
      if (data?.success) {
        navigation.goBack()
      } else {
        alert(data.error)
      }

    } catch (error) {
      console.log('Error postUser ' + error.message)
      alert(data.error)
    }
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome...'
          onChangeText={setTxtName}
          value={txtName}
        />
        <TextInput
          style={styles.input}
          placeholder='Email...'
          onChangeText={setTxtEmail}
          value={txtEmail}
        />
        <TextInput
          style={styles.input}
          placeholder='Avatar...'
          onChangeText={setTxtAvatar}
          value={txtAvatar}
        />
        <Button
          title="Editar Usuário"
          onPress={editUser}
        />

        <Button
          title="Editar Usuário"
          onPress={removeUser}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: "#000"
  },
  form: {
    display: 'flex',
    padding: 40
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginBottom: 18,
    padding: 10,
  }
})




export default Editar
