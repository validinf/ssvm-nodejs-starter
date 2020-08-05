let hostname = '0.0.0.0', port = 3000, server = require('http').createServer(async (req, res) => {
  let result = await data(), fixed = require('../pkg/ssvm_nodejs_starter_lib.js').say(`<a href="${result[1]}">${result[0]}</a><br />${result[2]}`); 
  res.end(final(fixed, result[1]))
});
server.listen(port, hostname, () => { console.log(`Server running at [http://${hostname}:${port}/?text=TEXT_HERE]`); });
function final(input, img) {
  let toappend = [];
  toappend.push(`<!DOCTYPE html><html lang="en"><head><title>AI Reply</title></head><body style="background-color:rgba(0,0,0,0.5);">`);
  toappend.push(`<br /><b style="padding-right: 50%;">${input}<a></b>`);
  toappend.push(`<br /><img src="${img}" style="max-width:500px;"/>`);
  toappend.push(`</body></html>`);
  return toappend.join(``);
}

async function data() {
  let { body } = await require(`superagent`).get(`https://api.nasa.gov/planetary/apod?api_key=NASA_API_KEY`).catch(error => {return [error, null, null]; });
  console.log(body);
  return [body.title, body.url, body.explanation];
}
