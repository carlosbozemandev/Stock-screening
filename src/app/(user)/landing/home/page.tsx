import React from 'react'
import Hero from './hero'
import FinancialMessage from './financial-message'
import PortfolioSteps from './steps'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-gradient-to-r  from-black via-gray-800 to-black'>
        <Hero/>
        <PortfolioSteps/>
        <FinancialMessage/>
    </div>
  )
}

export default page