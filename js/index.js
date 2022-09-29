class Producto {
    constructor(id, nombre, imagen, precio, descripcion){
      this.id = id 
      this.nombre = nombre
      this.imagen = imagen
      this.precio = precio
      this.descripcion = descripcion
    }
}

const producto1 = new Producto(1, "Maillot", "./images/maillot-gris.png", 1790, "Tejido liso en el cuerpo (85% Poliester-15% Lycra). Tejido en panel en las mangas y laterales para mejorar el flujo de aire (90% Poliester-10% Lycra). Tres bolsillos traseros. Borde elástico en la parte inferior que mantiene la camiseta en su lugar. Protección UV50+")
const producto2 = new Producto(2, "Chaleco", "./images/chalecos.png", 1990, "Delantera repelente al viento y al agua, y lycra en la espalda. Cuenta con 3 bolsillos traseros. Gracias a su liviandad este chaleco lo puedes poner en el bolsillo trasero de tu maillot de ciclismo y adaptarte rápidamente a los cambios climáticos.")
const producto3 = new Producto(3, "Calza corta", "./images/calza-corta.png", 2590, "Lycra con 4 sentidos de estiramiento. 81% Poliester - 19% Lycra - Protección UV50+. Badana altamente anatómica. Puños de tela con silicona para proporcionar un agarre comodo y suave.")
const producto4 = new Producto(4, "Calza larga", "./images/calzas-largas.png", 2690, "Lycra con 4 sentidos de estiramiento. 81% Poliester - 19% Lycra -Protección UV50+. Badana altamente anatómica. Paneles reflectivos en parte posterior baja de la pierna.")
const producto5 = new Producto(5, "Campera térmica", "./images/nepreno-dama.png", 2790, "Campera liviana de tela firme en frente, espalda y mangas, elástica en los laterales. Con paneles reflectivos que dan mejor visibilidad en la noche y días grises. Frente y espalda: 100% Poliester impermeable. Laterales: 90% Poliester 10% Lycra.")

const productos = [producto1, producto2, producto3, producto4, producto5]

const divProductos = document.getElementById("divProductos")
const botonAlerta = document.getElementById("botonAlerta")
const botonesProductos = document.getElementsByClassName("botonesProductos")

productos.forEach(producto => {
  divProductos.innerHTML += `
    <div class="card border-primary mb-3" id="producto${producto.id}" style="max-width: 20rem;margin:4px;">
      <div class="tituloproducto">${producto.nombre}</div>
        <div class="card-body">
          <img class="imagenes" src="${producto.imagen}" alt="${producto.nombre}">
          <p class="classcatalogo">$${producto.precio}</p>
          <p class="card-text">${producto.descripcion}</p>
          <button class="btn btn-secondary botonesProductos">Agregar al carrito</button>
      </div>
    </div>
  
  `
});

function mostrarCarrito() {
  Swal.fire({
    title: 'Carrito',
    showDenyButton: true,
    showCancelButton: true,
    html:
      '<p>Productos de Carrito</p>',
    confirmButtonText: 'Finalizar Compra',
    denyButtonText: `Cancelar Compra`,
    cancelButtonText: 'Seguir comprando'
  }).then((result) => {
    if (result.isConfirmed) {   
      Swal.fire('Compra Finalizada', 'En breve se enviaran los productos', 'success')
    } else if (result.isDenied) {
      Swal.fire('¿Desea Cancelar su compra?', '', 'info')
    }
  })
}
for(let i = 0; i < botonesProductos.length; i++) {
  botonesProductos[i].addEventListener('click', () => {
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000,
      close: true,
      gravity: "top", 
      position: "right", 
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
        fontFamily: "Arial, Helvetica, sans-serif"
      },
      onClick: function(){
          mostrarCarrito()
      } 
    }).showToast();
  })
}

botonAlerta.addEventListener('click', () => {
    mostrarCarrito()
})

