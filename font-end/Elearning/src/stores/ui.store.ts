import { observable, action, flow } from 'mobx';
import SessionStore from './session.store';
import { persist } from 'mobx-persist';

export default class UIStore {
    @persist @observable skipSplash = false;
    @persist @observable current_language = 'en';
    @observable loadingIds: any[] = [];
    @observable isLogined = false;
    SessionStore: any;


    constructor(SessionStore: SessionStore) {
        this.SessionStore = SessionStore;
    }


    @action
    setSkipSplash() {
        this.skipSplash = true;
    }

    @action
    showLoading(loadingId: any) {
        this.loadingIds.push(loadingId);
    }

    @action
    hideLoading(loadingId: any) {
        const index = this.loadingIds.indexOf(loadingId);
        if (index > -1) {
            this.loadingIds.splice(index, 1);
        }
    }

    @action login = () => {
        this.isLogined = true;
    }

}