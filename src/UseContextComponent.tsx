import * as  React from 'react'

import UserContext, {UserState} from './store.ts'

const ConsumerComponent = () => {
    const user:UserState = React.useContext(UserContext)
    return(
        <div>
           <div>First: {user.first}</div> 
           <div>Last: {user.last}</div> 
        </div>
    )
}

const UseContextComponent = () => {
    const [user, setUser] = React.useState<UserState>({
        first: 'jane',
        last:'smit'
    })
  return (
    <UserContext.Provider value={user}>
        <ConsumerComponent/>
        <button onClick={() => setUser({
            first: 'ric',
            last:'adams'
        })}>Change Context</button>

    </UserContext.Provider>
  )
}

export default UseContextComponent