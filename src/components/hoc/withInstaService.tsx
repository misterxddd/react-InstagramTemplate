import React from 'react';
import { ConsumerInstaService } from '../InstaServiceContext/InstaServiceContext';
import InstaService from '../../services/InstaService/InstaService';

const withInstaService = (mapFunction: Function) => (Wrapped: any) => {
  return (props: any) => {
    return (
      <ConsumerInstaService>
        {
          (instaService: InstaService) => {
            const mapped = mapFunction(instaService);
            return (
                <Wrapped {...props} {...mapped}/>
            );
          }
        }
      </ConsumerInstaService>
    )
  } 
};

export default withInstaService;