import React from 'react'

import { useState } from 'react'

const TestComponents = () => {
  const [data, setData] = useState("This is data from parent component")

  return (
    <div>
       <Comp1 />
       <Comp2 />
       <Comp3 />
       <Comp4 data={data} />
    </div>
  )
}

export default TestComponents
