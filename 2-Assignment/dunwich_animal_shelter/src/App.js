
// export default App;
import Doggo from './pages/Doggo';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import NotFound from './pages/Notfound';
import Admin from './admin/admin';
import { makeStyles } from '@material-ui/core';
//import { useSyncExternalStore } from 'react';
//import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/footer'
import ViewDog from './pages/viewDog';
import {BrowserRouter as Router } from "react-router-dom";
import AddDog from './pages/addDog';


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${200}px)`,
    height: theme.spacing(10),
    marginLeft: '{drawerWidth}px',
  },
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
    height: '90vh'
  },

  footer: {
    position: "absolute",
    width: '100%',
    textAlign: 'center',
    padding: theme.spacing(3)
    
  }
}));

function App() {

  const classes = useStyles();

  return (
    //footer looks wrong fix later
    <div className= {classes.container}>
      <main className={classes.content}>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Doggo {...props}/>} />
            <Route exact path = "/admin" render={props => <Admin {...props}/>}/>
            <Route exact path = "/view/:id" render={props => <ViewDog {...props}/>}/>
            <Route exact path = "/adddog/add" render={props => <AddDog {...props}/>}/>
            <Route exact path = "/adddog/edit/:id" render={props => <AddDog {...props}/>}/>
            <Route render={props => <NotFound {...props}/>}/>
          </Switch>
        </Router>
        <div className={classes.footer}>
        <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;

