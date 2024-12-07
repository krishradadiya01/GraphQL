// Library imports
import React from 'react';
import { ApolloProvider } from '@apollo/client';

// Local imports
import { CSafereaView } from './src/common/CSafeAreaView';
import { styles } from './src/themes';
import client from './src/graphql/client';
import ItemScreen from './src/containers';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <CSafereaView style={styles.flex}>
        <ItemScreen />
      </CSafereaView>
    </ApolloProvider>
  );
};

export default App;
