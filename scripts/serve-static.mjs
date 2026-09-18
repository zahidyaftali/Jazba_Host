// Plain static server with directory-index resolution and no SPA fallback,
// so it serves exactly what a real static host would serve.
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(process.argv[2] || 'dist')
const port = Number(process.argv[3] || 4321)
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json',
  '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon',
}

http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0])
  let file = path.join(root, url)
  if (!file.startsWith(root)) { res.writeHead(403).end(); return }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html')
  if (!fs.existsSync(file)) {
    const nf = path.join(root, '404.html')
    if (fs.existsSync(nf)) { res.writeHead(404, { 'content-type': types['.html'] }).end(fs.readFileSync(nf)); return }
    res.writeHead(404).end('Not found'); return
  }
  res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' })
  res.end(fs.readFileSync(file))
}).listen(port, () => console.log(`static server on http://localhost:${port} serving ${root}`))
