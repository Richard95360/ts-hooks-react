
import UseStateComponent from './UseStateComponent'
import UseEffectComponent from './UseEffectComponent'
import UseContextComponent from './UseContextComponent'
import UseReducerComponent from './UseReducerComponent'
import UseRefComponent from './UseRefComponent'
import CustomHookComponent from './CustomHookComponent'
import EventMoreReactComponent from './EventMoreReactComponent'

function App() {
  return (
    <>
     <h1>Event more React component TS stuff</h1>
     <EventMoreReactComponent/>
     <h1>CustomHooks</h1>
     <CustomHookComponent/>
     <h1>useRef</h1>
     <UseRefComponent/>
     <h1>useReducer</h1>
     <UseReducerComponent/>
     <h1>useContext</h1>
     <UseContextComponent/>
     <h1>useEffect</h1>
     <UseEffectComponent/>
     <h1>useState</h1>
     <UseStateComponent/>
     
    </>
  )
}

export default App
