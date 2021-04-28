/**
 * Clase Remove. Utilizada para realizar la operación de Remove (eliminar una nota).
 * Se comprueba si existe una nota título dado. En caso negativo se mostrará un
 * mensaje de error, y en caso afirmativo, se eliminará la nota.
 */
export declare class Remove {
    private rutaFichero;
    /**
     * Constructor de la clase Remove.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     */
    constructor(usuario: string, titulo: string);
    /**
     * Método comprobarNotaExistente. Se utiliza para comprobar si la nota con el título
     * dado existe o no.
     * @param titulo Título de la nota a eliminar.
     * @returns SE retornará un 0 si la nota existe, o, un 1 en caso de que no exista.
     */
    comprobarNotaExistente(titulo: string): number;
}
