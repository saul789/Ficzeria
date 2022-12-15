import React,{useState, useEffect} from 'react'
import { HeaderFiczeria } from './Header/HeaderFiczeria'
import './Css Files/Ordenar.css'
import Fondo from './img/portada.jpg'
import { ProductoOrdenar } from './ProductoOrdenar/ProductoOrdenar'
import swal from 'sweetalert';

export const Ordenar = () => {
  
  //const [Bebidas, setBebidas] = useState([]);
  /*useEffect(() => {
    fetch('https://localhost:7187/api/Bebidas')
      .then((response) => response.json())
      .then((data) => setBebidas(data));
  });*/
  /*fetch('https://localhost:7187/api/Bebidas')
  .then((response) => response.json())
  .then((data) => setBebidas(data));*/
    const pizzas=[
      {
        "id": 1,
        "nombre": "Champiñón",
        "tamaño": "Chica",
        "precio": "100       ",
        "imagenlink": "https://image.freepik.com/foto-gratis/pizza-queso-cebolla-champinones-aislado-sobre-fondo-blanco_167187-1172.jpg"
      },
      {
        "id": 2,
        "nombre": "Champiñón",
        "tamaño": "Chica",
        "precio": "100       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Fpizza_champinon.jpg?alt=media&token=0d34ce8b-53c4-466d-90d3-f8158f40f001"
      },
      {
        "id": 3,
        "nombre": "Champiñón",
        "tamaño": "Mediana",
        "precio": "150       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Fpizza_champinon.jpg?alt=media&token=0d34ce8b-53c4-466d-90d3-f8158f40f001"
      },
      {
        "id": 4,
        "nombre": "Champiñón",
        "tamaño": "Grande",
        "precio": "230       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Fpizza_champinon.jpg?alt=media&token=0d34ce8b-53c4-466d-90d3-f8158f40f001"
      },
      {
        "id": 6,
        "nombre": "pizza alemana",
        "tamaño": "familiar",
        "precio": "159       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Falemana.jpg?alt=media&token=80a7468f-8c5d-4b22-b56b-64a0984af947"
      },
      {
        "id": 7,
        "nombre": "pizza alemana",
        "tamaño": "compañera",
        "precio": "110       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Falemana.jpg?alt=media&token=80a7468f-8c5d-4b22-b56b-64a0984af947"
      },
      {
        "id": 8,
        "nombre": "pizza alemana",
        "tamaño": "pizzota",
        "precio": "249       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Falemana.jpg?alt=media&token=80a7468f-8c5d-4b22-b56b-64a0984af947"
      },
      {
        "id": 9,
        "nombre": "pizza americana",
        "tamaño": "compañera",
        "precio": "110       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Famericana.jpg?alt=media&token=e64a7ee2-88c0-4ac2-a073-015a3bfed186"
      },
      {
        "id": 10,
        "nombre": "pizza americana",
        "tamaño": "familiar",
        "precio": "159       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Famericana.jpg?alt=media&token=e64a7ee2-88c0-4ac2-a073-015a3bfed186"
      },
      {
        "id": 11,
        "nombre": "pizza americana",
        "tamaño": "pizzota",
        "precio": "249       ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Pizzas%2Famericana.jpg?alt=media&token=e64a7ee2-88c0-4ac2-a073-015a3bfed186"
      }
     
    ]
    /*const pizzas=[{linkimagen:"https://th.bing.com/th/id/OIP.VJheVPW-C9sgHDbv1uOX4QHaFn?w=266&h=201&c=7&r=0&o=5&pid=1.7",NombrePizza:"chamiñon",Tamaño:"chica",Precio:"140"},
    {linkimagen:"https://th.bing.com/th/id/OIP.VJheVPW-C9sgHDbv1uOX4QHaFn?w=266&h=201&c=7&r=0&o=5&pid=1.7",NombrePizza:"chamiñonaaa",Tamaño:"grande",Precio:"150"}
];/*
    const Bebidas=[{linkimagen:"https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Fcocacola_2l.jpg?alt=media&token=664f23ed-5382-42e5-836c-1536bcaba712",NombrePizza:"chamiñon",Tamaño:"chica",Precio:"140"},
    {linkimagen:"https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Fcocacola_2l.jpg?alt=media&token=664f23ed-5382-42e5-836c-1536bcaba712",NombrePizza:"chamiñonaaa",Tamaño:"grande",Precio:"150"}];*/
   /* const extras=[{linkimagen:"https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Faderezo.jpg?alt=media&token=fa9ee18d-1073-41d2-a588-ab16ce8078a8",NombrePizza:"chamiñon",Tamaño:"chica",Precio:"140"},
    {linkimagen:"https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Faderezo.jpg?alt=media&token=fa9ee18d-1073-41d2-a588-ab16ce8078a8",NombrePizza:"chamiñonaaa",Tamaño:"grande",Precio:"150"}
];*/
    const Bebidas=[
      {
        "id": 2,
        "nombre": "cocacola",
        "tamaño": "600ml",
        "precio": "17        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Fcocacola600ml.jpg?alt=media&token=e3a3a298-4f7b-4fcb-b314-37745fa07700"
      },
      {
        "id": 3,
        "nombre": "cocacola",
        "tamaño": "2ml",
        "precio": "38        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Fcocacola_2l.jpg?alt=media&token=664f23ed-5382-42e5-836c-1536bcaba712"
      },
      {
        "id": 4,
        "nombre": "fanta naranja",
        "tamaño": "2ml",
        "precio": "38        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Ffanta2.jpg?alt=media&token=4d42cc9c-db7d-4f75-93de-4813eaa6816c"
      },
      {
        "id": 5,
        "nombre": "fanta naranja",
        "tamaño": "600ml",
        "precio": "17        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Ffanta600.jpg?alt=media&token=7575b224-fc7d-4ec0-9d91-eb8e7ca3cb5c"
      },
      {
        "id": 6,
        "nombre": "fanta fresa",
        "tamaño": "2l",
        "precio": "38        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Ffantafresa2l.jpg?alt=media&token=13a9da39-f698-4c73-8dcb-84f8b9ca02f5"
      },
      {
        "id": 7,
        "nombre": "fanta fresa",
        "tamaño": "600ml",
        "precio": "17        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Ffantafresa600.jpg?alt=media&token=b5e3940b-7dc3-4496-860a-69eca1c2bf2d"
      },
      {
        "id": 8,
        "nombre": "fresca",
        "tamaño": "2l",
        "precio": "38        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Bebidas%2Ffresca2l.jpg?alt=media&token=3e670b27-f001-4d42-a342-5c638c41c891"
      }
    ];
    const extras=[
      {
        "id": 1,
        "nombre": "Aderezo",
        "porcion": "2oz",
        "precio": "10        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Faderezo.jpg?alt=media&token=fa9ee18d-1073-41d2-a588-ab16ce8078a8"
      },
      {
        "id": 2,
        "nombre": "adereso salsa",
        "porcion": "2oz c/u",
        "precio": "20        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Faderezo_salsa.jpg?alt=media&token=f10cb319-92d8-4252-93d6-895a875c9609"
      },
      {
        "id": 5,
        "nombre": "ensalada atun",
        "porcion": "personal",
        "precio": "59        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Fensalada_atun.jpg?alt=media&token=cd3dbe80-98cb-4a2f-9215-638e6651c5f9"
      },
      {
        "id": 6,
        "nombre": "ensalada atun",
        "porcion": "normal",
        "precio": "99        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Fensalada_atun.jpg?alt=media&token=cd3dbe80-98cb-4a2f-9215-638e6651c5f9"
      },
      {
        "id": 7,
        "nombre": "ensalada mixta",
        "porcion": "personal",
        "precio": "49        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Fensalada_mixta.jpg?alt=media&token=7089c42d-a2f1-482c-9848-96acaee5f0a0"
      },
      {
        "id": 8,
        "nombre": "ensalada mixta",
        "porcion": "normal",
        "precio": "69        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Fensalada_mixta.jpg?alt=media&token=7089c42d-a2f1-482c-9848-96acaee5f0a0"
      },
      {
        "id": 9,
        "nombre": "espagueti a la pizzeta",
        "porcion": "personal",
        "precio": "49        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Fespagueti_a_la_pizzeta.jpg?alt=media&token=2c71883e-a755-4c68-ba7b-a70764f37d14"
      },
      {
        "id": 10,
        "nombre": "espagueti a la pizzeta",
        "porcion": "normal",
        "precio": "89        ",
        "imagenlink": "https://firebasestorage.googleapis.com/v0/b/pizzeria-b1d63.appspot.com/o/Extras%2Fespagueti_a_la_pizzeta.jpg?alt=media&token=2c71883e-a755-4c68-ba7b-a70764f37d14"
      }];

  
const alertarPedidoRealizado=()=>{
    swal({
        title: "Concluir Orden",
        text: "¿Seguro que quiere concluir esta Orden?, Una vez que confirmes, la orden no podra ser cancelada",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Pedido realizado Exitosamente", {
            icon: "success",
          });
        } else {
          swal("Volviendo a la orden",{
            icon:"success"
          });
        }
      });

}

  return (
    <>
    <HeaderFiczeria/>
    <section className="wrap" style={{top:"130%"}}>
        <div className="wrap-title-section" id="pizzas">
            <h2>
                Pizzas
            </h2>
            {pizzas.map(pizza=>(
                   <ProductoOrdenar  linkimagen={pizza.imagenlink} Nombre={pizza.nombre} Tamaño={pizza.tamaño} Precio={pizza.precio} />
            ))}
            </div>

        <div className="wrap-title-section">
            <h2>
                Bebidas
            </h2>
            {Bebidas.map(bebida=>(
              <ProductoOrdenar linkimagen={bebida.imagenlink} Nombre={bebida.nombre} Tamaño={bebida.tamaño} Precio={bebida.precio} />

            ))}
          
        </div>
        <div className="wrap-title-section">
            <h2>
                Extras
            </h2>
            {extras.map(extra=>(
            <ProductoOrdenar linkimagen={extra.imagenlink} Nombre={extra.nombre} Tamaño={extra.porcion} Precio={extra.precio} />
            ))}
        </div>
        <button type="button" style={{position:"absolute" ,left:"500px"}} class="btn btn-primary" onClick={alertarPedidoRealizado}>Realizar Compra!</button>
        <button type="button" class="btn btn-info" style={{position:"absolute", left:"1000px"}}>Total:$0</button>
    </section>
    <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
    <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
    <img srcSet={Fondo} className="img-fluid" alt="Fondo"/>
    

   
    </>
    
  )
}
