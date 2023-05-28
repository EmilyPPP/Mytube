import React from 'react';
import QuotaExceeded from './QuotaExceeded';

export default function Error({ errorReason }) {
  const getErrorComponent = () => {
    switch (errorReason) {
      case 'quotaExceeded':
        return <QuotaExceeded />;
      default:
        return <p>Error</p>;
    }
  };

  return <>{getErrorComponent()}</>;
}
