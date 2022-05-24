import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  const dimentions = useDimensions();

  return (
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
