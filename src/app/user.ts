import { Address } from "./address";

export class User {
    constructor(public name:string,
        public email:string,
        public mobile:Number,
        public gender:string,
        public favouritePokemon:string,
        public subscribe:boolean,
        public address:Address
        ){}
}
