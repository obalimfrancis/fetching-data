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
        <div className="quotesContainer">
            <h1>Quotes Page</h1>

            <div>
             {quotes.length === 0? (
                <p className="loadingText">Loading quotes....</p>
             ) : (
                <ul className="quoteList"> 
                    {quotes.map((item) =>(
                        
                        <li key={item.id} className="quoteCard"> 
                            <p className="quoteText">"{item.quote}"</p>
                            <small className="quoteAuthor">- {item.author}</small>
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