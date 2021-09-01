const { render } = require("ejs");
const { validationResult } = require("express-validator");
const Producto = require("../models/products");
const { v4: uuidv4 } = require("uuid");

const controlador = {
  index: (req, res) => {
    const listaProductos = Producto.getAll();
    res.render("products/list", {
      listaProductos: listaProductos,
    });
  },

  detalle: (req, res) => {
    res.render("products/detalle", {
      mensaje: "hola",
    });
  },
  carrito: (req, res) => {
    res.render("products/carrito");
  },
  create: (req, res) => {
    res.render("products/create");
  },
  store: (req, res) => {
    let errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {
      console.log(req.body);

      // al mapear creo un nuevo array sin modificar el existente
      let nuevaListaProductos = Producto.getAll().map((prod) => prod);
      let { nombre, descripcion, categoria, color } = req.body;
      file = req.file;
      if(!file){
        // manejo algun error
      }
      console.log("soy la imagen");
      console.log(file);
      let productoId = uuidv4();

      const nuevoProducto = {
        id: productoId,
        nombre: nombre,
        descripcion: descripcion,
        img: req.file.filename,
        categoria: categoria,
        color: color,
      };

      nuevaListaProductos.push(nuevoProducto);
      Producto.modifiedAll(nuevaListaProductos);
    } else {
      render("product-form", {
        errors: errors.array(),
      });
    }

    res.redirect("/");
  },
};

module.exports = controlador;
