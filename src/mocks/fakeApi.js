const products = [
    {id:'1', name:'PINK', price: "$19.000,00", category: "sacos", description:"Saco mujer color rosa.", img:'/images/M1-saco.jpg', stock:5},
    {id:'2', name:'BLUE', price: "$21.000,00", category: "sacos", description:"Saco mujer color azul.", img:'/images/M2-saco.jpg', stock:4},
    {id:'3', name:'GREEN', price: "$22.000,00", category: "sacos", description:"Saco mujer color verde.", img:'/images/M3-saco.jpg', stock:6},
    {id:'4', name:'LIGHT BLUE', price: "$20.000,00", category: "sacos", description:"Saco mujer color celeste.", img:'/images/M4-saco.jpg', stock:6},
    {id:'5', name:'WHITE', price: "$23.000,00", category: "sacos", description:"Saco mujer color blanco.", img:'/images/M5-saco.jpg', stock:6},
    {id:'6', name:'BLACK', price: "$25.000,00", category: "sacos", description:"Saco de hombre color negro", img:'/images/H1-saco.jpg', stock:6},
    {id:'7', name:'GRAY', price: "$24.000,00", category: "sacos", description:"Saco de hombre color gris", img:'/images/H2-saco.jpg', stock:6},
    {id:'8', name:'PAINTINGS', price: "$21.000,00", category: "sacos", description:"Saco de hombre cuadrillé", img:'/images/H3-saco.jpg', stock:6},
    {id:'9', name:'LIGHT BLUE', price: "$19.000,00", category: "sacos", description:"Saco de hombre color celeste", img:'/images/H4-saco.jpg', stock:6},
    {id:'10', name:'BROWN', price: "$20.000,00", category: "sacos", description:"Saco de hombre color marrón claro", img:'/images/H5-saco.jpg', stock:5},
    {id:'11', name:'RED', price: "$9.000,00", category: "polleras", description:"Pollera a cuadros", img:'/images/1-pollera.jpg', stock:6},
    {id:'12', name:'BLACK', price: "$8.000,00", category: "polleras", description:"Pollera negra", img:'/images/2-pollera.jpg', stock:6},
    {id:'13', name:'BLUE', price: "$6.000,00", category: "polleras", description:"Pollera azul", img:'/images/3-pollera.jpg', stock:6},
    {id:'14', name:'GREEN', price: "$6.000,00", category: "camisas", description:"Camisa color verde.", img:'/images/1-camisa.jpg', stock:6},
    {id:'15', name:'ANIMAL', price: "$6.000,00", category: "camisas", description:"Camisa animal print", img:'/images/2-camisa.jpg', stock:6},
    {id:'16', name:'WHITE', price: "$6.000,00", category: "camisas", description:"Camisa color blanco.", img:'/images/3-camisa.jpg', stock:6},
    {id:'17', name:'CREAM PANT', price: "$6.000,00", category: "pantalones", description:"Pantalon mujer.", img:'/images/M1-pantalon.jpg', stock:6},
    {id:'18', name:'BLACK PANT', price: "$6.000,00", category: "pantalones", description:"Pantalon mujer.", img:'/images/M2-pantalon.jpg', stock:6},
    {id:'19', name:'BLUE PANT', price: "$6.000,00", category: "pantalones", description:"Pantalon mujer.", img:'/images/M3-pantalon.jpg', stock:6},
    {id:'20', name:'GREEN JACKET', price: "$6.000,00", category: "camperas", description:"Campera mujer.", img:'/images/M1-campera.jpg', stock:6},
    {id:'21', name:'BLACK JACKET', price: "$6.000,00", category: "camperas", description:"Campera mujer.", img:'/images/M2-campera.jpg', stock:6},
    {id:'22', name:'JEAN JACKET', price: "$6.000,00", category: "camperas", description:"Campera mujer.", img:'/images/M3-campera.jpg', stock:6},
    {id:'23', name:'VEST', price: "$10.000,00", category: "chalecos", description:"Chaleco hombre cuadrille.", img:'/images/1-chaleco.jpg', stock:6},
    {id:'24', name:'BLACK VEST', price: "$10.000,00", category: "chalecos", description:"Chaleco hombre color negro.", img:'/images/2-chaleco.jpg', stock:6},
    {id:'25', name:'BLUE VEST', price: "$10.000,00", category: "chalecos", description:"Chaleco hombre color azul.", img:'/images/3-chaleco.jpg', stock:6},
    {id:'26', name:'Corbata 1', price: "$10.000,00", category: "chalecos", description:"Corbata hombre..", img:'/images/1-corbata.jpg', stock:6},
    {id:'27', name:'Corbata 2', price: "$10.000,00", category: "corbatas", description:"Corbata hombre..", img:'/images/2-corbata.jpg', stock:6},
    {id:'28', name:'Corbata 3', price: "$10.000,00", category: "corbatas", description:"Corbata hombre..", img:'/images/3-corbata.jpg', stock:6},
    {id:'29', name:'Corbata 4', price: "$10.000,00", category: "corbatas", description:"Corbata hombre..", img:'/images/4-corbata.jpg', stock:6},
    {id:'30', name:'Corbata 5', price: "$10.000,00", category: "corbatas", description:"Corbata hombre..", img:'/images/5-corbata.jpg', stock:6},
    {id:'31', name:'Corbata 6', price: "$10.000,00", category: "corbatas", description:"Corbata hombre..", img:'/images/6-corbata.jpg', stock:6},
  ]

  export const getData = (categoryId) => {
    return new Promise ((resolve, reject) => {
      const productosFiltrados = products.filter((prod) => prod.category === categoryId);
      setTimeout(() => {
        categoryId ? resolve(productosFiltrados) : resolve(products);
      }, 1000);
    });
  };

  export const getItem = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = products.find((prod) => prod.id === Number(id));
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 2000);
    });
};