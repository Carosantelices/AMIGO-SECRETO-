const amigos = [];
const nameGrid = document.getElementById("nameGrid");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre) return alert("Por favor, ingrese un nombre.");
    if (amigos.includes(nombre)) return alert("Este nombre ya está en la lista.");

    amigos.push(nombre);
    input.value = "";
    actualizarNombres();
}

function actualizarNombres() {
    nameGrid.innerHTML = "";
    amigos.forEach((nombre) => {
        const nameItem = document.createElement("div");
        nameItem.className = "name-item";
        nameItem.textContent = nombre;
        nameGrid.appendChild(nameItem);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        return alert("Debe haber al menos dos nombres para realizar el sorteo.");
    }
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    resultText.innerHTML = `<p>🎉 <strong>Tu amigo secreto es:</strong></p> <h1>${ganador}</h1> 🎉`;
    resultContainer.classList.remove("hidden");
}

function votarOtraVez() {
    resultContainer.classList.add("hidden");
}

function reiniciarTodo() {
    amigos.length = 0;
    actualizarNombres();
    resultContainer.classList.add("hidden");
}

