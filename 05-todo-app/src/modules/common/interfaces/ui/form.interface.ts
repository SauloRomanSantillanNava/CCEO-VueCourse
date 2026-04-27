export enum FormLayout {
    horizontal = 'horizontal',
    vertical = 'vertical',
    inline = 'inline'
}

export interface FormStateLogin {
    layout: FormLayout,
    email: string,
    password: string,
};

export interface FormStateRegister {
    layout: FormLayout,
    name: string,
    email: string,
    password: string,
    repeatPassword: string,
}