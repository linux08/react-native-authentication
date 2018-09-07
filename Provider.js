import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';

export const MyContext = React.createContext();


export default class MyProvider extends Component {
    state = {
        token: ''
    };

    componentWillMount() {
        AsyncStorage.getItem('userToken')
            .then((token) => {
                this.setState({ token })
            })
            .catch(error => {
                this.setState({ error })
            })
    }



    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}
