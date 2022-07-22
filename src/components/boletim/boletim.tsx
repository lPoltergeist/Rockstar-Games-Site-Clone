import React, { useState } from 'react'
import CardPost from '../card/card'
import Boletimdata from '../../data/boletimdata'

import {Section} from './styles'

function Boletim() {
  const [ visible, setVisible] = useState(6);

  const showMoreItems = () => {
    setVisible((prevValue)  => prevValue + 6);
  }
  return (
     <Section>
        <h2>Boletim</h2>
        <div className="wrapper">
        {
          Boletimdata?.slice(0, visible).map(boletim => (
            <CardPost 
            img={boletim.thumb}
            title={boletim.title}
            time={boletim.time}
            subtitle={boletim.subtitle}
            />
          ))
        }
        </div>
        <span>View More</span>

    </Section>
  )
}

export default Boletim