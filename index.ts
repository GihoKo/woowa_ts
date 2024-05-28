interface Pet {
    name: string;
}

interface Cat {
    name: string;
    age: number;
}

let pet: Pet;
let cat: Cat = { name: "Tom", age: 7 };

pet = cat; // OK
