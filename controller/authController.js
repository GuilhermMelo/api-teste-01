import authRepository from "../repository/authRepository.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const authController = {
    async getAllUsers(request, reply) {
        let usuarios = await authRepository.getAllUsers()
        return usuarios

    },
    async createUser(request, reply) {

        const { nome, login, senha } = request.body
        console.log("Login informado: " + login)
        const verificaLogin = await authRepository.verificaUsuario(login)
        console.log("Verifica Login");
        console.log(verificaLogin)
        if (verificaLogin.length > 0) {
            return { message: "Login ja esta em uso." }
        }

        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        const usuario = await authRepository.createUser(nome, login, senhaCriptografada)
        return { message: 'Suecesso' }

    }
}

export default authController