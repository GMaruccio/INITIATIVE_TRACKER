let combatentes = [];

// Função pura de ordenação (ideal para testes unitários)
function ordenarCombatentes(lista) {
    return [...lista].sort((a, b) => b.iniciativa - a.iniciativa);
}

function adicionarCombatente() {
    const nome = document.getElementById('nome').value;
    const iniciativa = document.getElementById('iniciativa').value;
    const ca = document.getElementById('ca').value;
    const hp = document.getElementById('hp').value;

    if (!nome || !iniciativa) {
        alert('Nome e Iniciativa são campos obrigatórios!');
        return;
    }

    combatentes.push({
        id: Date.now(),
        nome: nome,
        iniciativa: parseInt(iniciativa),
        ca: ca || '-',
        hp: hp || '-'
    });

    combatentes = ordenarCombatentes(combatentes);

    limparFormulario();
    renderizarLista();
}

function removerCombatente(id) {
    combatentes = combatentes.filter(c => c.id !== id);
    renderizarLista();
}

function renderizarLista() {
    const tbody = document.getElementById('lista-combate');
    tbody.innerHTML = '';

    combatentes.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${c.iniciativa}</strong></td>
            <td>${c.nome}</td>
            <td>${c.ca}</td>
            <td>${c.hp}</td>
            <td><button class="btn-remover" onclick="removerCombatente(${c.id})">X</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('iniciativa').value = '';
    document.getElementById('ca').value = '';
    document.getElementById('hp').value = '';
    document.getElementById('nome').focus();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ordenarCombatentes };
}