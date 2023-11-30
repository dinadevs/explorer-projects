const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUsers = await database.get(
      "SELECT * FROM users WHERE email = (?)",
      [email]
    );

    if (checkUsers) {
      throw new AppError("Este e-mail já está em uso!");
    }

    const hashePassword = await hash(password, 8);

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashePassword]
    );

    return response
      .status(201)
      .json({ message: "Usuário criado com sucesso!" });
  }
}

module.exports = UsersController;
