import * as React from 'react'
import { HeadingProps } from './types';


export const Heading = ({title}:HeadingProps) => {
    return( <h3>{title}</h3>)
}

export const List: <ListItem>({
    items,
    render,
  }: {
    items: ListItem[];
    render: (item: ListItem) => React.ReactNode;
  }) => React.ReactElement = ({ items, render }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{render(item)}</li>
        ))}
      </ul>
    );
  };


const EventMoreReactComponent = () => {
  return (
    <div>
    <Heading title="Hello ric"/>
    <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
}

export default EventMoreReactComponent