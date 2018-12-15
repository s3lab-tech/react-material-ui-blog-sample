import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import Icon2 from '@material-ui/icons/LibraryBooks';

import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.png'


import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const myTheme = {
  palette: {
    primary: {
      main: '#388e3c',
    },
    secondary: {
      main: '#00897b',
    },
  }
}

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  headerPaper: {
    marginTop: theme.spacing.unit * 9,
    backgroundColor: myTheme.palette.primary.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 1,
  },
  headerPaperContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    padding: `${theme.spacing.unit * 1}px`,
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    height: 300,
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  searchBox: {
    width: 200,
    backgroundColor: theme.palette.common.white
  },

  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

});

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const Posts = [
  {
    title: 'Post title 1',
    date: 'Nov 12',
    description:
      'Desc1: This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: image1
  },
  {
    title: 'Post title 2',
    date: 'Nov 11',
    description:
      'Desc2: This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: image2
  },
];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

function TabContainer(props) {
  return (
    <Hidden component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Hidden>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class App extends React.Component {

  state = {
    value: 0,
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { value } = this.state;

    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <React.Fragment>
        <CssBaseline />

        <div className={classes.layout}>

          {/* Header */}
          <Paper className={classes.headerPaper}>
            <span>Paper</span>
            <Grid container>
              <Grid item xs={12}>
                <div className={classes.headerPaperContent}>
                  <Typography variant="h3" color="inherit" align="center" paragraph>
                    h3 マテリアルデザインとは
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    h5 美しいプロダクトをより速く開発するためのオープンソースデザインシステム
                  </Typography>
                  <Typography variant="subtitle" color="inherit" gutterBottom>
                    subtitle 人間の本能で使い方がパッとわかる機能デザインと同時に、美しさを兼ね備えるデザイン
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End Header */}

          {/* AppBar */}
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.root}>
                <AppBar position="fixed">
                  <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                      <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                      Material-UI
                    </Typography>
                    <div className={classes.search}>
                      <div className={classes.searchIcon}>
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                      <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                          <MailIcon />
                        </Badge>
                      </IconButton>
                      <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary">
                          <NotificationsIcon />
                        </Badge>
                      </IconButton>
                      <IconButton
                        aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleProfileMenuOpen}
                        color="inherit"
                      >
                        <AccountCircle />
                      </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                      <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                        <MoreIcon />
                      </IconButton>
                    </div>
                  </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
              </div>

            </Grid>
          </Grid>
          {/* End AppBar */}

          {/* Toolbar */}
          <Toolbar variant="dense" className={classes.toolbarSecondary}>
            {sections.map(section => (
              <Typography color="inherit" noWrap key={section}>
                {section}
              </Typography>
            ))}
          </Toolbar>
          {/* End Toolbar */}

          <main>

            {/* Other posts */}
            <Grid container spacing={10} className={classes.cardGrid}>
              {Posts.map(post => (
                <Grid item key={post.title} xs={12}>
                  <Card className={classes.card}>

                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={post.image}
                        title="Image title"
                      />
                    </Hidden>

                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          <a href="#">{post.title}</a>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          <a href="#">Continue reading...</a>
                        </Typography>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {/* End Other 1posts */}

            <Grid container spacing={40} className={classes.mainGrid}>

              {/* Main content */}
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6" gutterBottom>
                  h6 title
                </Typography>
                <Typography variant="body1" gutterBottom>
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789
                </Typography>
              </Grid>
              <Grid item xs={8}>
              </Grid>
              <Divider />
              {/* End main content */}

              <Grid item xs={2}>
              </Grid>
            </Grid>

            <Grid container spacing={40} className={classes.mainGrid}>
              <Grid item xs={1}>
              </Grid>
              <Grid item xs={3}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image3}
                    title="Image title"
                  >
                  </CardMedia>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" gutterBottom>
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
1123456789 123456789 123456789 123456789 123456789 123456789 123456789 123456789 
                </Typography>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
 
          </main>

          {/* Sidebar */}
          <Grid container spacing={40} className={classes.mainGrid}>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
          </Grid>
          {/* End sidebar */}

        </div>
        {/* Footer */}
        <footer className={classes.footer}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.sidebarAboutBox}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    
              </Typography>
            </Paper>
          </Grid> 
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );

  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
