import React from 'react';

// import { Container } from './styles';

export default function Repository({ match }) {
  return (
    <>
      <div>Repository {decodeURIComponent(match.params.repository)}</div>
    </>
  );
}
