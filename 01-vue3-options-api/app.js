const app = Vue.createApp({
    data() {
        return {
            titulo: 'Hola Mundo',
            cantidad: 0,
            enlace: 'https://google.com',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros'],
            desactivar: true
        }
    },
    methods: {
        agregarSaldo(saldo) {
            this.cantidad += saldo;
            this.desactivar = false
        },
        disminuirSaldo(saldo) {
            if (!this.cantidad) {
                this.desactivar = true
                alert('saldo en 0')
                return
            }
            this.cantidad -= saldo
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase()
        }
    }
})
