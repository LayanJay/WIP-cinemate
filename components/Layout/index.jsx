import Container from "./Container";
import Header from "./Header";
import BottomNav from "./BottomNav";

const Layout = ({ children }) => {
  return (
    <div className="bg-second font-first text-gray-200 min-h-screen py-4">
      <Container>
        <Header />
        <BottomNav />
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
