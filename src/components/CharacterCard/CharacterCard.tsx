import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { characterStyles } from "./characterStyles";

type CardProps = {
  image: string;
  name: string;
  status: string;
  gender: string;
};

export const CharacterCard = ({
  image,
  name,
  status,
  gender,
}: CardProps): React.ReactElement => {
  return (
    <View style={characterStyles.card}>
      <Image
        source={{ uri: image }}
        style={characterStyles.image}
        resizeMode="cover"
      />
    </View>
  );
};
