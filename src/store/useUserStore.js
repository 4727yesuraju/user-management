import toast from "react-hot-toast";
import { create } from "zustand";
import axios from "../lib/Axios";


export const useUserStore = create((set,get)=>({
       token : localStorage.getItem('token') || null,
       loading : false,
       error : false,

       page : 1,
       setPage : page=>set({page}),
       pageInfo : null,
       setPageInfo : pageInfo=>set({pageInfo}),

       editItem : null,
       setEditItem : editItem=>set({editItem}),

       // eve.holt@reqres.in
       // cityslicka
       login : async ({email,password})=>{
          if(!email || !password) return toast.error("all fields are required");
          try {
                set({loading : true});
                const res = await axios.post(`api/login`,{email,password});
                localStorage.setItem("token",res.data.token);
                set({token : res.data.token});
          } catch (error) {
                 toast.error(error.response.data.error);
          }finally{
                 set({loading : false})
          }
       },

       getPageInfo : async()=>{
              try {
                    const res = await axios.get(`/api/users?page=${get().page}`);
                    localStorage.setItem("data",JSON.stringify(res.data));
                    set({pageInfo : res.data});
              } catch (error) {
                     toast.error(error.response.data.error);
              }

       },

       deleteUser : async (id)=>{
              try {
                     await axios.delete(`/api/users/${id}`);
                     let newPageInfoData = get().pageInfo.data.filter(item=>item.id!==id);
                     set({pageInfo : {...get().pageInfo,data : newPageInfoData}});
                     toast.success('deleted successfully id : '+id);
              } catch (error) {
                     toast.error(error.response.data.error);
              }

       },
       updateUser : async (id,data)=>{
              try {
                     set({loading : true});
                     const res = await axios.put(`/api/users/${id}`,data);
                     console.log("update : ",res);
                     let newPageInfoData = get().pageInfo.data.map(item=>{
                           if(item.id===id) {
                               return {...item,...data}; 
                           }
                           return {...item}
                     });
                     set({pageInfo : {...get().pageInfo,data : newPageInfoData}});
                     toast.success('updated successfully id : '+id);
                     set({editItem : null})
              } catch (error) {
                     toast.error(error.response.data.error);
              }finally{
                     set({loading : false});
              }

       },

       filterSearch : (searchTerm)=>{
              const localPageInfo = JSON.parse(localStorage.getItem('data'));
              let newPageInfoData = localPageInfo.data.filter(item=>JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));
              set({pageInfo : {...get().pageInfo,data : newPageInfoData}});
       }
}))