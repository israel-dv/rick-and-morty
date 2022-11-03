import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";

import { TabNavigator } from "./src/components/TabNavigator";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Signika-Regular": require("./assets/fonts/Signika-Regular.ttf"),
    "Sen-Regular": require("./assets/fonts/Sen-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
