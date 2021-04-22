const http = require('http');

function getNprimes(n) {
    const arr = [];
    let i = 2
  
    while (arr.length < n) {
      if (isPrime(i)) {
        arr.push(i)
      }
      i++
    } 
    return arr;
  
    function isPrime(n) {
  
      if ( n < 2 ) {
        return false
      }
  
      for ( let i = 2; i <= Math.sqrt(n); i++ ) {
        if ( n % i === 0 ) {
            return false;
        } 
      }
      return true
    }
  
}

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    a = getNprimes(1000)
    response.end("Hello World! " + a[999]);

});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
