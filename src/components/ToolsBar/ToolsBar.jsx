import { Box } from '@mui/material';
import { wrapperStyle } from './ToolsBar.sytled';

export const ToolsBar = ({ children }) => {
  return <Box sx={wrapperStyle}>{children}</Box>;
};
