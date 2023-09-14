export enum Raza {
    Saiyan = "Saiyan", Humano = "Humano", Namekiano = "Namekiano"
}

export interface Hero {
    nombre: string,
    vuela: boolean,
    raza: Raza
}
