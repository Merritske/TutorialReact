


//Header -static
//webpage contains dynamic part
//footer -static

//is vervangen door Browserrouter en Routes en Route
//Header en Footer zijn wel in de Browserrouter gebruikt

import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
    return (
   <>
   <Header />
   {children}
   <Footer />
   </>
    )
}
