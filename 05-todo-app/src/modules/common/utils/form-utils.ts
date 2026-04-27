export const formRules = {
    emailRules: [
        {
            required: true,
            message: 'El correo electrónico es obligatorio',
        },
        {
            type: 'email',
            message: 'Ingresa un correo electrónico válido',
        },
    ],

    passwordRules: [
        {
            required: true,
            message: 'La contraseña es obligatoria',
        },
        {
            min: 8,
            message: 'La contraseña debe tener al menos 8 caracteres',
        },
        {
            pattern: /^(?=.*[A-Za-z])(?=.*\d).+$/,
            message: 'Debe contener al menos una letra y un número',
        },
    ],

    nameRules: [
        {
            required: true,
            message: 'El nombre es obligatorio',
        },
        {
            min: 3,
            message: 'El nombre debe tener al menos 3 caracteres',
        },
    ],

    repeatPasswordRules: (password: string) => [
        {
            required: true,
            message: 'Debes confirmar la contraseña',
        },
        {
            validator(_: unknown, value: string) {
                if (!value) {
                    return Promise.reject('Debes confirmar la contraseña');
                }

                if (value !== password) {
                    return Promise.reject('Las contraseñas no coinciden');
                }

                return Promise.resolve();
            },
        },
    ],
};
