import React from 'react';
import CardService from '../Service/CardService';
import GetToKnow from './GetToKnow';
import { Element } from 'react-scroll';

import ServiceProvide from './ServiceProvide';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div className=" bg-primary">
      <CardService />
      <GetToKnow />
      <Element name="service-section">
        <ServiceProvide />
      </Element>
      <Contact />
    </div>
  );
};

export default HomePage;
