import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    AsyncStorage
} from 'react-native';
import { MyContext } from '../Provider';

export default class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    _signInAsync = async (saveToken) => {
        saveToken()
            .then((data) => {
                this.props.navigation.navigate('App');
            })
            .catch((error) => {
                this.setState({ error })
            })

    };

    render() {
        return (
            <View style={styles.container}>
                <MyContext.Consumer>
                    {context => ((
                        <Button title="Sign in!" onPress={() => this._signInAsync(context.saveToken)} />
                    ))}
                </MyContext.Consumer>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});