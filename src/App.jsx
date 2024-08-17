import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import headphone from './assets/Hero/headphone.png'
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css"


const BannerData = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "18 Aug to 25 Aug",
  image: headphone,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Don't miss this exiting offers",
  bgColor: "#f42c37"
}


const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "18 Aug to 25 Aug",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Don't miss this exiting offers",
  bgColor: "#2dcc6f"
}

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);

  return <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Category />
    <Category2 />
    <Services />

    <Banner data={BannerData} />
    <Products />
    <Banner data={BannerData2} />
    <Footer />
    <Popup orderPopup={orderPopup}
    handleOrderPopup={handleOrderPopup} />
  </div>;
};

export default App