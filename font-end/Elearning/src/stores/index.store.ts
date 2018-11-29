import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';
import SessionStore from './session.store';
import UIStore from './ui.store';



const hydrate = create({
    storage: AsyncStorage,
    jsonify: true
})

let session = new SessionStore();
let ui = new UIStore(session);

export default {
    SessionStore: session,
    UIStore: ui
}