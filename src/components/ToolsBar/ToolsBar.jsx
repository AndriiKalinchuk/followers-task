import { Box } from '@mui/material';
import { wrapperStyle } from './toolsBarStyles';

export const ToolsBar = ({ children }) => {
  return <Box sx={wrapperStyle}>{children}</Box>;
};
