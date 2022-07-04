const products = [
    {id:'06', name:'PINK', price: "$19.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/M1-saco.jpg', stock:5},
    {id:'06', name:'BLUE', price: "$21.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/M2-saco.jpg', stock:4},
    {id:'06', name:'GREEN', price: "$22.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/M3-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$20.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/M4-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$23.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/M5-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$25.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/H1-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$24.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/H2-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$21.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/H3-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$19.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/H4-saco.jpg', stock:6},
    {id:'06', name:'GREEN', price: "$20.000,00", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Bibendum at varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis", img:'/images/H5-saco.jpg', stock:6},
  ]

  export const getData = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products)
      }else{
        reject("Promise rejected.")
      }
    },2000)
  })

  export const getItem = new Promise ((resolve, reject) =>{
    let condition = true
    setTimeout(()=>{
      if(condition){
        resolve(products.find(item => item.name === "PINK"));
      }else{
        reject("Promise rejected.");
      }
    },2000);
  })