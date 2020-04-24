import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import Map from "../Components/Map";
import TrackForm from "../Components/TrackForm";
import { FontAwesome } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  // console.log("outside", state.recording);
  const callback = useCallback(
    (location) => {
      // console.log("inside", state.recording);
      addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback); //vid 47 7:32

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text>Please Enable location services </Text> : null}
      <TrackForm></TrackForm>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = {
  title: "Add Track",
  tabBarIcon: <FontAwesome name="plus" size={20} />,
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
