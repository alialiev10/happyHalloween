import React from 'react';
import dateUtil from "../../utils/date.util";
import styles from '../timer-component/timer.module.scss'

const Timer = ({date}) => {
  let formattedDate = Object.entries(dateUtil.formatToDHMS(date));
  return (
    <>
      {
        formattedDate.map(([key, value], index) => {
          return (
            <div className={styles['timer-wrap']}>
              <div className={styles['timer-element']}>
                <div className={styles['timer-item']}>
                  <div className={styles['timer-value']}>
                    {value}
                  </div>
                  <div className={styles['timer-key']}>
                    {key}
                  </div>
                </div>
              </div>
              {index !== formattedDate.length - 1 ? <div className={styles.colon}>:</div> : null}
            </div>
          )
        })
      }
    </>
  );
};

export default Timer;
