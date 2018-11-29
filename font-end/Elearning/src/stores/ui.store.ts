import { observable, action, flow, computed } from 'mobx';
import SessionStore from './session.store';
import { persist } from 'mobx-persist';

export default class UIStore {
    @persist @observable skipSplash = false;
    @persist @observable current_language = 'en';
    @observable loadingIds: any[] = [];
    @observable dropdownList: any[] = [];
    @observable dropdownAlert: any;
    @observable currentAlert: any;
    SessionStore: any;


    constructor(SessionStore: SessionStore) {
        this.SessionStore = SessionStore;
    }

    showNext() {
        if (!this.currentAlert) {
            if (this.dropdownList.length > 0) {
                this.currentAlert = this.dropdownList.shift();
                const { type, title, content } = this.currentAlert;
                this.dropdownAlert.alertWithType(type, title, content);
            }
        }
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

    @action
    initDropdown(dropdown: any) {
        this.dropdownAlert = dropdown;
    }

    @action
    showDropdown(type: any, title: any, content: any, duration: any, callback: Function) {
        this.dropdownList.push({ type, title, content, duration, callback });
        this.showNext();
    }

    @action
    dropdownOnClose(data: any) {
        if (!!this.currentAlert && typeof this.currentAlert.callback === 'function') {
            this.currentAlert.callback(data);
        }
        this.currentAlert = null;
        this.showNext();
    }

    /**
     * Computed
     * Goto Course Screen
     */
    @computed
    get shouldGotoMain() {
        return this.SessionStore.isLogined
    }

    /**
     * Computed 
     * Show loading
     */
    @computed
    get shouldShowLoading() {
        return this.loadingIds.length > 0;
    }

    @action
    login() {

    }

}