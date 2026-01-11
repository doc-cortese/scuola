function controllaAccesso() {
    const passInserita = document.getElementById('pass-docente').value;
    
    // Questa è la parola "adinolfi2026" codificata in Base64
    const passSegreta = "YWRpbm9sZmkyMDI2"; 

    if (btoa(passInserita) === passSegreta) {
        document.getElementById('schermata-manutenzione').style.display = 'none';
        sessionStorage.setItem('ok', 'true');
        // Reset del blocco timer solo per il docente
        const urlParams = new URLSearchParams(window.location.search);
        const cl = urlParams.get('classe') || 'default';
        const classKey = cl.charAt(0).toUpperCase() + cl.slice(1);
        localStorage.removeItem(`timer_${classKey}`); 
        
        console.log("Timer resettato per il docente.");
    } else {
        alert("Password errata!");
    }
}
