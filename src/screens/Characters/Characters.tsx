import React from "react";
import { View, Text } from "react-native";

import { useCharacters } from "../../hooks/useCharacters";
import { charactersStyles } from "./CharactersStyles";

export const Characters = (): React.ReactElement => {
  const { data: characters } = useCharacters();

  return (
    <View style={charactersStyles.container}>
      {characters?.results.map(({ name }) => (
        <Text>{name}</Text>
      ))}
    </View>
  );
};
