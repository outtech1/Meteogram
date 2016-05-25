import React from 'react';
import '../imports/startup/accounts-config.js';

export const MainLayout = ({navbar, content, footer}) => (
  <div className="container">
      {navbar}
      {content}
      {footer}
  </div>
);
