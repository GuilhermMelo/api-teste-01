import { neon } from "@neondatabase/serverless"
const sql = neon("postgresql://NFX_owner:npg_ylZmM4Go7tND@ep-red-queen-a5eu6uep-pooler.us-east-2.aws.neon.tech/NFX?sslmode=require")
const authRepository = {

    async getAllUsers() {

        const result = await sql`SELECT * FROM usuarios`
        return result

    },
    async createUser(nome, login, senha) {
        return await sql`INSERT INTO usuarios (nome,login,senha)
         VALUES(${nome},${login},${senha})`
    },

    async verificaUsuario(login) {
            const verifLogin = await sql`SELECT * FROM usuarios WHERE login = ${login}`
            return verifLogin
        }
    
}

export default authRepository