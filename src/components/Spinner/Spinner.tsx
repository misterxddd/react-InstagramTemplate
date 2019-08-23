import React from 'react';

import './Spinner.css';

type SpinnerProps = {
  min?: boolean;
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const cls = [
    'spinner',
    props.min ? 'min' : ''
  ]
  return (
    <div className={cls.join(' ')}>
      <div className="lds-css ng-scope">
        <div className="lds-spin">
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;