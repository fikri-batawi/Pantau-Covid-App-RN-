import { Scene, Router } from 'react-native-router-flux';
import React from 'react'
import Home from './containers/pages/Home'
import Detail from './containers/pages/Detail'

class Routes extends React.Component {
    render() {
        return (
            <Router >
                <Scene key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} initial={true}/>
                    <Scene key="detail" component={Detail}  />
                </Scene>
            </Router >
        );
    }
}
export default Routes