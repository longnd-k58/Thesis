import stores from "../stores/index.store";
import bootstrap from './bootApp';

export default function () {
    console.log('store: ', stores)
    return bootstrap(stores);
}