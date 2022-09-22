import React from 'react';
import {loadComponent} from './loadComponent';

export function System(props) {
    const {
      system,
      system: { remote, url, module },
    } = props;
  
    if (!system || !remote || !url || !module) {
      return <h2>No system specified</h2>;
    }
  
    const Component = React.lazy(loadComponent(remote, 'default', module, url));
  
    return (
      <React.Suspense fallback="Loading System">
        <Component />
      </React.Suspense>
    );
  }