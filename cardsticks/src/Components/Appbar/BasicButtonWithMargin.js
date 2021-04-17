import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

  const BasicButtonWithMargin = withStyles({
      root: {
        textTransform: 'none',
        margin: '8px 20px'
      },
    })(Button);  
  
export default BasicButtonWithMargin;