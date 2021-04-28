/**
 * Clase Add. Utilizada para realizar la operación de Add (agregar una nueva nota).
 * Se comprueba si el usuario es nuevo o no, y en caso negativo, se creará el directorio
 * donde se alojarán sus notas. Se comprueba si ya existe una nota con el mismo título
 * para el usuario dado, y en caso afirmativo se lanzará un mensaje de ERROR. Se comprueba
 * si el color introducido está disponible (rojo | azul | verde | amarillo). En caso de que
 * cumpla todas las comprobaciones, se añadirá una nueva nota al directorio del usuario.
 */
export declare class Add {
    private nota;
    private ruta;
    private rutaFichero;
    /**
     * Constructor de la clase Add.
     * @param usuario Usuario dueño de la nota.
     * @param titulo Título de la nota.
     * @param texto Texto que contendrá la nota.
     * @param color Color que tendrá el título de la nota.
     */
    constructor(usuario: string, titulo: string, texto: string, color: string);
    /**
     * Método comprobarNotaExistente. Se comprueba si ya existe una nota con el mismo título.
     * @param titulo Título de la nota a añadir.
     * @returns Retorna un 0 si hay ya una nota con ese título, o, un 1 en caso contrario.
     */
    comprobarNotaExistente(titulo: string): number;
    /**
     * Método esNuevoUsuario. Se comprueba si el usuario ya tiene un directorio creado o no.
     * @param usuario Usuario propietario de la nota.
     * @returns Retorna un 0 si hay ya un usuario con ese nombre, o, un 1 en caso contrario.
     */
    esNuevoUsuario(usuario: string): number;
    /**
     * Método comprobarColor. Se comprueba si el color para el título está disponible o no.
     * @param color Color para el título.
     * @returns Retorna un 0 si el color no está disponible, o, un 1 en caso contrario.
     */
    comprobarColor(color: string): number;
    /**
     * Método addNota. Utilizado para crear la nota del usuario.
     */
    addNota(): void;
}
