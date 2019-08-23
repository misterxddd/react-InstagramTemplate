import React from 'react';
import InstaService from '../../services/InstaService/InstaService';

const {
  Provider: ProviderInstaService,
  Consumer: ConsumerInstaService
} = React.createContext(new InstaService());

export {
  ProviderInstaService,
  ConsumerInstaService
}