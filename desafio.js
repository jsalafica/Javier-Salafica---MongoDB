// Creo carpeta y ejecuto mongod
// mongod --dbpath ./ecommerce

// Ejecuto mongosh
// mongosh

// creo base de datos ecommerce
// use ecommerce

// Creo colecciones
db.createCollection("productos");
db.createCollection("mensajes");

// Muestro colecciones
// show collections

// 1
// Agrego 10 documentos a la coleccion productos
db.productos.insertMany([
  {
    title: "Licuadora",
    price: 120,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Cafetera",
    price: 580,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Secarropas",
    price: 900,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Cocina",
    price: 1280,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Lavarropas",
    price: 1700,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Cafetera",
    price: 2300,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Microondas",
    price: 2860,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Tostadora",
    price: 3350,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Batidora",
    price: 4320,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
  {
    title: "Plancha",
    price: 4990,
    thumbnail:
      "https://media.istockphoto.com/id/1219319311/es/vector/iconos-de-l%C3%ADnea-de-dispositivos-trazo-editable-p%C3%ADxel-perfecto-para-m%C3%B3viles-y-web-contiene.jpg?s=1024x1024&w=is&k=20&c=4biCQ_wu1QTgIZVMeLT3MWGFA1dv7YH06r44rE4NLpU=",
  },
]);

// 2
// Agrego 10 documentos a la coleccion mensajes
db.mensajes.insertMany([
  {
    email: "ejemplo1@ejemplo.com",
    messagge: "Hola 1",
    date: "17/12/2022, 20:59:28",
  },
  {
    email: "ejemplo2@ejemplo.com",
    messagge: "Hola 2",
    date: "22/12/2022, 20:59:28",
  },
  {
    email: "ejemplo3@ejemplo.com",
    messagge: "Hola 3",
    date: "17/12/2022, 20:59:28",
  },
  {
    email: "ejemplo4@ejemplo.com",
    messagge: "Hola 4",
    date: "16/12/2022, 20:59:28",
  },
  {
    email: "ejemplo5@ejemplo.com",
    messagge: "Hola 5",
    date: "15/12/2022, 20:59:28",
  },
  {
    email: "ejemplo6@ejemplo.com",
    messagge: "Hola 6",
    date: "14/12/2022, 20:59:28",
  },
  {
    email: "ejemplo7@ejemplo.com",
    messagge: "Hola 7",
    date: "13/12/2022, 20:59:28",
  },
  {
    email: "ejemplo8@ejemplo.com",
    messagge: "Hola 8",
    date: "12/12/2022, 20:59:28",
  },
  {
    email: "ejemplo9@ejemplo.com",
    messagge: "Hola 9",
    date: "19/12/2022, 20:59:28",
  },
  {
    email: "ejemplo10@ejemplo.com",
    messagge: "Hola 10",
    date: "18/12/2022, 20:59:28",
  },
]);

// 3
// Listo documentos
db.productos.find();
db.mensajes.find();

// 4
// Muestro la cantidad de documentos en cada coleccion
db.productos.estimatedDocumentCount();
db.mensajes.estimatedDocumentCount();

// 5
// Realizar un CRUD en la coleccion de productos
// a - agrego un producto
db.productos.insertOne({
  title: "Secador de pelo",
  price: 1500,
  thumbnail:
    "https://cdn0.iconfinder.com/data/icons/30px-kitchen-appliance/30/33_toster-toaster-kitchen-appliance-512.png",
});

// b- Consulta
// i - Listar productos con precio menor a 1000
db.productos.find({ price: { $lt: 1000 } });

// ii - Listar productos con precio entre 1000 y 3000
db.productos.find({
  $and: [{ price: { $gt: 1000 } }, { price: { $lt: 3000 } }],
});

// iii - Listar productos con precio mayor a 3000
db.productos.find({ price: { $gt: 3000 } });

// iv - Tercer producto mas barato
db.productos.find().sort({ price: 1 }).limit(1).skip(2);

// c - Actualizo agregando campo stock con valor de 100
db.productos.updateMany(
  { stock: { $exists: false } },
  { $set: { stock: 100 } }
);

// d - Actualizar stock a 0 a productos con precio mayores a 4000
db.productos.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } });

// e - Borrar los productos con precio menor a 1000
db.productos.deleteMany({ price: { $lt: 1000 } });

// 6
// Crear un usuario "pepe" clave "asd456" de solo lectura de la base ecommerce
// use admin
db.createUser({
  user: "pepe",
  pwd: "asd456",
  roles: [{ role: "read", db: "ecommerce" }],
});

// Inicializo nuevamente mongoDB
// mongod --auth --dbpath ./ecommerce

// Ingreso con usuario pepe
// mongosh -u pepe -p asd456

// Prueba
db.productos.insertOne({ algo: "Algo" });
// MongoServerError: not authorized on ecommerce to execute command { insert: "productos", documents: [ { algo: "Algo", _id:
// ObjectId('63aafa2ccf650c3cfa122195') } ], ordered: true, lsid: { id: UUID("9950f6fc-5933-4c0a-b556-58223f7aab02") }, $db:
// "ecommerce" }
