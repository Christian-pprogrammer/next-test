import CollectionsSlider from "@/components/CollectionsSlider/CollectionsSlider";
import MobileBottomNavbar from "@/components/MobileBottomNavbar/MobileBottomNavbar";
import MobileNavbar from "@/components/MobileNavbar/MobileNavbar";
import Navbar from "@/components/Navbar/Navbar";
import ShortCut from "@/components/ShortCut/ShortCut";
import Slider from "@/components/Slider/Slider";
import { fetchCollections, fetchMainBannerData, fetchMainShortcutData } from "@/services/api";
import { chunkArray } from "@/services/utils";
import Image from "next/image";

export default async function Home() {
  
  const bannerData = await fetchMainBannerData();
  const shortCutData = await fetchMainShortcutData();
  const {filteredCollections, otherCollections} = await fetchCollections();

  let chunks = chunkArray(otherCollections, 7);

  
  return (
    <>
    <Navbar />
    <MobileNavbar />
    <Slider bannerData={bannerData} />
    <ShortCut shortCutData={shortCutData} />
    <CollectionsSlider 
      title="HOT DEAL"
      semiTitle="HOT DEAL"
      collections={chunks[0]}
    />
    <CollectionsSlider 
      title="저렴한 가격과 보장된 성능, 더함 TV"
      semiTitle="사은품 증정이벤트"
      collections={chunks[1]}
    />
    <CollectionsSlider 
      title="판매량 TOP7 가성비 인기가전 모음"
      semiTitle="가격,성능,디자인까지"
      collections={chunks[2]}
    />
    <div style={{
      maxWidth: '420px',
      margin: 'auto'
    }}>
      <MobileBottomNavbar />
    </div>
    
    {/* <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} />
    <CollectionsSlider collections={otherCollections} /> */}
    </>
  );
}
