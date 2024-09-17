import { Diretor } from "./funcionarios";
import { User } from "./User";

export type funcionarioDiretor = Diretor | User

export function details(user: funcionarioDiretor ): string{
    if('commissioning' in user){
        const salario = user.salary !== undefined ? user.salary : 'N/A'
        return `Diretor(a) ${user.name}, ${user.age} anos, comissão nivel ${user.commissioning}, salário R$ ${salario}`; 
    } else {
        const salario = user.salary !== undefined ? user.salary : 'N/A'
        return `${user.name}, ${user.age} anos, ${user.occupation}, salário R$ ${salario}`;
    }
}