/**
 * Class Modify. Utilizada para realizar la operación de Modify (modifica la nota de un
 * usuario dado el título). Se comprueba si la nota dada por el usuario existe, en caso
 * negativo se mostrará un mensaje de ERROR. Si la nota existe se borrará y se procederá
 * a invocar a la operación Add, pasandole las especificaciones indicadas en el comando
 * modify.
 */
export declare class Modify {
    private rutaFichero;
    /**
     * Constructor de la clase Modify.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     * @param texto Texto que contendrá la nota.
     * @param color Color que tendrá el título de la nota.
     */
    constructor(usuario: string, titulo: string, texto: string, color: string);
    /**
     * Método comprobarNotaExistente. Se comprueba si la nota existe, en caso afirmativo,
     * se borrará, y en caso negativo se lanzará un mensaje de ERROR.
     * @param titulo
     * @returns
     */
    comprobarNotaExistente(titulo: string): number;
}
