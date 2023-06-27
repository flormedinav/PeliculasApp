import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Navigation} from './src/navigation/Navigation';
// import {FadeScreen} from './src/screen/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
