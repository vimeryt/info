const Dispatcher = document.getElementById('doc');

export default class PropertySelector {
    constructor(el) {
        this.el = el;

        this.el.addEventListener('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];

            this.dispatchEvent(type, value)
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });
        // Pub/Sub
        Dispatcher.dispatchEvent(event);
    }
}
