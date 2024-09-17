export interface Diretor {
    name: string
    age: number
    commissioning: number
    salary?: string
}

export function infoDiretor(user: Diretor): string{
    const salario = user.salary !== undefined ? user.salary : 'N/A'
    return `Diretor(a) ${user.name}, ${user.age} anos, comissão nivel ${user.commissioning}, salário R$ ${salario}`;
}