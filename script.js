function convertToYears(value) {
    const years = value / 12;
    document.getElementById('years').innerHTML = ` Tempo de Empréstimo: ${years.toFixed(1)} anos`;
}

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months are 0-based.
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
}
function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerms = parseFloat(document.getElementById('loan-terms').value);

    const installment = (interestRate * loanAmount) / (1 - Math.pow(1 + interestRate, -loanTerms));
    
    const formattedInstallment = installment.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('result').innerHTML = `Valor da Parcela: ${formattedInstallment}`;

    // Calculating end date
    let startDate = new Date(document.getElementById('start-date').value);
    startDate.setMonth(startDate.getMonth() + loanTerms);
    document.getElementById('end-date').innerHTML = `Data de Término: ${formatDate(startDate)}`;
}