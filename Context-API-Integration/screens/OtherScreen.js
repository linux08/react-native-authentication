import React from 'react';
import {
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { MyContext } from '../Provider';

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <MyContext.Consumer>
                    {context => ((
                        <View>
                            <Button title="I'm done, sign me out" onPress={() => this._signOutAsyn(removeToken)} />
                            <Text> Here is your token  {context.token} </Text>
                            <StatusBar barStyle="default" />
                        </View>
                    ))}
                </MyContext.Consumer>
            </View>
        );
    }

    _signOutAsync = async (removeToken) => {
        removeToken()
            .then(() => {
                this.props.navigation.navigate('Auth');
            })
            .catch(error => {
                this.setState({ error })
            })
    };
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});