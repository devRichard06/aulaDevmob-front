import { View, StyleSheet, FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import H1 from './ui/H1'
import CardUser from './CardUser'
import Cardproduct from './cardproduct'





const Body = () => {

  const [users, setUsers] = useState([])

  const [products, setProducts] = useState([])



  const getUsers = async () => {
    try {
      const result = await fetch('https://auladevmob-back.onrender.com/user')
      const data = await result.json()
      console.log(data.sucess)
      setUsers(data.users)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])


  const getProducts = async () => {
    try {
      const result = await fetch('https://auladevmob-back.onrender.com/product')
      const data = await result.json()
      console.log(data.sucess)
      setProducts(data.products)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <View style={styles.body}>
      <H1 style={styles.usuariosH1}>Usuários</H1>
      <View style={styles.listUser}>
        {users.length ? <FlatList
          data={users}
          renderItem={({ item }) => <CardUser user={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
        /> : <Text style={{color: '#FFF'}}>Loading......</Text>}
        
         </View>
         <H1 style={styles.usuariosH1}>Produtos</H1>
        <View style={styles.listProduct}>

        {products.length ? <FlatList
            data={products}
            renderItem={({ item }) => <Cardproduct product={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />     
        : <Text style={{color: '#FFF'}}>Loading......</Text>}

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
    marginBottom: 10,
    color: "#FFF"
  },
  listUser: {
    height: 120
  },

  listProduct: {
    height: 120, 
    marginTop: 10
  }



}
)

export default Body