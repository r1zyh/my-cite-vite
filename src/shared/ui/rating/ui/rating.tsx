import { Rating } from '@mui/material';

type TCustomRating = {
  size: string;
  precision: number;
  value: number;
};

export const CustomRating = ({ size, precision, value }: TCustomRating): JSX.Element => {
  return (
    <Rating
      sx={{ fontSize: size }}
      name="simple-readonly"
      size="large"
      readOnly
      precision={precision}
      value={value}
    />
  );
};
