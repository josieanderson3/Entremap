import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function PrivacyModal(props) {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const { isLoggedIn } = props;
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    setOpen(false);
    if (isLoggedIn) {
      history.push('/profile');
    } else {
      history.push('/login');
    }
  };

  const handleChange = (e) => {
    setChecked(!checked);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleClickOpen}
      >
        Begin
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">PRIVACY POLICY</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your privacy is important to us. It is The Practice Modern
            Dentistry’s policy to respect your privacy regarding any information
            we may collect from you across our website,
            https://thepracticedental.com.au, and other sites we own and
            operate. We only ask for personal information when we truly need it
            to provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used. We only retain collected
            information for as long as necessary to provide you with your
            requested service. What data we store, we’ll protect within
            commercially acceptable means to prevent loss and theft, as well as
            unauthorised access, disclosure, copying, use or modification. We
            don’t share any personally identifying information publicly or with
            third-parties, except when required to by law. Our website may link
            to external sites that are not operated by us. Please be aware that
            we have no control over the content and practices of these sites,
            and cannot accept responsibility or liability for their respective
            privacy policies. You are free to refuse our request for your
            personal information, with the understanding that we may be unable
            to provide you with some of your desired services. Your continued
            use of our website will be regarded as acceptance of our practices
            around privacy and personal information. If you have any questions
            about how we handle user data and personal information, feel free to
            contact us.
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'space-between' }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I have read and understood"
            onChange={handleChange}
          />

          <Button
            onClick={handleAgree}
            autoFocus
            color="primary"
            variant="contained"
            disabled={!checked}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
