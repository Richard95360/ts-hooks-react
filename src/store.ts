import * as  React from 'react'

const intialState = {
    first:'Jack',
    last:'harrigton'
};

export type UserState = typeof intialState;

const context = React.createContext<typeof intialState>(intialState);

export default context;