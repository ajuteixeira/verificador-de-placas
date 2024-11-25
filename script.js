function checkPlate() {
  const plate = document.getElementById('plate').value.toUpperCase();
  const msg = document.getElementById('msg');

  // Verifica se o input recebeu pelo menos 3 caracteres
  if (plate.length < 3) {
    msg.textContent = 'Placa inválida';
    msg.style.color = 'red';
    return;
  }

  const firstChars = plate.slice(0, 3);

  // Verifica se os 3 primeiros caracteres são letras
  if (!/^[A-Z]{3}$/.test(firstChars)) {
    msg.textContent = 'Placa inválida';
    msg.style.color = 'red';
    return;
  }

  // Verifica se os 3 primeiros caracteres são compatíveis com algum estado
  if (
    (firstChars >= 'JXZ' && firstChars <= 'KAU') ||
    (firstChars >= 'NIY' && firstChars <= 'NJW') ||
    (firstChars >= 'NPC' && firstChars <= 'NPQ') ||
    (firstChars >= 'NTX' && firstChars <= 'NUG') ||
    (firstChars >= 'OAP' && firstChars <= 'OBS') ||
    (firstChars >= 'QBA' && firstChars <= 'QCZ') ||
    (firstChars >= 'RAK' && firstChars <= 'RAZ') ||
    (firstChars >= 'RRI' && firstChars <= 'RRZ')
  ) {
    msg.textContent = 'Mato Grosso';
    msg.style.color = 'green';
  }
  if (
    (firstChars >= 'HQF' && firstChars <= 'HTW') ||
    (firstChars >= 'NRF' && firstChars <= 'NSD') ||
    (firstChars >= 'OOG' && firstChars <= 'OOU') ||
    (firstChars >= 'QAA' && firstChars <= 'QAZ') ||
    (firstChars >= 'REW' && firstChars <= 'REZ') ||
    (firstChars >= 'RWA' && firstChars <= 'RWJ')
  ) {
    msg.textContent = 'Mato Grosso do Sul';
    msg.style.color = 'green';
  }
  if (
    (firstChars >= 'MVL' && firstChars <= 'MXG') ||
    (firstChars >= 'OLH' && firstChars <= 'OLN') ||
    (firstChars >= 'OYA' && firstChars <= 'OYC') ||
    (firstChars >= 'QKA' && firstChars <= 'QKM') ||
    (firstChars >= 'QWA' && firstChars <= 'QWF') ||
    (firstChars >= 'RSA' && firstChars <= 'RSF')
  ) {
    msg.textContent = 'Tocantins';
    msg.style.color = 'green';
  } else {
    msg.textContent = 'A placa digitada não pertence aos estados';
    msg.style.color = 'orange';
  }
}
