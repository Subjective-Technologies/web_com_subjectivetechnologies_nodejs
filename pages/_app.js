// pages/_app.js
import '../public/styles/global.css'; // Adjust the path according to your file structure
import '../public/styles/gui.css'; 
import '../public/styles/overlay.css'; 

function GoldenThinkerWeb({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default GoldenThinkerWeb;
