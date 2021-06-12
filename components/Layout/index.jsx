import Container from "./Container";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-second font-first text-gray-200 min-h-screen">
      <Container>
        <Header />
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
