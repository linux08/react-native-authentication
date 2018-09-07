
import React from 'react';
import {
    AsyncStorage,
    Button,
    StyleSheet,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { removeUserToken } from '../actions';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    }; 


    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button style={{ marginTop: 10 }} title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);