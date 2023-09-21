// "use client"

// import React, { Fragment, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/redux/store/store";
// import profil from "@/assets/profil.png";
// import Image from "next/image";
// import { deleteCookie } from "cookies-next";
// import { useRouter } from "next/navigation";
// import { request } from "@/server/request";
// import { logout, setUser } from "@/redux/slice/authSlice";

// const Account = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state: RootState) => state.auth.user);
//   const router = useRouter();

//   const handleLogout = () => {
//     deleteCookie("token");
//     dispatch(logout());
//     router.push("/");
//   };

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     username: "",
//     phoneNumber: "",
//   });

//   const fetchUserData = async () => {
//     try {
//       const response = await request.get("/auth/me");
//       const userData = response.data;
//       setFormData(userData);
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };
//   useEffect(() => {

//     fetchUserData();
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const updatedData = {
//         firstName: formData.firstName,
//         lastName: formData.lastName,
//         username: formData.username,
//         phoneNumber: formData.phoneNumber,
//       };

//       const response = await request.post("/auth/update", updatedData);
//       dispatch(setUser(response.data));
//       fetchUserData();
//     } catch (error) {
//       console.error("Error updating user data:", error);
//     }
//   };

//   return (
//     <div className="container">
//       {user ? (
//         <div className="flex space-x-4">
//           <div className="border border-solid border-stroke rounded-[20px] p-[16px] w-[30%]">
//             <div className="bg-gray-100 rounded-[50px] p-5 w-20">
//               <Image src={profil} alt={"Profil rasmi"} width={40} height={50} />
//             </div>
//             <div className="flex flex-col gap-[6px] py-3">
//               <h2 className="font-[700] text-[18px]">
//                 {user.firstName} <br /> {user.lastName}
//               </h2>
//               <br />
//               <p className="text-gray-600">{user.phoneNumber}</p>
//             </div>
//           </div>
//           <div className="border border-solid border-stroke rounded-[20px] p-[16px] w-[100%]">
//             <h2 className="font-[600] text-[23px]">Личный кабинет</h2>
//             <div className="flex space-x-3 py-3">
//               <div style={{ width: "100%" }}>
//                 <div className="py-3">
//                   <p>firstName *</p>
//                   <input
//                     type="text"
//                     className="border border-solid !border-stroke rounded-[7px] p-1"
//                     style={{ width: "100%" }}
//                     value={formData.firstName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, firstName: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="py-3">
//                   <p>lastName *</p>
//                   <input
//                     type="text"
//                     className="border border-solid !border-stroke rounded-[7px] p-1"
//                     style={{ width: "100%" }}
//                     value={formData.lastName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, lastName: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//               <div style={{ width: "100%" }}>
//                 <div className="py-3">
//                   <p>username *</p>
//                   <input
//                     type="text"
//                     className="border border-solid !border-stroke rounded-[7px] p-1"
//                     style={{ width: "100%" }}
//                     value={formData.username}
//                     onChange={(e) =>
//                       setFormData({ ...formData, username: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="py-3">
//                   <p>phoneNumber *</p>
//                   <input
//                     type="text"
//                     className="border border-solid !border-stroke rounded-[7px] p-1"
//                     style={{ width: "100%" }}
//                     value={formData.phoneNumber}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phoneNumber: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//             {/* <button type="submit" onClick={handleSubmit}>
//               Submit
//             </button> */}
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         </div>
//       ) : (
//         <p>You are not logged in. Please log in to view your account.</p>
//       )}
//     </div>
//   );
// };

// export default Account;


const Account = () => {
  return (
    <div>Account</div>
  )
}

export default Account