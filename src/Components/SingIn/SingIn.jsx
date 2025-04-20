import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const SingIn = () => {

    const {LogIn} = useContext(AuthContext);

    const handleLogIng = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
          console.log(email,password);

          LogIn(email,password)
          .then(result=> {
            console.log(result.user);
          })
          .catch(error=>{
            console.log(error);
          })

    }

    return (
        <div className="my-11">
                 <div className="my-11">          

<div className="hero  bg-base-200">
<div className=" flex-col lg:flex-row-reverse space-y-7 py-4">
  <div className="text-center lg:text-left ">
    <h1 className="text-5xl font-bold">Log In Now</h1>
    
    <h1 className="text-5xl font-bold">Log In Now</h1>
   
  </div>

  {/* form */}
      <div className=" w-full">

     <form onSubmit={handleLogIng}>

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
        <button className="btn btn-primary">LogIn</button>
      </div>
     </form>
      </div>
</div>
</div>
      </div>
        </div>
    );
};

export default SingIn;