import {View, Text} from 'react-native'
import {styles, title} from './styles'


const header = ({title})=>{
    return(
        <View style={styles.container}>
           <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default header