let isProxy = true
const proxy = [
  {
    context: ['/auth', '/api'],
    target: 'http://localhost:3000',
    onProxyReq: function(proxyReq, req, res) {
      // add custom header to request
      // proxyReq.setHeader('x-added', 'foobar')
      // or log the req
    },
  },
]

module.exports = isProxy ? proxy : []
