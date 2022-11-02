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

