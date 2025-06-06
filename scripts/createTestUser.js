const User = require('../models/User');

(async () => {
  try {
    const user = await User.create({
      name: 'Usuário Teste',
      email: 'teste@email.com',
      password: '123456'
    });
    console.log('Usuário criado:', user);
  } catch (err) {
    console.error('Erro ao criar usuário:', err.message);
  } finally {
    process.exit();
  }
})(); 