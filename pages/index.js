import { getText } from '../utils/getText.js';
console.log('Loading investor.js');
import dynamic from 'next/dynamic';
import React from 'react';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const StaticLandingComponent = dynamic(() => import('../components/StaticLandingComponent'), {
  ssr: false
});
const StaticLanding = () => {
  console.log('Rendering Investors');
  console.log('Returning from Investors');
  return <div className={getText("index.js_9_Y29udG")}>
            <div className={getText("index.js_14_bWVudV")}>
                <Menu />
            </div>
            <div className={getText("index.js_17_Y29udG")}>
                <StaticLandingComponent />
            </div>
            <div className={getText("index.js_16_Zm9vdG")}>
                <Footer />
            </div>
        </div>;
};
export default StaticLanding;

// console.log('Loading index.js');
// import dynamic from 'next/dynamic';
// import React from 'react';
// import Menu from '../components/Menu';

// const GoldenThinkerAnimation = dynamic(() => import('../components/GoldenThinkerAnimation'), {
//   ssr: false,
// });

// const Home = () => {
// console.log('Rendering Home');
// console.log('Returning from Home');
//   return (
//     <div className="container">
//       <div className="menu_container">
//         <Menu />
//       </div>
//       <div className="animation_container">
//         <GoldenThinkerAnimation />
//       </div>
//     </div>
//   );
// };

// export default Home;