import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const User_2 = () => {

    // const [user,setUser] = useState([]);

    const {isPending, data: user} = useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/user')
            return res.json();
        }
    });
    
    
    
    // using load data useEffect
    // useEffect(()=>{
    //     fetch('http://localhost:5000/user')
    //     .then(res=> res.json())
    //     .then(data => {
    //         setUser(data);
    //     })
        

    // },[])





    const handleDelete = (id) =>{
        console.log(id);

        fetch(`http://localhost:5000/user/${id}`,{
        method:"DELETE"

        })

        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deleteCount > 0){
                console.log('delete successful');
            }
        })

    }

    if(isPending){
        <span className="loading loading-spinner loading-lg"></span>
    }
    



    return (
          <div className="text-center my-7 space-y-3">
            {/* <h2 className="text-3xl font-bold">User : {user.length}</h2> */}

            {/* <div className="text-2xl font-normal">
                {
                    user.map((user)=> <li key={user._id}>
                        {user.email}
                    </li>)
                }
            </div> */}

            {/* table */}

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
            {
                user?.map((user) =>    <tr key={user._id} className="bg-base-200">

                <th>1</th>
                <td>{user.email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                    <button onClick={()=> handleDelete(user._id)} className="btn bg-green-700">Delete</button>
                </td>
              </tr>)
            }
      {/* row 2 */}
    
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User_2;