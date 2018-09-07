import React from 'react';
import {
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { connect } from 'react-redux';
import { removeUserToken } from '../actions';

class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
                <Text>  Here is the user token {this.props.token.token}</Text>
            </View>
        );
    }

    _signOutAsync =  () => {
        this.props.removeUserToken()
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

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherScreen);