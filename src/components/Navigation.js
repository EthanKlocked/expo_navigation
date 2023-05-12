import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Home, Mypage, Desc, Setting } from '@/routes';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    {/* Define your stack screens here */}
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Desc" component={Desc} />
  </Stack.Navigator>
);

const MypageStack = () => (
  <Stack.Navigator>
    {/* Define your stack screens here */}
    <Stack.Screen name="Mypage" component={Mypage} />
  </Stack.Navigator>
);

const TabStack = () => (
  <Tab.Navigator>
    {/* Define your tab screens here */}
    <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
    <Tab.Screen name="MyPage" component={MypageStack} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

const DrawerNavigation = () => (
  <Drawer.Navigator>
    {/* Define your drawer screens here */}
    <Drawer.Screen name="Main" component={TabStack} options={{ headerShown: false }}/>
    <Drawer.Screen name="Setting" component={Setting} options={{ headerShown: false }}/>
  </Drawer.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <PaperProvider>
      <DrawerNavigation />
    </PaperProvider>
  </NavigationContainer>
);

export default Navigation;