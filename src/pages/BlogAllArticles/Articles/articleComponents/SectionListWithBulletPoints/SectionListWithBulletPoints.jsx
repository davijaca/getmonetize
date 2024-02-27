import React from 'react';

import styles from './SectionListWithBulletPoints.module.css';

const SectionListWithBulletPoints = ({ title, body, subSections }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.introWrapper}>
        <h2>{title}</h2>
        {body && <p>{body}</p>}
      </div>

      <ul className={styles.subSectionItems}>
        {subSections.map((subSectionItem) => {
          return (
            <li>
              <section className={styles.subSectionItem}>
                <h3 className={styles.subSectionItem__title}>
                  {subSectionItem.title}
                </h3>

                <span>
                  <span className={styles.subSectionItem__body__firstLetter}>
                    {subSectionItem.body[0]}
                  </span>
                  <span>
                    {subSectionItem.body.substring(
                      1,
                      subSectionItem.body.length
                    )}
                  </span>
                </span>
              </section>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionListWithBulletPoints;
