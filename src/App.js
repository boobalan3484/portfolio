import { useEffect, useState } from 'react'
import Content from './Components/Content'
import Header from './Components/Header'
import Layer from './assets/avatars/Layer.svg'
import Boobalan3484 from './assets/avatars/Boobalan3484.pdf'

function App() {

  const name = "Boobalan";

  const [view, setView] = useState(false)

  const menuClicked = () => {

    setView(!view)

    const contentElement = document.getElementById('content');

    if (contentElement) {
      if (!view) {
        contentElement.classList.add('blur');
      } else {
        contentElement.classList.remove('blur');
      }
    }

  }

  // Page Scroll
  useEffect(() => {
    const handlePageScroll = () => {
      if (view) {
        // If the menu is open, prevent scrolling
        document.body.style.overflow = 'hidden';
      } else {
        // If the menu is closed, allow scrolling
        document.body.style.overflow = 'auto';
      }
    };

    // Attach the event listener
    window.addEventListener('auto', handlePageScroll());

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('auto', handlePageScroll());
    };

  }, [view]);


  // Nav Scroll
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleNavScroll = () => {
      setScrollTop(window.scrollY);
      setScrolling(window.scrollY > scrollTop);
    };

    window.addEventListener('scroll', handleNavScroll);

    return () => {
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, [scrollTop]);


  return (
    <div className="App">

      <Header
        logo={Layer}
        name={name}
        pdf={Boobalan3484}
        menuClicked={menuClicked}
        view={view}
        setView={setView}
        scrolling={scrolling}
      />

      <Content
        logo={Layer}
        name={name}
        pdf={Boobalan3484}
      />

    </div>
  );
}

export default App;