import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { MyContext } from '../Provider';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    constructor() {
        super();

    }
    componentDidMount() {
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {

        this.props.context.getToken()
            .then((userToken) => {
                // This will switch to the App screen or Auth screen and this loading
                // screen will be unmounted and thrown away.
                this.props.navigation.navigate(userToken ? 'App' : 'Auth');
            })
            .catch(error => {
                this.setState({ error });
            })

    };

    render() {
        return (
            <View style={styles.container}>
                <MyContext.Consumer>
                    {context => ((
                        <View>
                            <ActivityIndicator />
                            <StatusBar barStyle="default" />
                        </View>
                    ))}
                </MyContext.Consumer>
            </View>
        );
    }
};


const ForwardRef = React.forwardRef((props, ref) => (
    <MyContext.Consumer>
        {context => <AuthLoadingScreen context={context} {...props} />}
    </MyContext.Consumer>
));

export default ({ navigation }) => (
    <View style={styles.container}>
        <ForwardRef
            navigation={navigation}
        />
    </View>

)
