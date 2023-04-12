
const jsonServer = require('json-server')
const auth = require('json-server-auth')

const server = jsonServer.create()
const router = jsonServer.router('db.json')

// Bind the router db to the server
server.db = router.db

// You must apply the auth middleware before the router
server.use(auth)
server.use(router)
server.listen(5000, () => {
  console.log('JSON Server is running')
})