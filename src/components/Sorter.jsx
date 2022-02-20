import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider } from 'react-native-paper';

const Sorter = ({ setSorting, label, setLabel }) => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);

  const changeSorting = (value) => {
    let variables;

    switch (value) {
      case 1:
        variables = {
          orderBy: 'CREATED_AT',
          orderDirection: 'DESC'
        };
        setLabel('Latest repositories');
        break;
      case 2:
        variables = {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'DESC'
        };
        setLabel('Highest rated repositories');
        break;
      case 3:
        variables = {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'ASC'
        };
        setLabel('Lowest rated repositories');
        break;
      default:
        console.log("unexpected sorting value?");
    }
    setSorting(variables);
    setVisible(false);
  };

  return (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}>
      <Menu
        style={{ backgroundColor: "#222", borderWidth: 0.5, zIndex: 100, marginTop: 30 }}
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Button icon="arrow-down-drop-circle-outline" onPress={showMenu}>sort: {label}</Button>}>
        <Menu.Item onPress={() => {}} title="Select an item..." disabled />
        <Divider />
        <Menu.Item onPress={() => changeSorting(1)} title="Latest repositories" />
        <Menu.Item onPress={() => changeSorting(2)} title="Highest rated repositories" />
        <Menu.Item onPress={() => changeSorting(3)} title="Lowest rated repositories" />
      </Menu>
    </View>
  );
};

export default Sorter;