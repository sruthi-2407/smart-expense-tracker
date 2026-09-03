const addTransactionBtn = document.getElementById("addTransaction");

addTransactionBtn.addEventListener("click", function () {

    const description = document.getElementById("description").value;
    const amount = Number(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (description === "" || amount <= 0) {
        alert("Please enter description and amount");
        return;
    }

    const transactionList = document.getElementById("transactionList");

    transactionList.innerHTML = "";

    const transaction = document.createElement("p");

    transaction.textContent =
        type === "income"
        ? `💰 ${description} + ₹${amount}`
        : `💸 ${description} - ₹${amount}`;

    transactionList.appendChild(transaction);

});