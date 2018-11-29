import { observable, action, flow } from 'mobx';

export default class UIStore {
    @observable isLogined = false;
    constructor() {
    }
    @action login = () => {
        this.isLogined = true;
    }
}