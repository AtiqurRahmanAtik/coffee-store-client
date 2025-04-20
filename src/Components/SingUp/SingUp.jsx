import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


import Swal from "sweetalert2";


const SingUp = () => {

    const { createUeser} = useContext(AuthContext);
    

    const handleForm = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        
        //createUser
        createUeser(email,password)
        .then(result =>{
            console.log(result.user);
            const user ={email};
            console.log(user)

            //server side
            fetch('http://localhost:5000/user',{

            method: "POST",
            headers: {
                "Content-Type": "application/json",
              
              },
              body : JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        })
        .catch(error =>{
            console.error(error);
        })


    }

    return (
       
  <div className="my-11">          

  <div className="hero  bg-base-200">
  <div className=" flex-col lg:flex-row-reverse space-y-7 py-4">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Registration Now</h1>
     
    </div>

    {/* form */}
        <div className=" w-full">

       <form onSubmit={handleForm}>

       <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered w-full" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
       </form>
        </div>
  </div>
</div>
        </div>
    );
};

export default SingUp;