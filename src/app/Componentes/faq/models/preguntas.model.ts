/* Interface array objeto */

export interface Preguntas {
    pregunta: string;
    respuesta: string;
    abierto: boolean;
    toggle: () => void;
}