import React from 'react';
import { Provider } from 'react-redux';
import App from './app';


export default class Main extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}