import React from 'react';
import styles from '../button-component/button.module.scss'

const Button = ({children, action}) => {
  return (
    <>
          <button
            onClick={() => action()}
            className={styles['btn']}>
            { children }
          </button>
    </>
  );
};

export default Button;
