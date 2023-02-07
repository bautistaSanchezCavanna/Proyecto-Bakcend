const { Router } = require("express");
const router = Router();
const FSproductRoutes = require('./products/FSproductos.routes');
const FScartRoutes = require('./carts/FScarts.routes');
const fileRoutes = require('./files/files.routes');
const productsRoutes = require('./products/products.routes');
const cartsRoutes = require('./carts/carts.routes')

router.use('/FSproducts', FSproductRoutes);
router.use('/FScarts', FScartRoutes);
router.use('/files', fileRoutes);

router.use('/products', productsRoutes);
router.use('/carts', cartsRoutes);


module.exports = router;