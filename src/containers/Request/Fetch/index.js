/**
 * 
 * @param {*} url  
 * @param {*} param @method (GET|POST), @handle (json|blob|text), @header 
 * @param {*} body (optional parameter meant to send post information)
 */

// Global Name which would change based on user specification of how the response should be gotten 
let HANDLE_RESPONSE_AS = null;


const Fetch = (url,{method,handleResponseAs,headers},body) => {
   let API_HEADER = ManageHeader(headers),
       API_BODY = ManageBody(body);

    HANDLE_RESPONSE_AS = handleResponseAs;

   return fetch(url,{
       method,
       headers : API_HEADER,
       body: API_BODY, 
   })
   .then(StatusHandler)
   .then(ResponseHandler)
   .then(data => {
        return Promise.resolve(data);
   })
   .catch(error => {
        return Promise.reject(error);
   });
}

/**
 * 
 * @param {*} response 
 * Pure Function 
 */
const StatusHandler = (response) =>{
    if(response.status >= 200 && response.status < 300){
        return Promise.resolve(response);
    }
    else{
        return Promise.reject(response);
    }
}

/**
 * 
 * @param {*} response 
 * Pure function 
 */
const ResponseHandler = (response) => {
    let response_method = null;

    if(HANDLE_RESPONSE_AS == "json") return response.json()
    else if(HANDLE_RESPONSE_AS == "text") return response.text()
    else if(HANDLE_RESPONSE_AS == "arrayBuffer") return response.arrayBuffer()
    else if(HANDLE_RESPONSE_AS == "formData") return response.formData()
}

/**
 * 
 * @param {*} header 
 * Pure function 
 */
const ManageHeader = (header) => {
    const defaultHeader = new Headers({
        'Content-Type' : 'application/json',
    });

    let returnedHeader = header ? header : defaultHeader;
    return returnedHeader;
}

/**
 * 
 * @param {*} body 
 * Pure function 
 */
const ManageBody = (body) => {
    const defaultBody = null;

    let returnedBody = body ? body : null;
    return returnedBody;
}

export default Fetch;
