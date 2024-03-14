import {View, StyleSheet, FlatList} from 'react-native'
import { useEffect,useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'





const Body = () => {

  const {users, setUsers} = useState ([])

   //setUsers([{name: "Richard"}])

  const getUsers = async () =>{
    try{
      const result = await fetch('https://brasilapi.com.br/api/cvm/corretoras/v1')
      const data = await result.json()
      console.log(data.sucess)
      setUsers(data.users)
      console.log(data[0].nome_social)
    } catch (error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <View style={styles.body}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View style={styles.listUser}>
            <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    usuariosH1: {
      marginBottom: 20,
      color: "#FFF"
    },
    listUser:{
      height: 120
    }
  }
)

export default Body