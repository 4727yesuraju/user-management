import React, { useEffect } from 'react'
import { useUserStore } from '../store/useUserStore'
import Pagination from '../components/Pagination';
import UserCard from '../components/UserCard';
import EditForm from '../components/EditForm';

function UsersPage() {

    const {pageInfo,getPageInfo,page,setPage,editItem} = useUserStore(); 

    useEffect(()=>{
        getPageInfo(page);
    },[page,getPageInfo]);

    if(!pageInfo) return <h1>Loading ....</h1>
  return (
    <div>
        <div className={`flex flex-col items-center  min-h-screen p-4 ${editItem && 'blur-sm cursor-not-allowed'} mb-10`}>
          <h1 className='text-2xl font-bold'>Hello Users </h1>
          <div className="flex justify-center items-center p-2 gap-4 flex-wrap flex-1">
            {
              pageInfo.data.length === 0 && <span className="text-2xl">Users not found ☹️!</span>
            }
            {
              pageInfo.data.map(item=><UserCard key={item.id} item={item}/>)
            }
          </div>
          <Pagination page={page} setPage={setPage}/>
        </div>

          {
            editItem && <EditForm editItem={editItem}/>
          }
    </div>
  )
}

export default UsersPage;
