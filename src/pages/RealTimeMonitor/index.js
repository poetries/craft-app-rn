import React from 'react';
import { View, Text } from 'react-native';
import { withApollo } from 'react-apollo';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { Button } from '@ant-design/react-native';
import Color from '../../theme/color'
import {Icon} from '@ant-design/react-native';

@connect(({ app }) => {
    return app;
})
class MonitorScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const {navigate} = navigation;
        return ({
            title:'实时监控',
            headerStyle:{
                backgroundColor: Color.brand.primary
            },
            headerTitleStyle:{
                color: Color.background,
                fontWeight: 'normal',
                textAlign: 'center',
                fontSize: 16,
                flex:1
            },
            headerRight: (
                <Icon
                    name={'message'}
                    size={22}
                    onPress={()=>{navigate('Msg')}}
                    style={{marginRight:15}}
                />
            ),
            headerLeft: (
                <Icon
                    name={'user'}
                    size={22}
                    onPress={()=>{navigate('User')}}
                    style={{marginLeft:15}}
                />
            ),
        })
    };

    componentDidMount(){

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>实时监控</Text>
                <Button onPress={()=>this.props.navigation.navigate('Login')}>Login</Button>
                <Button onPress={()=>this.props.navigation.navigate('MonitorDetail')}>MonitorDetail</Button>
                
            </View>
        );
    }
}

export default withApollo(MonitorScreen)