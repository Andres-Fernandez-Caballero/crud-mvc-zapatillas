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
    console.log(req.body);
		


		
		res.redirect('/');
  }
};

module.exports = controlador;