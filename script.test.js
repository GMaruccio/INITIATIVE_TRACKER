const { ordenarCombatentes } = require('./script.js');

test('Deve ordenar os combatentes do maior para o menor valor de iniciativa', () => {
    const entrada = [
        { nome: 'Goblin', iniciativa: 5 },
        { nome: 'Herói', iniciativa: 18 },
        { nome: 'Chefe', iniciativa: 12 }
    ];

    const resultado = ordenarCombatentes(entrada);

    expect(resultado[0].nome).toBe('Herói');   
    expect(resultado[1].nome).toBe('Chefe');  
    expect(resultado[2].nome).toBe('Goblin'); 
});