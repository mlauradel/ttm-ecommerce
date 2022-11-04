import productosJSON from "./data";


const productos = JSON.parse(productosJSON)

const generarPromesa = (operation, time = 2000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(operation)
        }, time);
    })
}



export const getProducts = () => generarPromesa(productos);
export const getProductByCateg = (categ) => generarPromesa(productos[categ])
export const getProductById = (id) => {
    for(let categorias of Object.values(productos)){
        let categoria = categorias.find(e => e.id == id);
        if(categoria) {
           return categoria;
        }
      }
      return null;
  }




export default {
    getProducts,
    getProductByCateg,
    getProductById
}