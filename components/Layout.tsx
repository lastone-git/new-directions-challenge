import CookiesDisclaimer from "./CookiesDisclaimer";

interface LayoutProps {
    children: React.ReactNode;
}
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>
        <main>{children}</main>
        <CookiesDisclaimer />
    </>
}

export default Layout;