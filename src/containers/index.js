// Library imports
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';

// Local imports
import CreateItem from './screen/CreateItem';
import GetItem from './screen/GetItem';
import UpdateItem from './screen/UpdateItem';
import { GET_ITEMS } from '../graphql/queries';

const ItemScreen = () => {
  const [name, setName] = useState('');
  const [idToUpdate, setIdToUpdate] = useState(null);
  const { loading, error, refetch } = useQuery(GET_ITEMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error?.message}</Text>;

  return (
    <View>
      <CreateItem refetch={refetch} />
      <GetItem setIdToUpdate={setIdToUpdate} setName={setName} refetch={refetch} />
      {idToUpdate && (
        <UpdateItem
          idToUpdate={idToUpdate}
          setIdToUpdate={setIdToUpdate}
          name={name}
          setName={setName}
          refetch={refetch}
        />
      )}
    </View>
  );
};

export default ItemScreen;
