import React from 'react';

import './root.scss';

const RootComponent = (): JSX.Element => {
  return (
    <div>
      <h1 className="root_title">
        Root component <br />
        <span>and some span text</span>
      </h1>
    </div>
  );
};

export { RootComponent };
