import React from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";
import { characterStyles } from "./characterStyles";

type CardProps = {
  image: string;
  name: string;
  status: string;
  gender: string;
  onPress?: () => void;
};

export const CharacterCard = ({
  image,
  name,
  status,
  gender,
  onPress = () => null,
}: CardProps): React.ReactElement => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={characterStyles.card}>
        <Image
          source={{ uri: image }}
          style={characterStyles.image}
          resizeMode="cover"
        />
        <View style={characterStyles.cardInfoContainer}>
          <Text style={characterStyles.cardTextName}>{name}</Text>
          <View style={characterStyles.cardTextInfoContainer}>
            <Text style={characterStyles.cardTextInfo}>{status}</Text>
            <Text style={characterStyles.cardTextInfo}>{gender}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};
