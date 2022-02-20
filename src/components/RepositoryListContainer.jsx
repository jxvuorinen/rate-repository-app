import React from 'react';
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';
import RepositoryItem from './RepositoryItem';
import Sorter from './Sorter';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories, label, setSorting, setLabel }) => {
  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handlePress = (id) => {
    history.push(`/repositories/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={<Sorter setSorting={setSorting} label={label} setLabel={setLabel} />}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item.id)}>
          <RepositoryItem item={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryListContainer;