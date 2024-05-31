import CookiesDisclaimer from "./CookiesDisclaimer";
import EmailNotification from "./EmailNotification";

interface LayoutProps {
    children: React.ReactNode;
}
  
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>
        <main>{children}</main>
        <CookiesDisclaimer />
        <EmailNotification />
    </>
}

export default Layout;