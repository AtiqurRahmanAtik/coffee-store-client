import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({data,coffees,setCoffees}) => {

    console.log(data);
    const {_id,PhotoURL,coffeeName,Supplier,Taste,Details} = data;

    const handleDelete = (id) =>{
         
        console.log(id);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"   
            //   });
            
            fetch(`http://localhost:5000/coffee/${id}`,{
                method : "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount>0){
                    
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"   
              });

              
                              const remaining = coffees.filter((cof)=> cof._id !== id);
                              setCoffees(remaining);
                }


            })




            }
          });
    }

    return (
        <div>
            
            <div className="card card-side bg-base-100 shadow-xl gap-3">

        <div className="flex-1">
        <figure><img src={PhotoURL} alt="Movie"/></figure>
        </div>

  <div className=" flex justify-between w-full gap-2 flex-1">

        <div className="">
        <h2 className="card-title">Name : {coffeeName}</h2>
    <h2 className="card-title">Supplier :  {Supplier}</h2>
    <h2 className="card-title">Taste : {Taste}</h2>
    <p>Details :  {Details}</p>
        </div>

    <div className="card-actions justify-end">
    <button className="btn btn-info">View</button>
        <Link to={`/updatecoffee/${_id}`}><button className="btn btn-success">Edit</button></Link>

<button onClick={()=> handleDelete(_id)} className="btn btn-warning">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;