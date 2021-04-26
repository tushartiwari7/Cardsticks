import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

  const BasicButton = withStyles({
      root: {
        textTransform: 'none'
      },
    })(Button);  
export default BasicButton;