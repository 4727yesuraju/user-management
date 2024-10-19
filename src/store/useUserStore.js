import toast from "react-hot-toast";
import { create } from "zustand";


const BASE_URI = process.env.REACT_APP_BASE_URI;
export const useUserStore = create(set=>({
       token : localStorage.getItem('token') || null,
       loading : false,
       error : false,

       // eve.holt@reqres.in
       // cityslicka
       login : async ({email,password})=>{
          if(!email || !password) return toast.error("all fields are required");
          try {
            set({loading : true});
            const res = await fetch(`${BASE_URI}/api/login`,{
                method : "POST",
                headers : {
                    "Content-Type" : 'application/json'
                },
                body :  JSON.stringify({email,password})
            });

            const data = await res.json();
            if(data.error) return toast.error(data.error);
            console.log("data : ",data);
            localStorage.setItem("token",data.token);
            set({token : data.token});

          } catch (error) {
             toast.error(error.message);
          }finally{
            set({loading : false})
          }
       }
}))