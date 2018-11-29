import * as React from "react";
import { Provider } from 'mobx-react';

import App from "./App";

interface Props { };
interface State { };

export default function (stores: any) {
    return class BootApp extends React.Component<Props, State>{

        constructor(props: Props) {
            super(props);
        }

        render() {
            console.log('Boot App')
            return (
                <Provider {...stores}>
                    <App />
                </Provider>
            )
        }
    };
}

