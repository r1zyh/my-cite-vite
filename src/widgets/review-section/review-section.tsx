import { ReviewForm } from '@/features/review-form/ui';
import { ReviewList } from './ui/review-list';
import { ReviewSectionWrapper } from './ui/review-section-wrapper';

export const ReviewSection = (): JSX.Element => {
  return (
    <ReviewSectionWrapper>
      <ReviewList />
      <ReviewForm />
    </ReviewSectionWrapper>
  );
};
