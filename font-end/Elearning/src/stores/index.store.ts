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

session.restore();
hydrate('session', session).then(() => session.start());
hydrate('ui', ui).then(() => console.log('ui has been hydrated'))

export default {
    SessionStore: session,
    UIStore: ui
}