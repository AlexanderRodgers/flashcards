import * as React from 'react';
import { Box } from 'native-base';
import { BottomNavigation, BottomNavigationTab, Icon } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const HomeIcon = (
    <Icon name="home-outline" />
)

const SearchIcon = (
    <Icon name="search-outline" />
)

const PlusIcon = (
    <Icon name="plus-circle-outline" />
)

const PersonIcon = ( 
    <Icon name="person-outline" />
)

const BottomNav = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <Box w={"100%"} h={10} >
            <BottomNavigation
                selectedIndex={selectedIndex}
                onSelect={index => setSelectedIndex(index)}
                >
                <BottomNavigationTab icon={HomeIcon} />
                <BottomNavigationTab icon={SearchIcon} />
                <BottomNavigationTab icon={PlusIcon} />
                <BottomNavigationTab icon={PersonIcon} />
            </BottomNavigation>
        </Box>
    )
};

const styles = StyleSheet.create({
    bottomNavigation: {
        marginVertical: 8
    }
})

export default BottomNav;