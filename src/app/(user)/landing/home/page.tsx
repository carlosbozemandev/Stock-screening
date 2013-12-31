import React from 'react'
import Hero from './hero'
import FinancialMessage from './financial-message'
import PortfolioSteps from './steps'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Hero/>
        <PortfolioSteps/>
        <FinancialMessage/>
    </div>
  )
}

export default page