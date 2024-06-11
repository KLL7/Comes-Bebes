document.addEventListener("DOMContentLoaded", function () {
  const confirmBtn = document.getElementById("confirm-btn");
  const cancelBtn = document.getElementById("cancel-btn");
  const rememberBtn = document.getElementById("remember-btn");

  // Função para verificar se os dados são iguais
  function isDataEqual(data1, data2) {
    return data1.dataName === data2.dataName &&
           data1.dataAddress === data2.dataAddress &&
           data1.dataPhone === data2.dataPhone;
  }

  // Função de confirmar dados
  function confirmBtn(event) {
    event.preventDefault();

    const newDataName = document.getElementById("name").value;
    const newDataAddress = document.getElementById("address").value;
    const newDataPhone = document.getElementById("phone").value;

    if (newDataName === "" || newDataAddress === "" || newDataPhone === "") {
      console.log("Campos em branco (lembrar de tirar isso depois)");
      return;
    }

    const currentData = {
      dataName: newDataName,
      dataAddress: newDataAddress,
      dataPhone: newDataPhone
    };

    const savedData = JSON.parse(localStorage.getItem("data"));

    if (!savedData || !isDataEqual(savedData, currentData)) {
      localStorage.setItem("data", JSON.stringify(currentData));
    }
  }

  // Função do botão de cancelar
  function cancelBtn(event) {
    event.preventDefault();
    form.reset();
  }

  // Função do bptão de lembrar dados
  function rememberBtn(event) {
    event.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("data"));

    if (savedData) {
      document.getElementById("name").value = savedData.dataName;
      document.getElementById("address").value = savedData.dataAddress;
      document.getElementById("phone").value = savedData.dataPhone;
    }
  }

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      button.classList.toggle("scale");
      setTimeout(() => {
        button.classList.toggle("scale");
      }, 250);
      
// Ativação dos botões a partir do ForEach
      if (button === confirmBtn) {
        confirmData(event);
      } else if (button === cancelBtn) {
        cancelData(event);
      } else if (button === rememberBtn) {
        rememberData(event);
      }
    });
  });
});
