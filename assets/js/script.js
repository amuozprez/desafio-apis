// Función para obtener los datos del archivo JSON local
async function getData(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        document.getElementById('result').innerHTML = `Error: ${error.message}`;
    }
}

// Función para convertir la moneda
function convert() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    const file = 'mindicador.json'; // Nombre del archivo JSON local
    getData(file).then(data => {
        const value = data[currency].valor;
        const result = amount / value;
        document.getElementById('result').innerHTML = `${amount} pesos chilenos equivalen a ${result.toFixed(2)} ${data[currency].nombre}`;
    });
}
