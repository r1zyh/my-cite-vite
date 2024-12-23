import { ReactNode } from 'react';
import styles from './review-section-wrapper.module.scss';

type TReviewSectionWrapperProps = {
  children: ReactNode;
};

export const ReviewSectionWrapper = ({ children }: TReviewSectionWrapperProps): JSX.Element => {
  return (
    <div className={styles.review__section}>
      <h2 className={styles.title}>Reviews: 3</h2>
      {children}
    </div>
  );
};
