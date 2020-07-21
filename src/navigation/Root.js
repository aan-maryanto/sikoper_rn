import { createAppContainer, createStackNavigator } from 'react-navigation'
import Splash from '../app/screen/Splash'
import Auth from '../app/screen/Auth'
import Signin from '../app/screen/Signin'
import Signup from '../app/screen/Signup'

const stackNavigation = createStackNavigator(
    {
        Splash: { screen: Splash },
        Auth: { screen: Auth },
        Signin: { screen: Signin },
        Signup: { screen: Signup },
        Home: { screen: Home }   
    }
)

const Appcontainer = createAppContainer(stackNavigation)

export default Appcontainer