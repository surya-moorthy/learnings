
type postInventory = {
    name : string,
    sku : string,
    quantity : string,
    recordlevel :string
}

type UpdateInventory = {
    id : string,
    name? : string,
    quantity? : string,
    recordLevel? : string
}

export async function getInventory() {
     
}
export async function postInventory( {name,quantity,recordlevel,sku} : postInventory) {
     
}
export async function updateInventoryWithId({id,name,quantity,recordLevel} : UpdateInventory) {
     
}
