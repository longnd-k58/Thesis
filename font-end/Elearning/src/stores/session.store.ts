import { observable, action, flow } from 'mobx';

export default class SessionStore {
    @observable isLogined: boolean = false;
    constructor() {
    }
    @action login = () => {
        this.isLogined = true;
    }
}