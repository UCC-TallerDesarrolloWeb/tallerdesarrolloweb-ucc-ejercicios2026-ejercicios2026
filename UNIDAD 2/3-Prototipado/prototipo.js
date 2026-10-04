(function (root) {
    function addProduct(order, product) {
        const next = order.map(item => ({ ...item }));
        const existing = next.find(item => item.name === product.name);

        if (existing) {
            existing.quantity += 1;
        } else {
            next.push({ ...product, quantity: 1 });
        }

        return next;
    }

    function getTotal(order) {
        return order.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    function validateCustomer(customer) {
        return ["name", "phone", "address", "payment"].filter(field => !customer[field]?.trim());
    }

    const api = { addProduct, getTotal, validateCustomer };

    if (typeof module !== "undefined" && module.exports) {
        module.exports = api;
    }

    if (typeof document === "undefined") return;

    let order = [];
    const list = document.querySelector("#pedido-lista");
    const total = document.querySelector("#pedido-total");
    const status = document.querySelector("#pedido-estado");
    const form = document.querySelector("#pedido-form");

    const currency = value => new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(value);

    function renderOrder() {
        list.innerHTML = "";

        if (order.length === 0) {
            list.innerHTML = "<li>Todavia no agregaste productos.</li>";
        } else {
            order.forEach(item => {
                const row = document.createElement("li");
                row.textContent = `${item.name} x${item.quantity} - ${currency(item.price * item.quantity)}`;
                list.appendChild(row);
            });
        }

        total.textContent = currency(getTotal(order));
    }

    document.querySelectorAll("[data-product]").forEach(button => {
        button.addEventListener("click", () => {
            order = addProduct(order, {
                name: button.dataset.product,
                price: Number(button.dataset.price)
            });
            renderOrder();
            status.textContent = `${button.dataset.product} se agrego al pedido.`;
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        const data = new FormData(form);
        const missing = validateCustomer({
            name: data.get("name"),
            phone: data.get("phone"),
            address: data.get("address"),
            payment: data.get("payment")
        });

        if (order.length === 0) {
            status.textContent = "Agrega al menos un producto antes de confirmar.";
            return;
        }

        if (missing.length > 0) {
            status.textContent = "Completa todos los campos obligatorios y el metodo de pago.";
            return;
        }

        status.textContent = "Pedido confirmado. Nos comunicaremos para coordinar la entrega.";
        form.reset();
        order = [];
        renderOrder();
    });

    renderOrder();
}(typeof globalThis !== "undefined" ? globalThis : this));
