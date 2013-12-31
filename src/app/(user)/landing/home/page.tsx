import React from 'react'
import Hero from './hero'
import FinancialMessage from './financial-message'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Hero/>
        <FinancialMessage/>
    </div>
  )
}

export default page