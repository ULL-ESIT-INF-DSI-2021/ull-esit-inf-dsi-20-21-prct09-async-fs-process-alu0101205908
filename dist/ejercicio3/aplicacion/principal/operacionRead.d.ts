/**
 * Clase Read. Utilizada para realizar la operación de Read (leer una nota).
 * Se comprueba si existe una nota título dado. En caso negativo se mostrará un
 * mensaje de error, y en caso afirmativo, se mostrará el titulo de acuerdo al color
 * que especifica la nota, y se mostrará el texto que tiene la misma.
 */
export declare class Read {
    private rutaFichero;
    private titulo;
    private nota;
    private texto;
    /**
     * Constructor de la clase Read.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     */
    constructor(usuario: string, titulo: string);
    /**
     * Método comprobarNotaExistente. Se comprueba si la nota con el título dado existe.
     * En caso negativo se lanzará un mensaje de ERROR.
     * @param titulo Título de la nota.
     * @returns SE retornará un 0 en caso de que la
     */
    comprobarNotaExistente(titulo: string): number;
    /**
     * Método tituloNota. Se utiliza para mostrar el título de la nota de acuerdo al color
     * que se especifica en la misma.
     */
    tituloNota(): void;
    /**
     * Método textoNota. Se utiliza para mostrar el texto de la nota.
     */
    textoNota(): void;
}
