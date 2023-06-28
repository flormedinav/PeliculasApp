import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';
// import {FadeScreen} from './src/screen/FadeScreen';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: Props) => {
  return <GradientProvider>{children}</GradientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};

export default App;
