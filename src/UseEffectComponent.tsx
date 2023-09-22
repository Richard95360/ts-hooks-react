import * as  React from 'react'

const UseEffectComponent = () => {
    const [val, setVal] = React.useState<number>(1)

   React.useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v) => v +1)
    },1000)
    return () => {
        clearInterval(timer)
    }
   }, [val])
   

  return (
    <div>
        {val}
    </div>
  )
}

export default UseEffectComponent