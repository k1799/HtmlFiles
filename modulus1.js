import { check } from "./modulus.js";
check("20")
.then(res => console.log(res))
.catch(eror => console.log(eror));