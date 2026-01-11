function controllaAccesso() {
    const passInput = document.getElementById('pass-docente').value;
    const oggi = new Date().toISOString().split('T')[0];
    const passSegreta = "YWRpbm9sZmkyMDI2"; 

    if (btoa(passInput) === passSegreta) {
        const urlParams = new URLSearchParams(window.location.search);
        const cl = urlParams.get('classe') || 'default';
        const classKey = cl.charAt(0).toUpperCase() + cl.slice(1);
        
        // Pulizia dati vecchi
        localStorage.removeItem(`timer_${classKey}_${oggi}`);
        localStorage.removeItem(`tracciaAssegnata_${classKey}_${oggi}`);
        
        // Segnale di accesso autorizzato
        sessionStorage.setItem('ok', 'true');
        
        // Nascondi la schermata PRIMA del reload o evita il reload se già in OK
        document.getElementById('schermata-manutenzione').style.display = 'none';
        
        // Opzionale: aggiungi un piccolo ritardo per assicurarti che il sessionStorage venga scritto
        setTimeout(() => {
            window.location.reload(); 
        }, 100);
    } else { 
        alert("Password errata!"); 
    }
}
