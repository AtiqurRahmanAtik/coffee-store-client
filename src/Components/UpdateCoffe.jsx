import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffe = () => {

    const coffees = useLoaderData();
    const {_id,PhotoURL,coffeeName,Supplier,Taste,Details,Quantity} = coffees;
    console.log(coffees);



    const handleUpadate = (e)=>{
        e.preventDefault();
        const form = e.target;

        const coffeeName = form.name.value;
        const Quantity = form.quantity.value;
        const Supplier = form.supplier.value;
        const Taste = form.taste.value;
        const PhotoURL = form.photoURL.value;
        const Details = form.details.value;

        const user = {coffeeName, Quantity,Supplier,Taste,PhotoURL,Details};

        console.log(user);


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            if (result.isConfirmed) {
        
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                
              },
              body: JSON.stringify(user),
        })

        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount> 0){
                
                Swal.fire({
                    title: 'success',
                    text: 'Successfully updated data ',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })

    }
});
    
      
    }


    return (
        <div className="my-11">

        <h1 className="text-3xl font-bold text-center">Update Coffee component</h1>

            
            
<form onSubmit={handleUpadate} className="bg-blue-200  py-3">

    <div className="space-y-3 lg:ml-96  ">

        <div className="flex gap-3 w-1/2">
        <div>
        <label >Coffee Name : </label> <br />
        <input  type="text" name="name" defaultValue={coffeeName} placeholder="Enter the name"/> <br />
        </div>

        <div>
        <label >Available Quantity: </label> <br />
        <input type="text" name="quantity"  defaultValue={Quantity} placeholder="Enter the Cafe"/> <br />
        </div>
        </div>


        <div className="flex gap-3">
        <div>
        <label >Supplier : </label> <br />
        <input className="bg-gray-200" type="text" defaultValue={Supplier} name="supplier"  /> <br />
        </div>
        
        <div>
        <label >Taste : </label> <br />
        <input className="bg-gray-200" type="text" defaultValue={Taste} name="taste"  /> <br />
        </div>
        
        </div>



        <div className="flex gap-3">
        <div>
        <label >Photo URL : </label> <br />
        <input className="bg-gray-200" type="text" defaultValue={PhotoURL} name="photoURL" /> <br />
        </div>
        
        <div>
        <label >Details : </label> <br />
        <input className="bg-gray-200" type="text" defaultValue={Details} name="details"  /> <br />
        </div>

        </div>

        <input type="submit" value="Update Coffee" className="btn btn-primary w-1/2"/>
    </div>
</form>

        </div>
    );
};

export default UpdateCoffe;