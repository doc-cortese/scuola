function controllaAccesso() {
    const passInput = document.getElementById('pass-docente').value;
    const oggi = new Date().toISOString().split('T')[0]; // Identifica il giorno corrente
    // Questa è la parola "adinolfi2026" codificata in Base64
    const passSegreta = "YWRpbm9sZmkyMDI2"; 
    if (btoa(passInput) === passSegreta) {
        // Rimuove il blocco timer specifico di oggi per la classe corrente
        const urlParams = new URLSearchParams(window.location.search);
        const cl = urlParams.get('classe') || 'default';
        const classKey = cl.charAt(0).toUpperCase() + cl.slice(1);
        
        // Pulisce forzatamente localStorage e sessionStorage per Edge
        localStorage.removeItem(`timer_${classKey}_${oggi}`);
        localStorage.removeItem(`tracciaAssegnata_${classKey}_${oggi}`);
        sessionStorage.setItem('ok', 'true');
        
        document.getElementById('schermata-manutenzione').style.display = 'none';
        
        // Forza il ricaricamento pulito della pagina
        window.location.reload(); 
    } else { 
        alert("Password errata!"); 
    }
}
