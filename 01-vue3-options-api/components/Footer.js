app.component('footer-banco', {
    props: ['cantidad', 'fecha'],
    template: `
        <footer class="bg-dark p-3 mt-2 text-white">
            <h3>{{texto}} - {{cantidad}}</h3>
            <p>Fecha: {{fecha}}</p>
        </footer>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web',
        }
    },
})