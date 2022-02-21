import React from 'react';
import { FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import Sorter from './Sorter';
import Filtering from './Filtering';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {

  handlePress = (id) => {
    const { history } = this.props;
    history.push(`/repositories/${id}`);
  };

  renderHeader = () => {
    const { queryText, setQueryText, setSorting, label, setLabel } = this.props;
    return (
      <>
        <Filtering queryText={queryText} setQueryText={setQueryText} />
        <Sorter setSorting={setSorting} label={label} setLabel={setLabel} />
      </>
    );
  };

  render() {
    const { repositories, history, onEndReach } = this.props;
    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.handlePress(item.id, history)}>
            <RepositoryItem item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}