import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button 
      style={{ background: '#ff6f00', color: '#fff', fontWeight: "700"}} 
      onClick={handleClickOpen('paper')}>
          About Me</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title"
        style={{ background: '#545454', color: '#fff'}}
        >About Me</DialogTitle>
        <DialogContent 
        style={{ background: '#242526', color: '#fff'}}
        dividers={scroll === 'paper'}>
          <DialogContentText
            style={{ background: '#242526', color: '#fff'}}
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => `I am a PC Gamer, Forex Trader and Associate Director for WSS PropTech division. I come from a town just outside Belfast and moved to London over 10 years ago with £900 in my pocket and haven’t looked back. 
                      My only skillset was that I was good with computers so I got a Job for Fujitsu and BT and then fell intro Tech Recruitment and for the last 7 years I have been trying to help and change people’s careers for the better. Incoming cheesy line - I look to give one act of random kindness a day and I belive that this leads to different opportunities.`
                )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ background: '#242526', color: '#fff'}}>
            <a href={`mailto:aaronhawthorne12345@gmail.com`} target="_blank" rel="noopener noreferrer">
            <Button onClick={handleClose} style={{ color: '#ff6f00' }}>
                <EmailIcon />
          </Button></a>
          <a href='https://www.linkedin.com/in/aaronhawthorneproptech/' target="_blank" rel="noopener noreferrer">
          <Button onClick={handleClose} style={{ color: '#ff6f00' }}>
            <LinkedInIcon />
          </Button></a>
          <a href='https://github.com/Awthor' target="_blank" rel="noopener noreferrer">
          <Button onClick={handleClose} style={{ color: '#ff6f00' }}>
            <GitHubIcon />
          </Button></a>
          <a href='https://www.instagram.com/aaronhawthorne_/' target="_blank" rel="noopener noreferrer">  
          <Button onClick={handleClose} style={{ color: '#ff6f00' }}>
            <InstagramIcon />
          </Button></a>
        </DialogActions>
      </Dialog>
    </div>
  );
}