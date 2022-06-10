import React from 'react'
import Icon1 from '../../images/app.svg'
import Icon2 from '../../images/card.svg'
import Icon3 from '../../images/marketing.svg'
import {
  ServicesContainer, 
  ServicesWrapper,
  ServicesH1,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements' 

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Automate buisness</ServicesH2>
            <ServicesP>We can allow user to create orders, choose products and automatically create a delivery requests.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Increase revenue</ServicesH2>
            <ServicesP>With our bots you don't need a lot of people in your team, bots will do all the work.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Stand out</ServicesH2>
            <ServicesP>1 billion users have telegram on their device. Why don't have your own bot for them?</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
