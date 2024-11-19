import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Place3x2 from "@/components/Place-3x2";
import Footer from "@/components/Place-Footer";
import PlaceHeader from "@/components/Place-Header";
import Navbar from "@/components/marketing/navbar";
import Component from "@/components/olk";

export default function Home() {
  return (
    <>
      <Navbar />
      <PlaceHeader />
      <MaxWidthWrapper>
      <Component />
      <Place3x2 />
      <Footer />
      </MaxWidthWrapper>
    </>
  );
}
