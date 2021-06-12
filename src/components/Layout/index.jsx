import Container from './Container';

const Layout = ({ children }) => {
  return (
    <div>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
