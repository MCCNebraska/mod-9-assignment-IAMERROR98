// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <Header/>
//     </div>
//   )
// };
//<div className = {classes.footer}></div>
// export default App;
import Doggo from './pages/Doggo';
import './App.css';
import {Switch, Route, Router } from 'react-router-dom';
import NotFound from './pages/Notfound';
import Admin from './admin/admin';
import { makeStyles } from '@material-ui/core';
//import { useSyncExternalStore } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/footer'
import ViewDog from './pages/viewDog';


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
    //position: 'fixed',
    //left: 0,
    //bottom: 0,
    //color: white,
    //display: "flex",
    textAlign: 'center',
    //justifyContent: 'center',
    padding: theme.spacing(3)
    
  }
}));

function App() {

  const classes = useStyles();

  return (
    //footer looks wrong fix later
    <div className= {classes.container}>
      <main className={classes.content}>
        <BrowserRouter>
          <Switch>
            <Route exact from="/" render={props => <Doggo {...props}/>} />
            <Route path="*" render={props => <NotFound {...props}/>}/>
            <Route exact from = "/admin" render={props => <Admin {...props}/>}/>
            <Route exact from ="/view/:id" render={props => <ViewDog {...props}/>}/>
          </Switch>
        </BrowserRouter>
        <div className={classes.footer}>
        <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;

