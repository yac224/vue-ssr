const express = require('express')
const router = express.Router()
let response
router.use(function(req, res, next) {
  response = {
    status: 'Fail',
    data: null,
    message: null
  }
  next()
})

router.route('/logo')
  .get(function(req, res, next) {
    response.status = 'Success'
    response.data = {
      vue: {
        title: 'The Progressive <br> JavaScript Framework',
        link: [{
          content: 'GET STARTED',
          href: 'https://vuejs.org/v2/guide/',
          type: 0,
          target: '_blank'
        }, {
          content: 'GITHUB',
          href: 'https://github.com/vuejs/vue',
          type: 1,
          target: '_blank'
        }]
      }
    }
    response.message = null
    res.json(response)
  })
router.route('/list')
  .get(function(req, res, next) {
    response.status = 'Success'
    response.data = {
      list: [{
        title: 'Approachable',
        description: 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!'
      }, {
        title: 'Versatile',
        description: 'Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.'
      }, {
        title: 'Performant',
        description: '19kb min+gzip Runtime <br> Blazing Fast Virtual DOM <br> Minimal Optimization Efforts.'
      }]
    }
    response.message = null
    res.json(response)
  })

router.use(function(req, res) {
  response.message = "API NOT MATCH"
  res.json(response)
})

module.exports = router