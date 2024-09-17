export interface User {
    name: string
    age: number
    occupation: string
    salary?: string
}

export function infoUser(user: User): string{
    const salario = user.salary !== undefined ? user.salary : 'N/A'
    return `${user.name}, ${user.age} anos, ${user.occupation}, salário R$ ${salario}`;
}