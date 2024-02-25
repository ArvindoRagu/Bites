const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Image1 from "./components/Image1";
import Image2 from "./components/Image2";
import RectangleVector from "./components/RectangleVector";
import ATTCustomersHit from "./components/ATTCustomersHit";
import Text1 from "./components/Text1";
import HAgoText from "./components/HAgoText";
import ViewLight from "./components/ViewLight";
import AlarmclockLight from "./components/AlarmclockLight";
import Image3 from "./components/Image3";
import Rectangle from "./components/Rectangle";
import ATTCustomersHit1 from "./components/ATTCustomersHit1";
import Text2 from "./components/Text2";
import HAgoText1 from "./components/HAgoText1";
import ViewLight1 from "./components/ViewLight1";
import AlarmclockLight1 from "./components/AlarmclockLight1";
import Image4 from "./components/Image4";
import Rectangle1 from "./components/Rectangle1";
import ATTCustomersHit2 from "./components/ATTCustomersHit2";
import Text3 from "./components/Text3";
import HAgoText2 from "./components/HAgoText2";
import ViewLight2 from "./components/ViewLight2";
import AlarmclockLight2 from "./components/AlarmclockLight2";
import Image5 from "./components/Image5";
import Line from "./components/Line";
import Line1 from "./components/Line1";
import Line2 from "./components/Line2";
import MeetRDDTPopular from "./components/MeetRDDTPopular";
import SourceGradeUnbiased from "./components/SourceGradeUnbiased";
import ShulgaTashCave from "./components/ShulgaTashCave";
import Line3 from "./components/Line3";
import ShulgaTashCave1 from "./components/ShulgaTashCave1";
import Ellipse from "./components/Ellipse";
import AuthorAuthorText from "./components/AuthorAuthorText";
import MeetRDDTPopular1 from "./components/MeetRDDTPopular1";
import SourceGradeUnbiased1 from "./components/SourceGradeUnbiased1";
import Line4 from "./components/Line4";
import Screenshot20240222At from "./screens/Screenshot20240222At";
import ShulgaTashCave2 from "./screens/ShulgaTashCave2";
import ShulgaTashCave3 from "./screens/ShulgaTashCave3";
import Password from "./components/Password";
import Login1 from "./screens/Login1";
import OtherInterests from "./screens/OtherInterests";
import ForgotPassword from "./screens/ForgotPassword";
import ViewFullPageButtonFromMa from "./screens/ViewFullPageButtonFromMa";
import InterestPersonalizer from "./screens/InterestPersonalizer";
import Search from "./screens/Search";
import YourInfocastPageFromMain from "./screens/YourInfocastPageFromMain";
import MainPage from "./screens/MainPage";
import SettingsButtonFromMainPage from "./screens/SettingsButtonFromMainPage";
import InterestManager from "./screens/InterestManager";
import BookmarkedLikedArticles from "./screens/BookmarkedLikedArticles";
import Login11 from "./screens/Login1";
import Login2 from "./screens/Login2";
import Login3 from "./screens/Login3";
import InterestsSetup from "./screens/InterestsSetup";
import Modal1 from "./components/Modal1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-ExtraBold": require("./assets/fonts/Rubik-ExtraBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screenshot20240222At"
              component={Screenshot20240222At}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShulgaTashCave2"
              component={ShulgaTashCave2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShulgaTashCave3"
              component={ShulgaTashCave3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OtherInterests"
              component={OtherInterests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewFullPageButtonFromMa"
              component={ViewFullPageButtonFromMa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InterestPersonalizer"
              component={InterestPersonalizer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourInfocastPageFromMain"
              component={YourInfocastPageFromMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingsButtonFromMainPage"
              component={SettingsButtonFromMainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InterestManager"
              component={InterestManager}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookmarkedLikedArticles"
              component={BookmarkedLikedArticles}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login11"
              component={Login11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login3"
              component={Login3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InterestsSetup"
              component={InterestsSetup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modal1"
              component={Modal1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
