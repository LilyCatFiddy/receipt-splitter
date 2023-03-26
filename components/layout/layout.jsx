import React from 'react';
import Body from './body.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';

export default function Layout({ body, footer, header }) {
  if (!body || !footer || !header) {
    throw new Error('Layout component should have valid "body", "footer", and "header" props. This error is thrown if you are missing any one of them');
  }
  return (
    <div class="mobile-layout">
      <div className="mobile-layout__header">
        <Header>{header}</Header>
      </div>
      <div className="mobile-layout__body">
        <Body>{body}</Body>
      </div>
      <div className="mobile-layout__footer">
        <Footer>{footer}</Footer>
      </div>
    </div>
  );
}