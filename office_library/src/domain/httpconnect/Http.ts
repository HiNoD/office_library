interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export const http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
  let response: IHttpResponse<T>;
  
  return new Promise((resolve, reject) => {
    fetch(request, {mode: "cors"})
    .then(res => {
      response = res;
      alert(res);
      return res.json();
    })
    .then(body => {
      if (response.ok) {
        response.parsedBody = body;
        resolve(response);
      } 
      else {
        reject(response);
      }
    })
    .catch(err => {
      reject(err);
    });
  });
};
