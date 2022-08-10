import React, { useState } from 'react';
import './MobileNav.module.css';
import styles from './MobileNav.module.css';
import data from '../NavigationData';
import logo from '../Img/LBC LogoM.png';
import Hamburger from 'hamburger-react';
import Backdrop from '../Backdrop/Backdrop';

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
  const [currentTitle, setCurrentTitle] = useState('personal');
  let menu;

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
    if (openTitle !== -1) {
      menu = (
        <div className={styles['dropdown-content']}>
          <Backdrop />
          <div className={styles['title']}>{currentTitle}</div>
          <button
            className={styles['back-button']}
            onClick={() => {
              setOpenTitle(-1);
            }}
          >
            Back to Main Menu
          </button>
          
          {data.navData[openTitle].headerObj.map((index) => {
            return (
              <ul className={styles['dropdown-ul']}>
                <li>
                  <a>
                    <b>{index.title}</b>
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
          })}
          {data.navData[openTitle].featureProduct.map((index) => {
            return (
              <div className={styles['product-feature']}>
                <div className={styles['product-name']}> {index.name}</div>
                <p className={styles['product-subtitle']}>{index.subtitle}</p>
                <p className={styles['product-paragraph']}>
                  {index.description}
                </p>
                <button className={styles['product-button']}>
                  {index.action}
                </button>
                <button className={styles['product-link']}>{index.link}</button>
              </div>
            );
          })}
        </div>
      );
    } else {
      menu = (
        <div className='menuID'>
          <Backdrop />
          
          <ul className={styles['item-container']}>
          <div className={styles['title']}>Personal</div>
            {data.navData.map((data: Items) => {
              return (
                <>
                  <div className={styles['dropdown']}>
                    <>
                      <button
                        onClick={() => {
                          handleTitle(data.id);
                          setOpenMenu(!openMenu);
                          setCurrentTitle(data.title)
                        }}
                        value={data.title}
                      >
                        {data.title}
                        
                      </button>
                    </>
                  </div>
                </>
              );
            })}
            <div className={styles['go-to']}>
              <h5>Go To</h5>
              <button className={styles['goto-button']}>Business</button> <br />
              <button className={styles['goto-button']}>About Us</button>
            </div>
            <div>
              <div className={styles['public-buttons']}>
                <p className={styles['public-title']}>Language</p>
                <select className={styles['public-select']}>
                  {data.publicData.map((item) => {
                    return (
                      <>
                        {item.language.map((items) => {
                          return (
                            <option className={styles['public-list']}>
                              <li>{items}</li>
                            </option>
                          );
                        })}
                      </>
                    );
                  })}
                </select>
              </div>
              <div className={styles['public-buttons']}>
                <p className={styles['public-title']}>Region</p>
                <select className={styles['public-select']}>
                  {data.publicData.map((item) => {
                    return (
                      <>
                        {item.region.map((items) => {
                          return (
                            <>
                              <option className={styles['public-list']}>
                                <li>{items}</li>
                              </option>
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
          </ul>
        </div>
      );
    }
  }

  return (
    <nav>
      <div className={styles['Logo']}>
        <img alt='logo' src={logo} />

        <Hamburger
          direction='right'
          onToggle={() => {
            setShowMenu(!showMenu);
            setOpenTitle(-1);
          }}
        />
      </div>
      <div className={styles['sidebar']}>{menu}</div>
    </nav>
  );
};
export default MobileNav;
