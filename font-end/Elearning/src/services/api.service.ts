import config from '../config/api.config';


export default class API {

    app_key: string;
    domain: string;

    constructor(domain: string, app_key: string) {
        this.domain = domain;
        this.app_key = app_key;
    }

    async raw(url: string, params: any, data_key: string) {
        try {
            let res = (await fetch(url, params).then((response: any) => response.json()));
            console.log(url, params, res);
            if (res.status == true) {
                return [null, res[data_key || 'data'], res];
            }
            else {
                return [res.msg || "API Error", null];
            }
            return ["error.operation_failed", null];
        } catch (err) {
            console.warn(url, params, err);
            return ["error.operation_failed", null];
        }
    }

    get(api: string, data: any, data_key: string) {
        data.api_key = config.app_key;
        return this.raw(this.domain + api, {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET'
        }, data_key);
    }


    post(api: string, data: any, data_key: string) {
        data.api_key = config.app_key;
        return this.raw(this.domain + api, {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST'
        }, data_key);
    }

    put(api: string, data: any, data_key: string) {
        data.api_key = config.app_key;
        return this.raw(this.domain + api, {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PUT'
        }, data_key);
    }

}