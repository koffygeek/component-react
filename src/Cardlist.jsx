import Person from "./Person"

const Cardlist = ({data}) =>{

    return( 
        <div>
        

            {data.map((item,index)=>(
                <Person key={index} data={item}/>
                
            ))}


          
               
         </div>
    )
}
export default Cardlist


