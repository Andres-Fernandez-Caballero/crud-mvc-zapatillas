const { validationResult } = require("express-validator");
const Producto = require("../models/products");

const controlador = {

  index: (req, res) => {
    const listaProductos = Producto.getAll();
    res.render('products/list', { listaProductos: listaProductos})
  },

  detalle: (req, res) => {
    res.render("products/detalle", { mensaje: "hola" });
  },
  carrito: (req, res) => {
    res.render("products/carrito");
  },
  create: (req, res) => {  
    res.render("products/create");
  },
  store: (req, res) => {  
		//let errors = validationResult(req)
		//console.log(errors)
		if(/*errors.isEmpty()*/true){
            console.log(req.body)
			let products_copy = Producto.getAll().map(product => product);
			let productId = products_copy.length === 0 ? 1 :  products_copy[products_copy.length-1].id + 1;
			const nombre = req.body.nombre_producto
            const producto = {
                id: productId,
                nombre: nombre
            };
			products_copy.push(product)
			Products.modifiedAll(products_copy);
			res.redirect('/');
		}else{
			res.render('create', {errors: errors.array(), productToEdit:req.body})
		}
    }

};

module.exports = controlador;