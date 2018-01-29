const router = require('express').Router();
const faker = require('faker');
const Product = require('../Models/products');

router.get('/', (req, res) => {
    Product.find( {}, { category: 1, cover:1, price:1 },(err,categories)=>{
        res.json(categories);
    });
});




// router.get('/generate-fake-data',(req, res)=>{
//     for(let i=0; i<20;i++){
//         const product = new Product();
//         product.category = faker.commerce.department();
//         product.name = faker.commerce.productName();
//         product.price = faker.commerce.price();
//         product.cover = faker.image.image();
//         product.save(err=>{
//             if (err) {return next(err);}
//         });
//     }
//     res.redirect('/');
    
// });

module.exports = router;