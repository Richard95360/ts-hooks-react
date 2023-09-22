import * as React from 'react'

const UseRefComponent = () => {
    const inputref = React.useRef<HTMLInputElement | null>(null)
  return (
    <div>
        <input type="text" ref={inputref} />
    </div>
  )
}

export default UseRefComponent