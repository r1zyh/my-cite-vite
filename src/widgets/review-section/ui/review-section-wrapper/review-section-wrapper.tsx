import { ReactNode } from 'react';
import styles from './review-section-wrapper.module.scss';
import reviews from '@/shared/data/mock-review.json';

type TReviewSectionWrapperProps = {
  children: ReactNode;
};

export const ReviewSectionWrapper = ({ children }: TReviewSectionWrapperProps): JSX.Element => {
  const reviewCount = reviews.length;
  return (
    <div className={styles.review__section}>
      <h2 className={styles.title}>Reviews: {reviewCount}</h2>
      {children}
    </div>
  );
};
