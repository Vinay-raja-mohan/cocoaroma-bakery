"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { getCakeById } from "@/data/cakes";
import Header from "@/components/Header";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";
import SizeSelector from "@/components/SizeSelector";
import FeatureTags from "@/components/FeatureTags";

export default function CakeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const cake = getCakeById(slug);

  if (!cake) {
    return (
      <div className="mobile-container flex-col items-center justify-center" style={{ minHeight: '100vh', padding: '20px', textAlign: 'center' }}>
        <h2>Cake not found</h2>
        <button onClick={() => router.push('/')} style={{ marginTop: '20px', padding: '10px 20px', background: 'var(--highlight-pink)', color: 'white', borderRadius: '8px' }}>Return to Menu</button>
      </div>
    );
  }

  return (
    <main className="mobile-container">
      <Header />
      
      <div style={{ paddingTop: '84px', paddingBottom: '20px' }}>
        <ProductImage 
          images={cake.images} 
          altText={cake.name} 
        />
        
        <ProductInfo 
          title={cake.name} 
          rating={cake.rating} 
          reviewsCount={cake.reviewsCount} 
          isBestseller={cake.isBestseller}
          description={`Experience the rich and elegant taste of our signature ${cake.name} cake, made with premium ingredients and baked to perfection.`} 
        />
        
        <SizeSelector 
          options={cake.prices} 
        />
        
        <FeatureTags ingredients={cake.ingredients} />
      </div>
    </main>
  );
}
