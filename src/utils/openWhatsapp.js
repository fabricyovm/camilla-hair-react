function openWhatsapp() {
    const message = "Olá, gostaria de agendar um horário!"
    const whatsappURL = `https://wa.me/5551994082005?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}

export default openWhatsapp;