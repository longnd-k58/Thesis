import storesConfig from './storeConfig';
import bootstrap from './bootApp';

export default function () {
    const stores = storesConfig();
    return bootstrap(stores);
}