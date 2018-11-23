import * as React from "react";
import { Provider } from 'mobx-react';

import App from "../App";

export interface Props { };
export interface State { };

export default function (stores: any) {
    return class BootApp extends React.Component<Props, State>{
        constructor(props: Props) {
            super(props);
        }

        render() {
            return (
                <Provider {...stores}>
                    <App />
                </Provider>
            )
        }
    };
}

