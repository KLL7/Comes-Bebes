const form = document.getElementById("form");
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");
const rememberBtn = document.getElementById("remember-btn");

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

// Funções para salvar os campos no LocalStorage
  const newDataName = document.getElementById("name").value;
  const newDataAddress = document.getElementById("address").value;
  const newDataPhone = document.getElementById("phone").value;

// Dados ara serem salvos no storage
  const currentData = {
    dataName: newDataName,
    dataAddress: newDataAddress,
    dataPhone: newDataPhone
  };

  const savedData = JSON.parse(localStorage.getItem("data"));

  if (!savedData || !isDataEqual(savedData, currentData)) {
    localStorage.setItem("data", JSON.stringify(currentData));
  }
});

// Botão de cancelar (Depois eu faço algo mais legal aqui)
cancelBtn.addEventListener("click", (event) => {
  event.preventDefault();
  form.reset();
});

// Botão de relembrar
rememberBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const savedData = JSON.parse(localStorage.getItem("data"));

  if (savedData) {
    document.getElementById("name").value = savedData.dataName;
    document.getElementById("address").value = savedData.dataAddress;
    document.getElementById("phone").value = savedData.dataPhone;
  }
});

// Função para verificar se os dados são iguais
function isDataEqual(data1, data2) {
  return data1.dataName === data2.dataName &&
         data1.dataAddress === data2.dataAddress &&
         data1.dataPhone === data2.dataPhone;
}
