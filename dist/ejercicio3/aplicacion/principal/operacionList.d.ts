/**
 * Clase List. Utilizada para realizar la operación de List (listar las notas de un
 * usuario). Se comprueba si el usuario tiene notas o no, y en caso afirmativo se
 * muestran los títulos de las notas en el color indicado en la misma.
 */
export declare class List {
    private listaNotas;
    private ruta;
    /**
     * Constructor de la clase List.
     * @param usuario Usuario dueño de la/las nota/s.
     */
    constructor(usuario: string);
    /**
     * Método comprobarNotas. Se lee el directorio del usuario y se almacenan en un array
     * los títulos de las notas. Se comprueba si el array está vacío, lo que indicaría que
     * el usuario no tiene notas, y en caso contrario, se comprobará el color que se indica
     * en la nota y se mostrará por la terminal el título con el color específico.
     */
    comprobarNotas(): void;
}
