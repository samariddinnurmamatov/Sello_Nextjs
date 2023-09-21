// "use client"

// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { deleteCookie, getCookie, setCookie } from "cookies-next";


// import { AuthState, User } from "@/types";
// import { TOKEN, USER } from "@/constants/const";
// import { request } from "@/server/request2";

// const isAuth = !!getCookie(TOKEN); // getToken ishlatish
// const storedUser = localStorage.getItem(USER);
// const user = storedUser ? JSON.parse(storedUser) : null;
// const initialState: AuthState = {
//   isAuth,
//   user,
//   loading: false,
// };

// export const register = createAsyncThunk(
//   "auth/register",
//   async ({
//     firstName,
//     lastName,
//     username,
//     phoneNumber,
//     password,
//     router,
//   }: {
//     firstName: string;
//     lastName: string;
//     username: string;
//     phoneNumber: string;
//     password: string;
//     router: any;
//   }) => {
//     try {
//       const userData = { firstName, lastName, username, phoneNumber, password };
//       const response = await request.post("auth/register", userData);
//       const { accesstoken, user } = response.data;

//       setCookie(TOKEN, accesstoken);
//       localStorage.setItem(USER, JSON.stringify(user));
//       router.push("/login");

//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const login = createAsyncThunk(
//   "auth/login",
//   async ({ user: userData, router }: { user: User; router: any }) => {
//     try {
//      const response = await request.post("auth/login", userData);
//      const { accesstoken, user } = response.data;
     
//       setCookie(TOKEN, accesstoken);
//       localStorage.setItem(USER, JSON.stringify(user));
//       if (user?.role) {
//         router.push("/admin");
//       } else {
//         router.push("/");
//       }

//       request.defaults.headers.Authorization = `Bearer ${accesstoken}`;

//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }
// );




// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setAuth: (state) => {
//       state.isAuth = true;
//     },
//     setUser: (state, { payload }: PayloadAction<User>) => {
//       state.user = payload;
//     },
//     logout: (state) => {
//       const res = window.confirm("Do you want to log out of this account?");
//       if (res) {
//         deleteCookie(TOKEN);
//         localStorage.removeItem(USER);
//         state.isAuth = false;
//         state.user = null;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isAuth = true;
//         state.loading = false;
//         localStorage.setItem(USER, JSON.stringify(action.payload));
//       })
//       .addCase(login.rejected, (state) => {
//         state.loading = false;
//       });
//   },
// });

// export const { name, reducer, actions } = authSlice;

// export const { setAuth, setUser, logout } = authSlice.actions;

// export default authSlice.reducer;
