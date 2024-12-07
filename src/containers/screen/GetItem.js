// Library imports
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useQuery } from '@apollo/client';

// Local imports
import { useMutation } from '@apollo/client';
import { GET_ITEMS } from '../../graphql/queries';
import { DELETE_ITEM } from '../../graphql/mutations';

const GetItem = ({ setIdToUpdate, setName, refetch }) => {
  const { loading, error, data } = useQuery(GET_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error?.message}</Text>;

  const handleDelete = async (id) => {
    await deleteItem({ variables: { id } });
    refetch();
  };

  return (
    <View>
      {data?.items?.map((item) => (
        <View key={item?.id} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{item?.name}</Text>
          <Button title="Edit" onPress={() => { setIdToUpdate(item?.id); setName(item?.name); }} />
          <Button title="Delete" onPress={() => handleDelete(item?.id)} />
        </View>
      ))}
    </View>
  );
};

export default GetItem;
