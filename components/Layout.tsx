import * as React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import BottomNav from './BottomNav';
const tabBarHeight = Platform.OS === 'ios' ? 100 : 70;

const Layout: React.FC = ({ children }): JSX.Element => {

    return (
        <View>
            <View>
                {children}
            </View>
            <View> 
                <BottomNav/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})

export default Layout;