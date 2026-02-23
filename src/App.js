
import './App.css';
import Mynav from './components/Mynav/Mynav';
import Myheader from './components/Myheader/Myheader';
import Mycard from './components/Mycard/Mycard';
import Mymain from './components/Mymain/Mymain';
import Mylayout from './components/Mylayout/Mylayout';
import Myfooter from './components/Myfooter/Myfooter';
import Mysidebar from './components/Mysidebar/Mysidebar';

      const navItems = [
        { label: "Домой", href: "#" },
        { label: "Компоненты", href: "#components" },
        { label: "Контакты", href: "#contacts" }
      ];

      const sidebarLinks = [
        { label: "Документация", href: "#docs" },
        { label: "Быстрый старт", href: "#start" },
        { label: "О проекте", href: "#about" }
      ];

function App() {
      return (
        <>
          <Myheader version="v1.0" subtitle="Макет страницы на React (JSX)" />
          <Mynav items={navItems} />
          <div className="layout">
            <Mymain />
            <Mysidebar sections={sidebarLinks} />
          </div>
          <Myfooter />
        </>
      );
    };

export default App;
