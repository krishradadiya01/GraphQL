// Library imports
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { useMutation } from '@apollo/client';

// Local imports
import { CREATE_ITEM } from '../../graphql/mutations';
import { moderateScale } from '../../common/constants';
import { styles } from '../../themes';
import { colors } from '../../themes/colors';

const CreateItem = ({ refetch }) => {
  const [name, setName] = useState('');
  const [createItem] = useMutation(CREATE_ITEM);

  const handleCreateItem = async () => {
    if (!!name) {
      await createItem({ variables: { name } });
      refetch();
      setName('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
        style={localStyles.inputStyle}
      />

      <View style={localStyles.mainStyle}>
        <TouchableOpacity onPress={handleCreateItem} style={localStyles.buttonStyle}>
          <Text style={localStyles.textStyle}>Create Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(40),
    margin: moderateScale(20),
    borderWidth: 1,
    borderRadius: moderateScale(10),
    ...styles.p10
  },
  buttonStyle: {
    height: moderateScale(40),
    width: '40%',
    backgroundColor: colors.green,
    borderWidth: 1,
    borderRadius: moderateScale(10),
    ...styles.center
  },
  textStyle: {
    color: colors.white,
  },
  mainStyle: {
    ...styles.center
  }
})

export default CreateItem;
