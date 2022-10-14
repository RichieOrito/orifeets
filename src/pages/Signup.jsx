// import React, {useState} from 'react';

// import Helmet from '../components/Helmet/Helmet'
// import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// import { setDoc, doc } from 'firebase/firestore';

// import { auth } from '../firebase.config';
// import { storage } from '../firebase.config';
// import { db } from '../firebase.config';

// import { toast } from 'react-toastify';

// import '../styles/login.css';
// import { useNavigate } from 'react-router-dom';

// import { async } from '@firebase/util';

// const Signup = () => {

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [file, setFile] = useState('null');
//   const [loading,setLoading] = useState(false);

//   const navigate = useNavigate()

//   const signup =  async(e)=>{
//     e.preventDefault()
//     setLoading(true);

//     try {

//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       const user = await userCredential.user;

//       const storageRef = ref(storage, `images/${Date.now() + username}`)
//       const uploadTask = uploadBytesResumable(storageRef, file)

//       uploadTask.on((error)=>{
//         toast.error(error.message)
//       }, ()=>{

//         // update the users profile
//         getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
//         await updateProfile(user, {
//             displayName: username,
//             photoURL: downloadURL,
//           });

//           // stores user data in firestore
//           await setDoc(doc(db, "users", user.uid),{
//             uid: user.uid,
//             displayName: username,
//             email,
//             photoURL: downloadURL,
//           });
//         });
//       }
//     );

//     setLoading(false)
//     toast.success('Acount created')
//     navigate('/login')

//     } catch (error) {
//       setLoading(false)
//       toast.error('something went wrong');
//     }
//   };


//   return (
//     <Helmet title='Signup'>
//       <section>
//         <Container>
//           <Row>

//             {

//             }

//           </Row>
//         </Container>
//       </section>

//     </Helmet>
//   );
// };

// export default Signup;