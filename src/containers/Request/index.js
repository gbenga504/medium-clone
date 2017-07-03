// Global Name to handle response type
let HANDLE_RESPONSE_AS = null;

/**
 * @Function handles all fetch request of the application 
 * @param {String} url 
 * @param {Object} param1 ({method:String | handleResponseAS: String | headers: Object})
 * @param {String} body 
 */
export const httpFetch = (url, { method, handleResponseAs, body }, headers) => {
  let API_HEADER = ManageHeader(headers), API_BODY = ManageBody(body);

  HANDLE_RESPONSE_AS = handleResponseAs;

  return RequestHeader(url, method, API_HEADER, API_BODY)
    .then(StatusHandler)
    .then(ResponseHandler)
    .then(data => {
      return Promise.resolve(data);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};

const RequestHeader = (url, method, header, body) => {
  if (!(body instanceof FormData))
    return fetch(url, {
      method,
      headers: header,
      body: body
    });
  else
    return fetch(url, {
      method,
      body: body
    });
};

/**
 * @function StatusHandler handles the response type of the request and returns a promise 
 * @param {Object} 
 */
const StatusHandler = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
};

/**
 * @function ResponseHandler handles the response return and formatting type of the application 
 * @param {Object} response 
 */
const ResponseHandler = response => {
  let response_method = null;

  if (HANDLE_RESPONSE_AS == "json") return response.json();
  else if (HANDLE_RESPONSE_AS == "text") return response.text();
  else if (HANDLE_RESPONSE_AS == "arrayBuffer") return response.arrayBuffer();
  else if (HANDLE_RESPONSE_AS == "formData") return response.formData();
};

/**
 * @function ManageHeader formats the header for the request 
 * @param {Object} header 
 */
const ManageHeader = header => {
  const defaultHeader = new Headers({
    "Content-Type": "application/json"
  });

  let returnedHeader = header ? header : defaultHeader;
  return returnedHeader;
};

/**
 * @function ManageBody formats the body of the request either as a formData or JSON 
 * @param {Object} body 
 */
const ManageBody = body => {
  const defaultBody = null;

  let returnedBody = body ? body : null;

  return returnedBody;
};
