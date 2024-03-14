import {Text, View, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import H4 from './ui/H4'

const Cardproduct = ({product}) => {
  return (
    <View style={styles.card}>
        <View style={styles.avatar}>
            <Image
                style={styles.avatarImg}
                source={product.photo}
            />
        </View>
        <View>
            <H4>{product.name}</H4>
            <Text style={styles.email}>Preço: {product.price}</Text>
            <Text style={styles.email}>Quantidade: {product.quantity}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    avatar: {
        marginHorizontal: 10
    },
    avatarImg: {
        width: 70,
        height: 70,
       
    },
    email: {
        marginTop: 4
    }
})

export default Cardproduct