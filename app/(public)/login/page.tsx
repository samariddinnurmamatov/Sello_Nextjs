// "use client"

// import { login } from "@/redux/slice/authSlice";
// import { RootState } from "@/redux/store/store";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {
//   const { loading } = useSelector((state: RootState) => state.auth); // Specify RootState type
//   const appDispatch = useDispatch(); // Use a different variable name for the app dispatch
//   const router = useRouter();

//   const [username, setUsername] = useState<string>(""); // State for username
//   const [password, setPassword] = useState<string>(""); // State for password

//   const loginUser = async () => {
//     const userData = { username, password }; // Use the entered username and password
//     appDispatch(login({ user: userData, router: router })); // Use appDispatch to call the action
//   }

//   return (
//     <div className="container py-10">
//       <div
//         className="flex flex-col space-y-3 items-center justify-center"
//         style={{ width: "50%", margin: "auto" }}
//       >
//         <input
//           type="text"
//           placeholder="username"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={username} // Bind the value to state
//           onChange={(e) => setUsername(e.target.value)} // Update the state on change
//         />
//         <input
//           type="text"
//           placeholder="password"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={password} // Bind the value to state
//           onChange={(e) => setPassword(e.target.value)} // Update the state on change
//         />
//         <button
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           onClick={loginUser}
//           disabled={loading}
//         >
//           {loading ? "...loading" : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;



const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login;