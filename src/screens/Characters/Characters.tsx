import React from "react";
import { View, Text, FlatList } from "react-native";
import { CharacterCard } from "../../components/CharacterCard";

import { useCharacters } from "../../hooks/useCharacters";
import { SafeAreaLayout } from "../../layouts/SafeAreaLayout";
import { charactersStyles } from "./CharactersStyles";

export const Characters = (): React.ReactElement => {
  const { data: characters } = useCharacters();

  return (
    <SafeAreaLayout>
      <View style={charactersStyles.container}>
        <FlatList
          data={characters?.results}
          renderItem={({ item }) => (
            <CharacterCard
              key={item.id}
              name={item.name}
              image={item.image}
              status={item.status}
              gender={item.gender}
            />
          )}
        />
      </View>
    </SafeAreaLayout>
  );
};
