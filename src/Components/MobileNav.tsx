import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './MobileNav.module.css';
import styles from './MobileNav.module.css';
import data from './NavigationData';

interface Items {
  id: number;
  title: string;
  href: string;
  headerObj: { title: string; items: string[] }[];
}
const MobileNav: React.FC<{}> = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  let menu;
  let drop;
  if (openMenu) {
    drop = (
      <>
        {data.navData.map((data: Items) => {
          return (
            <div className={styles['dropdown-content']}>
              {data.headerObj.map((index) => {
                return (
                  <ul className={styles['dropdown-ul']}>
                    <li>
                      <a>
                        <b>{index.title}</b>
                      </a>
                    </li>
                    {index.items.map((item) => {
                      return (
                        <li>
                          <a>{item}</a>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
  if (showMenu) {
    menu = (
      <div>
        <ul className={styles['item-container']}>
          {data.navData.map((data: Items) => {
            return (
              <div className={styles['dropdown']}>
                <>
                  <button onClick={() => setOpenMenu(!openMenu)}>
                    {data.title}
                  </button>
                </>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <nav>
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
