import React from 'react';
import styles from './Navigation.module.css';
import logo from './Img/LBC Logo.png';
import data from './NavigationData';

interface Items {
  id: number;
  title: string;
  href: string;
  headerObj: { title: string; items: string[] }[];
}

const Navigation: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['Logo']}>
        <img alt='logo' src={logo} />
      </div>
      <ul className={styles['item-container']}>
        {data.navData.map((data: Items) => {
          return (
            <div className={styles['dropdown']}>
              <>
                <button>{data.title}</button>
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
              </>
            </div>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
