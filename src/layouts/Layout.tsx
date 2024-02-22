import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

interface Props {
  children: any;
  onSearch: (query: string) => void;
}

export default function Layout({ children, onSearch }: Props) {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar onSearch={onSearch} />
        <div className="flex-1">{children}</div>
      </div>

      <Footer />
    </div>
  );
}
