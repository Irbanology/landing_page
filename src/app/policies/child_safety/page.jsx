import ChildSafetyPolicy from "@/app/components/policies/ChildSafetyPolicy";
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer";

export default function Page() {
    return <>
        <Header />
        <ChildSafetyPolicy />
        <Footer />
    </>
}