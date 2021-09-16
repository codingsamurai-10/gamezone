import React from "react";
import { Text, View } from "react-native";
import globalStyles from "../styles/global";

const ReviewDetails = ({ route }) => {
  return (
    <View style={globalStyles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
      <Text>{route.params.rating}</Text>
    </View>
  );
};

export default ReviewDetails;
