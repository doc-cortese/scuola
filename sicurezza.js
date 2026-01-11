function controllaAccesso() {
    const passInserita = document.getElementById('pass-docente').value;
    
    // Questa è la parola "adinolfi2026" codificata in Base64
    const passSegreta = "YWRpbm9sZmkyMDI2"; 

    if (btoa(passInserita) === passSegreta) {
        document.getElementById('schermata-manutenzione').style.display = 'none';
        sessionStorage.setItem('ok', 'true');
        // AGGIUNGI QUESTA RIGA PER RESETTARE IL TIMER:
        localStorage.clear(); 
    } else {
        alert("Password errata!");
    }
}
