import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './MobileNav.module.css';
import styles from './MobileNav.module.css';
import data from './NavigationData';
import logo from './Img/LBC LogoM.png'


interface Items {
  id: number;
  title: string;
  key: number;
  href: string;
  headerObj: { title: string; items: string[] }[];
}
const MobileNav: React.FC<{}> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openTitle, setOpenTitle] = useState<number>(-1);

  let menu;
  let drop;

  function handleTitle(titleIndex: number): void {
    if (openTitle === -1) {
      setOpenTitle(titleIndex);
    } else {
      if (openTitle === titleIndex) {
        setOpenTitle(-1);
      } else {
        setOpenTitle(titleIndex);
      }
    }
  }

 
  if (showMenu) {
    menu = (
      <div className='menuID'>

        <ul className={styles['item-container']}>
          {data.navData.map((data: Items) => {
            return (
              <>
              <div className={styles['dropdown']}>
                <>
                  <button
                    onClick={() => {
                      handleTitle(data.id);
                      setOpenMenu(!openMenu);
                    }}
                  >
                    {data.title}
                  </button>
                  <div className={styles['dropdown-content']}>
              {openTitle === data.id
                ? data.headerObj.map((index) => {
                    return (
                      <ul className={styles['dropdown-ul']}>
                        <li>
                          <a>
                            <b >{index.title}</b>
                          </a>
                        </li>

                        {index.items.map((item) => {
                          return (
                            <li className={styles['dropdown-li']}>
                              <a>{item}</a>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  })
                : ''}
            </div>
                </>
              </div>
              </>);
          })}
        </ul>
      </div>
    );
  }

  return (
    <nav>
      <div className={styles['Logo']}>
          <img alt='logo' src={logo} />
        </div>
      <span>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {menu}
      {drop}
    </nav>
  );
};
export default MobileNav;
