// import { ListItem } from "@material-ui/core";
// import { SupervisorAccountRounded, QuestionAnswer, Warning } from "@material-ui/icons";
// import { useHistory } from "react-router-dom";
// import { Drawer as MUIDrawer, List, ListItemIcon, ListItemText } from '@material-ui/core';
// import { withRouter } from 'react-router-dom';

// const Drawer = props => {
//     const { history } = props;

//     const itemList = [
//         {
//             text: 'Admin',
//             icon: <SupervisorAccountRounded />,
//             OnClick: () => history.push('/admin')
//         },
//         {
//             text: 'CDC Guidlines',
//             icon: <Warning />
//         },
//         {
//             text: 'Abò̷̻̘̯͓̦̓̆̔̿̿̓͜͠ͅų̴̧̛͉͙̦̼͈̜̄̊̈́̆̀̕͘ẗ̶͓͓̙̤̭͎̹͙́̔̇̿͑͝',
            
//             icon: <QuestionAnswer/>
//         },
//         {
//             text: 'h̵̢̛͍̥̣͙̮̯̥̳̹̱͈̟̲̥̠̎͌̑̌̀̍̋̄͜͜ͅe̷̬̭̖̪̱̼̙͖͈̩̋͒̓̉̓̄̈́̕͜l̴̨̧̧͔̙̜̙̳̩̟͙̟̤͚̪̽̽̓̊͛̈̔̽͑̈́̈́̚͝ͅp̵̨̨͍̬͎̞̭̰͖͔͆̎͂̍͛͒̋͋̆͋̎̚̚͝'
//         }
//     ];

//     return (
//         <MUIDrawer
//             //className={}
//             variant='temporary'
//             anchor='left'
//         >
//             <List>
//                 {itemList.map((item, index) => {
//                     const { text, icon, onClick} = item;
//                     return (
//                     <ListItem button key={text} onClick={onClick}>
//                         { icon && <ListItemIcon>{icon}</ListItemIcon> }
//                         <ListItemText primary={text}/>

//                     </ListItem>
//                     );
//                 })}
//             </List>
//         </MUIDrawer>
//     )
// };

// export default  withRouter(Drawer)