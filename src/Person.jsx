const Person = ({data}) => {
    return( 
        <div>
        

            {data.map((item)=>(

                <div className="border border-gray-700 flex flex-col justify-between h-full m-6 ">

                    <h1>{item.fullName}</h1>
                    <h4>{item.bio}</h4>
                    <img src={item.imgSrc} alt={item.fullName}  />
                    <h2>{item.profession}</h2>
                </div>
            ))}


          
               
         </div>
    )
}
export default Person
