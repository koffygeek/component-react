
import { useState } from "react"

    const Person = ({data}) => {

        const [isShows ,setIsShows] = useState(data.shows)




    const handleClick = () => {
        setIsShows(!isShows)
        
    }
        return( 
            <div>

                { 
                
                    
                    isShows ? <div className="border border-gray-700 justify-content: center;">
                    <h1>{data.fullName}</h1>
                    <h4>{data.bio}</h4>
                    <img src={data.imgSrc} alt={data.fullName}  />
                    <h2>{data.profession}</h2>


                    <button onClick={handleClick} >click me</button>
                   
                    
                </div>
                    : 
                    
                    <div style={{backgroundColor:"red"}}>
                            <p> Not Found</p>

                        <button onClick={handleClick} >click me</button>
                    </div>
                
                }


                
    
               
            </div>
       )
}
export default Person
