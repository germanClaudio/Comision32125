
class Usuario {
    constructor(nombre, apellido, libros=[], mascota=[]) {   
        this.nombre = nombre;
        this.apellido = apellido;
        this.libro = libros;                         
        this.mascota = mascota;
    }
    
    getFullName() {
        console.log(`Nombre completo: ${this.apellido}, ${this.nombre} `);
    }

    getBooks() {
        let arrBooks = this.libro;
        
        for (let i = 0; i < arrBooks.length; i++) {
            console.log(`Libro Agregado Titulo: ${arrBooks[i].titulo} - Autor: ${arrBooks[i].autor}`)
        }
        console.log(`Cantidad de Libros: ${arrBooks.length}`)
    }

    addPets() {
        this.mascota.forEach((mascota, index) => {
            console.log(`Nombre Mascota: ${this.mascota.slice(index, index+1)}`)
        });
    }

    countPets() {
        console.log(`Cantidad Mascotas: ${this.mascota.length}`)
    }
}

const usuario = new Usuario('Juan', 'De los Palotes',
                                [{ titulo: "Lord of the rings Community Ring", autor: "J. R. R. Tolkien" },
                                 { titulo: "Lord of the rings Two Towers", autor: "J. R. R. Tolkien" },
                                 { titulo: "Como vivir bien... pero sin laburar", autor: "M. K." },
                                 { titulo: "Te fuiste a la B por put.. y cag...", autor: "Riber" },
                                ],
                                ["Spike", "Michi", "Oliver", "Domingo", "Kantropus"]
                            );

usuario.getFullName()
usuario.getBooks()
usuario.addPets()
usuario.countPets()