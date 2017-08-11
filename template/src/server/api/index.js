const express = require('express')
const router = express.Router()
let response

/*
 * API Status Code Rule
 * 
 * GET:
 * 
 * 200 (OK)
 * 400 (Bad Request)
 * 404 (Not Found)
 * 
 * POST (Create):
 * 
 * 200 (OK)
 * 400 (Bad Request)
 * 403 (Forbidden)
 * 404 (Not Found)
 * 
 * PUT/PATCH (Update):
 * 
 * 200 (OK)
 * 400 (Bad Request)
 * 403 (Forbidden)
 * 404 (Not Found)
 * 
 * DELETE:
 * 
 * 200 (OK)
 * 400 (Bad Request)
 * 403 (Forbidden)
 * 404 (Not Found)
 *
 */

const message = {
  400: 'API Bad Request',
  403: 'API Forbidden',
  404: 'API Not Found'
}

router.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  response = {
    status: 404,
    data: null,
    message: null
  }
  next()
})

// api under this line
router.route('/title')
  .get(function(req, res, next) {
    response.status = 200
    response.data = {
      title: 'The Progressive <br> JavaScript Framework',
      link: [{
        content: 'GET STARTED',
        href: 'https://vuejs.org/v2/guide/',
        type: 1,
        target: '_blank'
      }, {
        content: 'GITHUB',
        href: 'https://github.com/vuejs/vue',
        type: 0,
        target: '_blank'
      }]
    }
    next()
  })

router.route('/list')
  .get(function(req, res, next) {
    response.status = 200
    response.data = {
      list: [{
        title: 'Approachable',
        description: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!'
      }, {
        title: 'Versatile',
        description: 'Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.'
      }, {
        title: 'Performant',
        description: '20kb min+gzip Runtime <br> Blazing Fast Virtual DOM <br> Minimal Optimization Efforts.'
      }]
    }
    next()
  })

router.use(function(req, res) {
  if (response.status !== 200 && !response.message) {
    response.message = message[response.status]
  }
  res.json(response)
})

module.exports = router
