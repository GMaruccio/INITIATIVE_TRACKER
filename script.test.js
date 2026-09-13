const { ordenarCombatentes } = require('./script.js');

test('Deve ordenar os combatentes do maior para o menor valor de iniciativa', () => {
    const entrada = [
        { nome: 'Gum Gum, O Bonzinho', iniciativa: 5 },
        { nome: 'Tanika Paisha', iniciativa: 18 },
        { nome: 'Rainha dos ladrões', iniciativa: 12 }
    ];

    const resultado = ordenarCombatentes(entrada);

    expect(resultado[0].nome).toBe('Tanika Paisha');   
    expect(resultado[1].nome).toBe('Rainha dos ladrões');  
    expect(resultado[2].nome).toBe('Gum Gum, O Bonzinho'); 
});