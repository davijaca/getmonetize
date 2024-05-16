import React from 'react';

import styles from './SubscribeNews.module.css';
import { useHandleSubscriptionNewsletter } from '../../common/useHandleSubscriptionNewsletter';
import Button from '../../components/Button/Button';

const SubscribeNews = () => {
  //Subscription logic extracted from SubscribeNews component and saved on a custom hook at the folder 'common'
  const { handleInputChange, inputValue, submit, message } =
    useHandleSubscriptionNewsletter();

  return (
    <div className={styles.subscribeNews_wrapper}>
      <div className={styles.subscribeNews}>
        <div className={styles.subscribeNews_content}>
          <h2 className={styles.subscribeNews_stayUpDate_subtitle}>
            Stay up to date
          </h2>
          <h1 className={styles.subscribeNews_h1}>Join Our Newsletter</h1>
          <form onSubmit={submit} className={styles.subscribeNews_form}>
            <input
              type="email"
              placeholder="Enter your email.."
              className={styles.subscribeNews_input}
              onChange={handleInputChange}
              value={inputValue}
            />
            <div className={styles.buttonPlusUnsubscribeInfo_wrapper}>
              <span className={styles.info_only_mobile}>
                *You can unsubscribe anytime
              </span>
              <Button text="SUBSCRIBE" type="submit" />
            </div>
          </form>
        </div>
        <div className={styles.subscribeInfos_wrapper}>
          <span className={styles.subscribeInfo}>
            <p className={styles.subscribe_message}>{message}</p>
            <span className={styles.info_only_desktop}>
              *You can unsubscribe anytime
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
