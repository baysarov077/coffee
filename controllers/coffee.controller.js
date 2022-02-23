const Coffee = require('../models/Coffee.model')
const error = 'Ошибка в контроллере'
module.exports.coffeeController = {
    addCoffee: async (req, res) => {
        try{
            await Coffee.create({
                name: req.body.name,
                price: req.body.price,
                inStock: req.body.inStock,
                haveCoffeine: req.body.haveCoffeine,
                ml: req.body.ml,
                description: req.body.description,
            })
            res.json('Кофе добавлен')
        } catch (err) {
            res.json(`${error} addCoffee`)
        }
    },
    getCoffee: async (req, res) => {
        try{
            const coffee = await Coffee.find({}, {name: 1, price: 1});
            res.json(coffee);
        } catch (err) {
            res.json(`${error} getCoffee`)
        }
    },
    deleteCoffeeById: async (req, res) => {
        try{
            await Coffee.findByIdAndDelete(req.params.id)
            res.json('Кофе удалено')
        } catch (err) {
            res.json(`${error} deleteCoffeeById`)
        }
    },
    editCoffeeById: async (req, res) => {
        try{
            await Coffee.findByIdAndUpdate(req.params.id,{
                name: String,
                price: Number,
                inStock: Boolean,
                haveCoffeine: Boolean,
                ml: Number,
                description: String
              })
              res.json('Изменено')
        } catch (err) {
            res.json(`${error} editCoffeById`)
        }
    },
    getCoffeeInStock: async (req, res) => {
        try{
            const coffee = await Coffee.find({ inStock: true });
            res.json(coffee);
        } catch (err) {
            res.json(`${error} getCoffeeInStock`)
        }
    },
    getCoffeeInfoById: async (req, res) => {
        try{
            const coffee = await Coffee.findById(req.params.name);
            res.json(coffee);
        } catch (err) {
            res.json(`${error} getCoffeeInfoByid`)
        }
    },
}