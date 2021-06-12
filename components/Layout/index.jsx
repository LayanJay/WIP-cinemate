import Container from "./Container";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
