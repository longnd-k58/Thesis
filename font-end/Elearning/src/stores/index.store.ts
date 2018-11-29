import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';



const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
})

