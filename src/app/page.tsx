import React from 'react';
// Import các component

 // (File bạn đã làm ở bước trước)
import About from './component/About/About';
import Hero from './component/Hero/Hero';
import StatsSection from './component/Stats/StatsSection';
import HomeSections from './component/HomeSections/HomeSections';


export default function HomePage() {
  return (
    <main>
      {/* 1. Banner chính */}
      <Hero />

      {/* 2. Giới thiệu công ty */}
      <About />
      
      {/* 3. Các con số ấn tượng (Style Báo cáo tài chính) */}
      <StatsSection />
      <HomeSections />
      {/* 4. Các phần tiếp theo (Sẽ làm sau) */}
      {/* <Services /> */}
      {/* <Projects /> */}
      {/* <SanoLife /> */}
    </main>
  );
}