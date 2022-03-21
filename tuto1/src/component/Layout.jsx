import Footer from "./Footer";
import Header from "./Header";

//layout is de buitenste layer waarin alles zit, vandaar parameter children
//de header en footer are static, de rest dynamic
export default function Layout({children}) {
  return (
    <div>
<h1>SSSSSS</h1>
<Header />
{children}
<Footer />

    </div>
  )
}
