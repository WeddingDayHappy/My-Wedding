AOS.init();

function copyAccountNumber(accountNumber) {
    const textarea = document.createElement('textarea');
    textarea.value = accountNumber;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Nomor rekening disalin: ' + accountNumber);
}

