function addExpense() {
    var expenseAmount = document.getElementById('expenseAmount').value;
    var description = document.getElementById('description').value;
    var category = document.getElementById('category').value;

    var newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${expenseAmount}</td>
      <td>${description}</td>
      <td>${category}</td>
      <td>
        <button type="button" class="btn btn-primary btn-sm" onclick="editExpense(this)">Edit</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="deleteExpense(this)">Delete</button>
      </td>
    `;

    document.getElementById('expenseTableBody').appendChild(newRow);
  }

  function editExpense(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    var expenseAmount = cells[0].innerText;
    var description = cells[1].innerText;
    var category = cells[2].innerText;

    document.getElementById('expenseAmount').value = expenseAmount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;

    row.remove();
  }

  function deleteExpense(button) {
    var row = button.parentNode.parentNode;
    row.remove();
  }