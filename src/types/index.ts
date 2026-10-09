export interface User{
    id:number
    username:string
    token:string
    role:string
}

export interface Good{
    id:number
    name:string
    price:number
    img:string
}
export interface Cart extends Good{
    count:number
}
