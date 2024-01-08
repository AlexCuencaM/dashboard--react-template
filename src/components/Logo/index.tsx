import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';
import { useDispatch } from 'react-redux';

// project import
import Logo from './Logo';
import config from 'config';
import { activeItem } from 'store/reducers/menu';
import { useAppSelector } from 'hooks/useState';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }: LogoSectionProps) => {
  const { defaultId } = useAppSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      <Logo />
    </ButtonBase>
  );
};

interface LogoSectionProps {
  sx: any;
  to: string;
}

export default LogoSection;
