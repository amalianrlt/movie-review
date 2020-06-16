// import React, { useState} from "react";
// import { useDispatch } from 'react-redux'
// import login from '../store/actions/auth'
// import LOGIN_SUCCESS from '../store/actions'

// const LoginForm = () => {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const dispatch = useDispatch()

//   const onChangeEmail = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onChangePassword = (e) => {
//     setUser({
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault()
//     console.log("tes")
//     const userData ={
//       email: "cobacoba@mail.com",
//       password: "cobaterusajaaa"
//     }
//     dispatch(login(userData))
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           type="email"
//           value={user.email}
//           name="email"
//           placeholder="name"
//           onChange={onChangeEmail}
//         />
//         <input
//           type="password"
//           value={user.password}
//           name="password"
//           placeholder="password"
//           onChange={onChangePassword}
//         />
//         <button>login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
