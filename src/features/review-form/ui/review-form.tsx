import { Box, TextField, Typography } from '@mui/material';
import styles from './review-form.module.scss';
import { CustomRating } from '@/shared/ui/rating/ui';

export const ReviewForm = (): JSX.Element => {
  return (
    <Box className={styles.reviewFormContainer}>
      <Typography sx={{ fontWeight: 'bold' }}>Your Review</Typography>
      <CustomRating size="35px" precision={1} value={0} />

      <TextField
        className={styles.reviewTextField}
        placeholder="Tell us about your game experience"
        multiline
        minRows={3}
        maxRows={5}
        margin="normal"
        type="text"
        fullWidth
      />
      <Box className={styles.reviewFooter}>
        <p className={styles.reviewsHelp}>
          To submit review please make sure to set <span className={styles.reviewsStar}>⭐</span>
          rating and describe your stay with at least
          <b className={styles.reviewsTextAmount}> 50 characters</b>.
        </p>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </Box>
    </Box>
  );
};
