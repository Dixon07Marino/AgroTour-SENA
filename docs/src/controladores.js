async function login(req,res){
    console.log(req.body)
}

async function register(req,res){
    try {
        // Extracción de datos del cuerpo de la solicitud
        const { user, email, password } = req.body;

        // Validar que todos los campos estén presentes
        if (!user || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son necesarios' });
        }

        // Verificar si ya existe un usuario con el mismo correo
        const usuarioExistente = await Usuario.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.status(400).json({ error: 'Este correo ya está registrado' });
        }

        // Crear nuevo usuario en la base de datos
        const nuevoUsuario = await Usuario.create({
            user,
            remail,
            passwod  // En una aplicación real deberías encriptar la contraseña antes de guardarla
        });

        // Responder con los datos del nuevo usuario (o un mensaje de éxito)
        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            usuario: {
                id: nuevoUsuario.id,
                user: nuevoUsuario.user,
                email: nuevoUsuario.email
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al registrar el usuario' });
    }
}

export const metodos ={
    login,
    register
}
