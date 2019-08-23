import React from 'react';

import './Row.css';

type RowProps = {
  leftNode: React.ReactNode;
  rightNode: React.ReactNode;
}

const Row: React.FC<RowProps> = ({leftNode, rightNode}) => {
  return (
    <div className="row mb2">
      <div className="col-md-9 left">
        {leftNode}
      </div>
      <div className="col-md-3 right">
        {rightNode}
      </div>
    </div>
  );
};

export default Row;