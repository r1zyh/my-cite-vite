import { Rating } from '@mui/material';

type TCustomRating = {
  size: string;
  precision: number;
  value: number;
  readOnly?: boolean;
};

export const CustomRating = ({ size, precision, value, readOnly }: TCustomRating): JSX.Element => {
  return (
    <Rating
      sx={{
        fontSize: size,
        '& .MuiRating-iconEmpty': {
          color: 'var(--color--foreground)',
        },
      }}
      name="simple-readonly"
      size="large"
      readOnly={readOnly}
      precision={precision}
      value={value}
    />
  );
};
