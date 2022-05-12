import Nav from './Nav.js';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
