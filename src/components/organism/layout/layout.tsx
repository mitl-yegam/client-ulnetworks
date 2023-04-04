import Header from "../header";
import Footer from "../footer";
import { Props } from "./layout.type";


const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;