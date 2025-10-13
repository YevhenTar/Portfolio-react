import React, { useEffect } from 'react';
import Header from "./components/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";
import VideoBackground from "./components/VideoBackground/VideoBackground.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";


function App() {

    useEffect(() => {
        const onLoad = () => {
            document.body.classList.add('loaded_hiding');
            setTimeout(() => {
                document.body.classList.add('loaded');
                document.body.classList.remove('loaded_hiding');
            }, 600);
        };

        if (document.readyState === 'complete') {
            onLoad(); // Страница уже загружена
        } else {
            window.addEventListener('load', onLoad);
        }

        return () => {
            window.removeEventListener('load', onLoad);
        };
    }, []);

  return (
      <>
          <Loader />
          <VideoBackground src="video/Octagon - 5192.mp4" />
          <div className="content-wrap">
              <Header/>
              <MainContent/>
          </div>
      </>
  )
}

export default App
