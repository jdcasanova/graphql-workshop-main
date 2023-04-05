# GraphQL Workshop

## Ejercicio 1:

### Creación de un esquema básico

Define un esquema GraphQL que tenga los siguientes tipos de objetos: Author y Book.
Cada Author tiene un nombre, una lista de libros, y como campo opcional la bio, cada Book tiene un título, un autor, una fecha de publicación y como campo opcional una descripción.

---

## Ejercicio 2:

### Definición de resolvers

Escribe resolvers para los tipos de objetos definidos en el ejercicio anterior, es decir, crea las relaciones entre los tipos Book y Author.
Los resolvers deben usar los datos del archivo data.js que contiene la información de los libros y autores.

---

## Ejercicio 3:

### Crea Query y Mutations

Escribe un nuevo tipo Query para los siguientes casos:

-   Obtener un libro
-   Obtener todos los libros
-   Obtener un autor
-   Obtener varios autores
-   Obtener todos los libros de un autor específico

Escribe un nuevo tipo Mutation para los siguientes casos:

-   Agregar un nuevo autor
-   Agregar un nuevo libro

Y con los tipos creados, crea las funciones necesarias para que funcione en los resolvers.

---

## Ejercicio 4:

### Crear las consultas y mutaciones

Levanta el servidor y, desde el playground crea las consultas necesarios para probar todas las queries y mutations creadas anteriormente.
Si es necesario puedes utilizar fragments o aliases.
