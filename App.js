import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });

function App() {
  // Auth.currentAuthenticatedUser().then((data) => console.log(data))

  return (
    <SafeAreaProvider style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withAuthenticator(App);
