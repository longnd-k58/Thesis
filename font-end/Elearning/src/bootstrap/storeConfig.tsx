import SessionStore from "../stores/session.store";

let sessionStore = new SessionStore();
export default function StoreConfig() {
    return {
        sessionStore
    };
}