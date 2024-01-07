import { ReactNode, forwardRef } from 'react';

// material-ui
import { Fade, Box, Grow } from '@mui/material';

// ==============================|| TRANSITIONS ||============================== //

const Transitions = forwardRef(({ children, position = "top-left", type = "grow", ...others }: TransitionsProps, ref) => {
  let positionSX = {
    transformOrigin: '0 0 0'
  };

  switch (position) {
    case 'top-right':
    case 'top':
    case 'bottom-left':
    case 'bottom-right':
    case 'bottom':
    case 'top-left':
    default:
      positionSX = {
        transformOrigin: '0 0 0'
      };
      break;
  }

  return (
    <Box ref={ref}>
      {type === 'grow' && (
        <Grow {...others}>
          <Box sx={positionSX}>{children}</Box>
        </Grow>
      )}
      {type === 'fade' && (
        <Fade
          {...others}
          timeout={{
            appear: 0,
            enter: 300,
            exit: 150
          }}
        >
          <Box sx={positionSX}>{children}</Box>
        </Fade>
      )}
    </Box>
  );
});
type TransitionType = 'grow'| 'fade'| 'collapse'| 'slide' | 'zoom';
type TransitionPositionType = 'top-left'| 'top-right'| 'top'| 'bottom-left'| 'bottom-right'| 'bottom';
interface TransitionsProps 
{
  children: ReactNode;
  type?: TransitionType;
  position?: TransitionPositionType;
}
export default Transitions;
