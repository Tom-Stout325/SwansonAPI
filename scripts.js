/* ****************************
   ! ASYNCHRONOUS PROGRAMMING
   ****************************

    - Synchronous programming is code that is read line by line
    
    - Asyncrhonous programming allows a program to do more than one thing at a Time.

    - Makes it possible to run long-running actions without stopping the program to wait for a response


   ****************************
            ! API
   ****************************

    - Application Program Interface
            - in the form of ENDPOINTS
            - endpoints directs us to sets of data

    - Code that allows access points to servers

    - It is not a database or a server

    - REST API: REpresentational State Transfer
        - creates an object of requested data by the client,
          sends values in a response to the user
        
        - Methods:
            -CRUD
                Create (POST)
                Read (GET)
                Update (PUT)
                Delete (DELETE)

*/

let baseUrl = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

//console.log(document.childNodes[1] .childNodes);
 
 //   !    GLOBAL ELEMENTS

let quoteContainer = document.querySelector('.quoteContainer')
let logo = document.getElementById('ronLogo');

/* Another method:
        let quoteContainer = document.getElementsByClassName('.quoteContainer')
*/

//!     EVENT LISTENER


logo.addEventListener('click', fetchQuote)

/* **************
     ! FETCH
   **************

   let promise = fetch(url, [option]):

    - URL:  The URL we wish to access
    - Options:  Optional parameters, like methods, headers, etc

    Promise:
        - An unknown value when created
        - represents the eventual fulfulled value or rejection (error)
        - 3 States:
            - Pending:  Initial State, neither fulfilled or rejected
            - Fullfilled:  The operation completed successfully
            - Rejected: Operation failed
 */

// fetch(baseUrl)
//     .then(res => res.json())
//     .then(json => console.log(json))

//   function fetchQuote()  {
//       fetch(baseUrl)
//        .then(res => res.json())
//        .then(json => console.log(json))
//   }

//  fetchQuote();


/*   **************
!     ASYNC/AWAIT
     **************

    - Allows us to program in a synchronous manner while still allowing other code to run in the background.

    - Makes our sites as responsive as possible

    - Async keyword can be used on a normal function
        -Async used at the beginning of the function declaration
    - can use await keyword

    ex:
        async function myFn() {
            await...
 }
*/

async function fetchQuote() {
    const response = await fetch(baseUrl);
    const json = await response.json();
    //console.log('async/await: ', json);
    displayQuote(json);
}

let displayQuote = data => {
    console.log('DISPLAY QUOTE', data[0]);


/*
        Goals:
            - set elements
            - apply properties
            - put them somewhere
*/


    let logoContainer = document.getElementById('genQuote');
    //console.log(logoContainer.firstElementChild);

    logoContainer.firstElementChild != null ?
    logoContainer.removeChild(logo) :
    null;


//  !   Set Elements

    let quoteBy = document.createElement('p');
    quoteBy.className = 'quoteBy';
    quoteBy.innerText = '~ Ron Swanson';
    quoteBy.style = 'font-size: 3rem; font-family: billionDreams; color: #3a2718;';

    let quote = document.createElement('h1');
    quote.className = 'quote';
    quote.innerText = `${data[0]}`;
    quote.style = 'font-family: pinewood; color: #3a2718;';

    let img = document.createElement('img');
    img.src = './assets/ron.png';
    img.alt = 'Ron Swanson';
    img.style = 'height: 100px; width: auto;';




//!     APPENDING

quoteContainer.appendChild(quote);
quoteContainer.appendChild(quoteBy);
quoteContainer.appendChild(img);

img.addEventListener('click', () => {
    quoteContainer.removeChild(quote);
    quoteContainer.removeChild(quoteBy);
    quoteContainer.removeChild(img);
    fetchQuote();
})

}