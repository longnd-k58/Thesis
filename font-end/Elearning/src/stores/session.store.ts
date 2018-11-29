import { observable, action, flow } from 'mobx';
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
    @observable isLogined: boolean = false;
    @persist @observable username = '';
    @persist @observable app_token = '';
    @persist('object', User) @observable user = new User();


    constructor() {

    }
    /**
     * Open app
     */
    @action
    start() {

    }

    @action
    login = flow(function* (username: string, password: string): any {

    })

    @action
    forgotPassword = flow(function* (email: string): any {

    })

    @action
    logout() {
        this.user.clear();
    }


}