import React from 'react'

const UseStateComponent = () => {
    const [arr, setArr] = React.useState<Array<number>>([]);
    const [name, setName] = React.useState<string | null>(null);
  return (
    <div>
        <div>
            <button onClick={() => setArr([...arr,arr.length])}>add to array</button>
            {JSON.stringify(arr)}
        </div>
        <div>
            <button onClick={() => setName("jack")}>add to name</button>
            {JSON.stringify(name)}
        </div>
    </div>
  )
}

export default UseStateComponent