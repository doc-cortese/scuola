function controllaAccesso() {
    const passInput = document.getElementById('pass-docente').value;
    // Parola "adinolfi2026" codificata in Base64
    const passSegreta = "YWRpbm9sZmkyMDI2"; 

    if (btoa(passInput) === passSegreta) {
        // Salva l'accesso nella sessione corrente
        sessionStorage.setItem('ok', 'true');
        
        // Nascondi manualmente prima del ricaricamento
        const schermata = document.getElementById('schermata-manutenzione');
        if (schermata) schermata.style.display = 'none';
        
        // Forza il ricaricamento per applicare i cambiamenti
        window.location.reload(); 
    } else { 
        alert("Password errata!"); 
    }
}
