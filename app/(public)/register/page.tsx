// "use client"
// // Registration.js

// import { register } from "@/redux/slice/authSlice";
// import { RootState } from "@/redux/store/store";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// interface RegistrationData {
//   firstName: string;
//   lastName: string;
//   username: string;
//   phoneNumber: string;
//   password: string;
//   router: any;
// }


// const Registration = () => {
//   const { loading } = useSelector((state: RootState) => state.auth);
//   const appDispatch = useDispatch();
//   const router = useRouter();

//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [username, setUsername] = useState<string>("");
//   const [phoneNumber, setPhoneNumber] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   const registerUser = async () => {
//     try {
//       const registrationData = {
//         firstName,
//         lastName,
//         username,
//         phoneNumber,
//         password,
//         router,
//       } as RegistrationData;

//       await appDispatch(register(registrationData));

//     } catch (error) {
//       // Handle registration error (e.g., display an error message)
//       console.error("Registration failed:", error);
//     }
//   };

//   return (
//     <div className="container py-10">
//       <div
//         className="flex flex-col space-y-3 items-center justify-center"
//         style={{ width: "50%", margin: "auto" }}
//       >
//         <input
//           type="text"
//           placeholder="First Name"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Last Name"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Username"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="border border-gray-300 py-2 px-2"
//           style={{ width: "100%", borderRadius: "4px" }}
//           onClick={registerUser}
//           disabled={loading}
//         >
//           {loading ? "...loading" : "Register"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Registration;


const Registration = () => {
  return (
    <div>Registration</div>
  )
}

export default Registration