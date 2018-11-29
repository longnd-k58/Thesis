import { observable, action, flow, computed } from 'mobx';
import { persist } from 'mobx-persist';

class User {
    @persist @observable id = "";
    @persist @observable name = "";
    @persist @observable avatar = "";
    @persist @observable birthday = "";
    @persist @observable phone = "";
    @persist @observable gender = "";
    @persist @observable about = "";

    fromJson(json: Object) {
        for (let key in json) {
            if (json.hasOwnProperty(key)
                && this.hasOwnProperty(key)
                && (this as any)[key] != (json as any)[key]) {
                (this as any)[key] = (json as any)[key];
            }
        }
    }

    clear() {
        this.about = '';
        this.avatar = '';
        this.birthday = '';
        this.name = '';
        this.id = '';
        this.phone = '';
        this.gender = '';
    }

    @action
    update = flow(function* (data: any): any {

    })
}

export default class SessionStore {
    @persist @observable username: string = '';
    @persist @observable app_token = '';
    @observable status: string = 'loading';
    @persist('object', User) @observable user = new User();


    constructor() {

    }
    /**
     * Restore app
     */
    @action
    restore() {
        this.status = 'loading';
    }

    /**
     * Open app
     */
    @action
    start() {

    }

    @computed
    get isLogined() {
        return this.app_token && this.app_token != '' && this.user.id && this.user.id != '';
    }

    @action
    login = flow(function* (this: SessionStore, username: string, password: string): any {
        console.log('this', this);
        this.username = username;
        this.status = 'logining';
        //Call API if status true => change 'this.status = logined'
    })

    @action
    forgotPassword = flow(function* (email: string): any {

    })

    @action
    logout() {
        this.user.clear();
    }


}