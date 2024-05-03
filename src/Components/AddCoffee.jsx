import axios from 'axios';
import Swal from 'sweetalert2';

const AddCoffee = () => {


    const handleForm = (e)=>{
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

        axios.post('http://localhost:5000/coffee',user)
        .then(data => {
            console.log(data.data);
            if(data.data.insertedId){
                alert('data update');
            }
        })
        
        
        // fetch('http://localhost:5000/coffee',{
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
                
        //       },
        //       body: JSON.stringify(user),
        // })

        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data);
        //     if(data.insertedId){
                
        //         Swal.fire({
        //             title: 'success',
        //             text: 'Successfully data send',
        //             icon: 'success',
        //             confirmButtonText: 'ok'
        //           })
        //     }
        //     form.reset();
        // })


      
    }


    return (
        <div className="my-11 ">
             <h1 className="text-3xl font-bold text-center">Add Coffee component</h1>

            
            
            <form onSubmit={handleForm} className="bg-blue-200  py-3">

                <div className="space-y-3 lg:ml-96  ">

                    <div className="flex gap-3 w-1/2">
                    <div>
                    <label >Coffee Name : </label> <br />
                    <input  type="text" name="name"  placeholder="Enter the name"/> <br />
                    </div>

                    <div>
                    <label >Available Quantity: </label> <br />
                    <input type="text" name="quantity"  placeholder="Enter the Cafe"/> <br />
                    </div>
                    </div>


                    <div className="flex gap-3">
                    <div>
                    <label >Supplier : </label> <br />
                    <input className="bg-gray-200" type="text" name="supplier"  /> <br />
                    </div>
                    
                    <div>
                    <label >Taste : </label> <br />
                    <input className="bg-gray-200" type="text" name="taste"  /> <br />
                    </div>
                    
                    </div>



                    <div className="flex gap-3">
                    <div>
                    <label >Photo URL : </label> <br />
                    <input className="bg-gray-200" type="text" name="photoURL" /> <br />
                    </div>
                    
                    <div>
                    <label >Details : </label> <br />
                    <input className="bg-gray-200" type="text" name="details"  /> <br />
                    </div>

                    </div>

                    <input type="submit" value="Add Coffee" className="btn btn-primary w-1/2"/>
                </div>
            </form>
 
        </div>
    );
};

export default AddCoffee;