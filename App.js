import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

import Gettingstarted from './screens/auths/gettingstarted';
import Tip from './screens/tips/tips';

export default function App() {
  return (
    <PaperProvider>
{   /*   <Gettingstarted/>*/
}    
  <Tip/>
</PaperProvider>
  );
}
