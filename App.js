const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Login from "./screens/Login";
import Screenshot20240222At from "./screens/Screenshot20240222At";
import SettingsButtonFromMainPage from "./screens/SettingsButtonFromMainPage";
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
import MeetRDDTPopular from "./components/MeetRDDTPopular";
import SourceGradeUnbiased from "./components/SourceGradeUnbiased";
import ShulgaTashCave from "./components/ShulgaTashCave";
import ShulgaTashCave1 from "./components/ShulgaTashCave1";
import Ellipse from "./components/Ellipse";
import AuthorAuthorText from "./components/AuthorAuthorText";
import MeetRDDTPopular1 from "./components/MeetRDDTPopular1";
import SourceGradeUnbiased1 from "./components/SourceGradeUnbiased1";
import GroupInstance from "./components/GroupInstance";
import GroupInstance1 from "./components/GroupInstance1";
import GroupInstance2 from "./components/GroupInstance2";
import GroupInstance3 from "./components/GroupInstance3";
import GroupComponent1 from "./components/GroupComponent1";
import ViewFullPageButtonFromMa111 from "./components/GroupComponent2";
import Line1 from "./components/Line1";
import Line2 from "./components/Line2";
import Line3 from "./components/Line3";
import Line4 from "./components/Line4";
import Line41 from "./components/Line41";
import RectangleScreen from "./components/RectangleScreen";
import RectangleScreen1 from "./components/RectangleScreen1";
import Image6 from "./components/Image6";
import ShulgaTashCave2 from "./screens/ShulgaTashCave2";
import ShulgaTashCave3 from "./screens/ShulgaTashCave3";
import LeftSide from "./screens/LeftSide";
import Password from "./components/Password";
import B1 from "./components/B1";
import Login1 from "./screens/Login1";
import OtherInterests from "./screens/OtherInterests";
import Image1 from "./components/Image1";
import GroupComponent3 from "./components/GroupComponent3";
import HongKongInforms from "./components/HongKongInforms";
import BerkshireHathawayRamps from "./components/BerkshireHathawayRamps";
import GroupComponent4 from "./components/GroupComponent4";
import WhatsNextModal from "./components/WhatsNextModal";
import InterestManager from "./screens/InterestManager";
import ViewFullPageButtonFromMa111 from "./screens/ViewFullPageButtonFromMa";
import InterestPersonalizer from "./screens/InterestPersonalizer";
import Login11 from "./screens/Login11";
import Login2 from "./screens/Login2";
import MainPage from "./screens/MainPage";
import Modal1 from "./components/Modal1";
import YourInfocastPageFromMain from "./screens/YourInfocastPageFromMain";
import Search from "./screens/Search";
import ForgotPassword from "./screens/ForgotPassword";
import Login3 from "./screens/Login3";
import InterestsSetup from "./screens/InterestsSetup";
import BookmarkedLikedArticles from "./screens/BookmarkedLikedArticles";

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
              name="SettingsButtonFromMainPage"
              component={SettingsButtonFromMainPage}
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
              name="LeftSide"
              component={LeftSide}
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
              name="InterestManager"
              component={InterestManager}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewFullPageButtonFromMa1111"
              component={ViewFullPageButtonFromMa111}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InterestPersonalizer"
              component={InterestPersonalizer}
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
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Modal1"
              component={Modal1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourInfocastPageFromMain"
              component={YourInfocastPageFromMain}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
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
              name="BookmarkedLikedArticles"
              component={BookmarkedLikedArticles}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
