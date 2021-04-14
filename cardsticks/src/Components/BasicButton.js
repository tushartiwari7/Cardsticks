import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const SimpleButton = withStyles({
    root: {
      textTransform: 'none'
    },
  })(Button);
  
export default SimpleButton;