function calcularCategoria() {

    const actividad = document.getElementById("actividad").value;
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const superficie = parseFloat(document.getElementById("superficie").value);

    if (!ingresos || !superficie) {
        document.getElementById("resultado").innerHTML =
            "Por favor complete todos los campos.";
        return;
    }

    const categorias = [
        { cat: "A", maxIng: 10277988.13, maxSup: 30, serv: 42386.74, venta: 42386.74 },
        { cat: "B", maxIng: 15058447.71, maxSup: 45, serv: 48250.78, venta: 48250.78 },
        { cat: "C", maxIng: 21113696.52, maxSup: 60, serv: 56501.85, venta: 55227.06 },
        { cat: "D", maxIng: 26212853.42, maxSup: 85, serv: 72414.10, venta: 70661.26 },
        { cat: "E", maxIng: 30833964.37, maxSup: 110, serv: 102537.97, venta: 92658.35 },
        { cat: "F", maxIng: 38642048.36, maxSup: 150, serv: 129045.32, venta: 111198.27 },
        { cat: "G", maxIng: 46211109.37, maxSup: 200, serv: 197108.23, venta: 135918.34 },
        { cat: "H", maxIng: 70113407.33, maxSup: 200, serv: 447346.93, venta: 272063.40 },
        { cat: "I", maxIng: 78479211.62, maxSup: 200, serv: 824802.26, venta: 406512.05 },
        { cat: "J", maxIng: 89872640.30, maxSup: 200, serv: 999007.65, venta: 497059.41 },
        { cat: "K", maxIng: 108357084.05, maxSup: 200, serv: 1381687.90, venta: 600879.51 }
    ];

    let encontrada = categorias.find(c =>
        ingresos <= c.maxIng && superficie <= c.maxSup
    );

    if (!encontrada) {
        document.getElementById("resultado").innerHTML =
            "No encuadra en el régimen de Monotributo.";
        return;
    }

    let monto = actividad === "servicios"
        ? encontrada.serv
        : encontrada.venta;

    document.getElementById("resultado").innerHTML =
        `Categoría: ${encontrada.cat} <br>
         Monto mensual estimado: $${monto.toLocaleString()}`;
}