import React from 'react';
import './styles.scss';
import { firestore, auth, userIdRef } from '../../firebase/utils';
import { UpdateName } from "./UpdateName";
import { Dashboard } from "../Dashboard/index";
import firebase from 'firebase/app';

// class Admin extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             users: null,
//             showForm: false,
//             date: "",
//             newName: "",
//             newEmail: "",
//             submitted: false,
//             userId: '',
//             search: '',

//     }
// }



// componentDidMount(){
//     console.log('mounted')
//     firestore.collection('users')
//     .get()
//     .then( snapshot => {
//         const users = []
//         const userId = ''
//         snapshot.forEach( doc => {
//             const id = doc.id
//             const data = doc.data()
//             users.push(data, id)

//             console.log(id, 'indeed')
//         })
//         this.setState({users: users})
//         console.log(users, 'oioi')
//         console.log(userId, 'get the ids')
//     })
//     .catch(error => console.log(error))

// }

// removeUser = (id) => {
//     firestore.collection('users').doc(id).delete().then(() => {
//         console.log('successful')
//     })
// }

// // updateUser = (users, displayName) => {
// //     firestore.collection('users').doc(users).set({
// //         ...users, displayName
// //     });
// // }

// // onChangeName(e) {
// //     this.setState({
// //       newName: e.target.value,
// //     });
// //   }

// // saveNewData() {
// //     this.setState ({
// //         newName: this.state.newName
// //       });
// // }




// showForm = (bool) => {
//     this.setState({
//         showForm: bool
//     });
// };
    


// // onChange = e => {
// //     this.state ({ search: e.target.value});
// // };

function Users() {
    const [users, setUsers] = React.useState([]);
    
  
    React.useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("users").get();
        setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);


    
    return (
        <ul className= "mb-3 mt-5 card card-content content has-background-link-light">
          {users.map(user => (
              <div>
            <li className="list" key={user.displayName, user.email, user}>
                            <br/>
                        <UpdateName user={user} users={users} />
                        </li>
            
            </div>
          ))}
          
        </ul>
      );
    }

    



 


export default Users;