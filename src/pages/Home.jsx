import { Typography, Box } from '@mui/material';
import {
  titleStyle,
  centredItemsStyles,
  typographyStyle,
  wrapperStyle,
  descriptionStyle,
} from 'shared/basicStyles';
import Icon from 'img/follow.png';

export const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          ...centredItemsStyles,
          gap: '30px',
          justifyContent: 'flex-start',
          mb: '20px',
          flexWrap: 'wrap',
        }}
      >
        <img src={Icon} alt="" width={160} height={90} />
        <Typography component="h1" sx={titleStyle}>
          UP!
        </Typography>
      </Box>

      <Box sx={wrapperStyle}>
        <Typography sx={{ ...typographyStyle, fontSize: '20px', mb: '28px' }}>
          User-friendly application, featuring a sleek design and the ability to filter by follower
          status.
        </Typography>

        <Typography fontSize={14}>
          All rights reserved &#9400; 2023{' '}
          <Typography
            component="a"
            href="https://github.com/AndriiKalinchuk"
            target="_blank"
            sx={descriptionStyle}
          >
            Andrii Kalinchuk
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
