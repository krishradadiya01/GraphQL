// Library imports
import React, { useEffect } from 'react';
import { Button, TextInput, View } from 'react-native';

// Local imports
import { useMutation } from '@apollo/client';
import { UPDATE_ITEM } from '../../graphql/mutations';

const UpdateItem = ({ idToUpdate, setIdToUpdate, name, setName, refetch }) => {
  const [updateItem] = useMutation(UPDATE_ITEM);

  useEffect(() => {
    if (idToUpdate) {
      setName(name);
    }
  }, [idToUpdate]);

  const handleUpdateItem = async () => {
    await updateItem({ variables: { id: idToUpdate, name } });
    refetch();
    setName('');
    setIdToUpdate(null);
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Update Item" onPress={handleUpdateItem} />
    </View>
  );
};

export default UpdateItem;
