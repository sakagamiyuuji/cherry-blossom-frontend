import React from 'react';
import Banner from '../components/Banner';
import bannerImage from '../assets/images/banner.png';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import listProduct from '../data/products';
import FollowUsSection from '../components/FollowUsSection';
import followUsDummy from '../data/followusdummy';

const HomePage = () => {
  // For demonstration, you can filter the products for each section
  const newArrivals = listProduct.slice(0, 10); // First 10 products
  const bestSellers = listProduct.slice(0, 12); // Next 10 products

  return (
    <div>
      <Banner
        image={bannerImage}
        title="Discover Your Inner Beauty"
        subtitle="Great gifts for yourself and loved ones"
        buttonText="Shop Now"
      />

      <ProductSection
        title="NEW ARRIVALS"
        subtitle="See All"
        products={newArrivals}
      />

      <ProductSection
        title="BEST SELLER"
        subtitle="Top rated products"
        products={bestSellers}
      />

      <ProductSection
        title="FLASH SALE"
        subtitle="Ayo buruan beli sekarang"
        products={bestSellers}
      />

      <FollowUsSection
        images={followUsDummy}
        title="SHARE HOW YOU BLOSSOMED WITH"
        hashtag="#BLOOMBEAUTY"
        buttonText="Follow Us"
      />

      <Footer />
    </div>
  );
};

export default HomePage;
