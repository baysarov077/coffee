const { Router } = require('express')
const { coffeeController } = require('../controllers/coffee.controller')
const router = Router()

router.post('/coffee', coffeeController.addCoffee)
router.delete('/coffee/:id', coffeeController.deleteCoffeeById)
router.patch('/coffee/:id', coffeeController.editCoffeeById)
router.get('/coffee/in-stock', coffeeController.getCoffeeInStock)
router.get('/coffee/:id', coffeeController.getCoffeeInfoById)
router.get('/coffee', coffeeController.getCoffee)

module.exports = router