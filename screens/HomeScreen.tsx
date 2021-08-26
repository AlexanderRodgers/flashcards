import * as React from 'react';
import { Text } from 'react-native';
import MultiSafeView from '../components/MultiSafeView';

const HomeScreen: React.FC = (): JSX.Element => {
    return (
        <MultiSafeView>
            <Text>
                Hello
            </Text>
        </MultiSafeView>
    );

};

export default HomeScreen;