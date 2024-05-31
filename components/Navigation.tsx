import React from 'react';
import { Link } from 'react-scroll';
import useScreenDimensions from '../hooks/useScreenDimensions';
import styles from '../styles/components/navigation.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navigation: React.FC = () => {
  const [state, setState] = React.useState<boolean>(false);
  const screenWidth = useScreenDimensions(100).width;

  const renderListItems = () => (
    <ul className={`${screenWidth < 600 && state ? styles.open : ''} ${styles.navList}`}>      
      <li>
        <Link onClick={() => setState(false)} to="section1" spy={true} smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link onClick={() => setState(false)} to="section1" spy={true} smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link onClick={() => setState(false)} to="section2" spy={true} smooth={true} duration={500}>
          Careers
        </Link>
      </li>
      <li>
        <Link onClick={() => setState(false)} to="section3" spy={true} smooth={true} duration={500}>
          Services
        </Link>
      </li>
      <li>
        <Link onClick={() => setState(false)} to="section4" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <div className={styles.navigation}>
      {screenWidth < 600 && (
        <>
          <a onClick={() => setState(prev => !prev)} className={styles.trigger}>
            <AiOutlineMenu size={32} />
          </a>
          {state && (
            <a onClick={() => setState(false)} className={styles.close}>
              <AiOutlineClose size={32} />
            </a>
          )}
        </>
      )}
      {renderListItems()}
    </div>
  );
};

export default Navigation;
