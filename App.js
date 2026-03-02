import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Switch, Text, View, Button, Platform, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './Details'
import Categories from './Categories'
import Heading from './components/Heading'
import ListContainer from './components/ListContainer';
import styles from './AppStyles';
 
function HomeScreen({navigation}){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Welcome Home!</Text>
      <Heading style={styles.homeHeading}>Your Dashboard</Heading>

      <Text style={styles.homePlatformText}>
    {Platform.OS === 'ios' ? 'I am on iOS 🍎' : 'I am NOT on iOS 🤖'}
  </Text>
<View style={styles.homeButtonsRow}>
        <TouchableOpacity
          style={styles.homeButtonPrimary}
          onPress={() => navigation.navigate('Categories')}
        >
          <Text style={styles.homeButtonText}>Go to Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButtonSecondary}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.homeButtonText}>Go to Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.homeSwitchContainer}>
    <Text style={styles.homeSwitchLabel}>Toggle something fun:</Text>
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>
  <StatusBar style='auto'/>
</View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'App Name' }} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}