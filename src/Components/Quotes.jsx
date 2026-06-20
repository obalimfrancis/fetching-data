import React, { useEffect, useState } from "react";


function Quotes (){

    const [quotes, setQuotes ] = useState([]);

useEffect(function(){
     fetch('https://dummyjson.com/quotes').then((response) => response.json())
     .then((data) => {

        setQuotes(data.quotes);
     })

},[])

    return(
        <div>
            <h1>Quotes Page</h1>

            <div>
             {quotes.length === 0? (
                <p>Loading quotes....</p>
             ) : (
                <ul> 
                    {quotes.map((item) =>(
                        
                        <li key={item.id}> 
                            <p>"{item.quote}"</p>
                            <small>- {item.author}</small>
                        </li>
                    )
                    )}
                </ul>
             )
             }
            

            </div>
        </div>
    )
}

export default Quotes;