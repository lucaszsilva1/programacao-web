document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const btnLimpar = document.getElementById("btnLimpar");
  const userList = document.getElementById("userList");
  const btnExcluirTodos = document.getElementById("btnExcluirTodos");
  const searchInput = document.getElementById("search");
  const btnPesquisar = document.getElementById("btnPesquisar");

  const STORAGE_KEY = "admin_users";

  // Load users on startup
  renderUsers();

  // Add User
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();

    if (nome && email) {
      const newUser = {
        nome,
        email,
        data: new Date().toLocaleString("pt-BR"),
      };
      saveUser(newUser);
      userForm.reset();
      renderUsers();
    }
  });

  // Clear Form
  btnLimpar.addEventListener("click", () => {
    userForm.reset();
  });

  // Delete All
  btnExcluirTodos.addEventListener("click", () => {
    if (confirm("Tem certeza que deseja excluir todos os usuários?")) {
      localStorage.removeItem(STORAGE_KEY);
      renderUsers();
    }
  });

  // Search
  btnPesquisar.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    renderUsers(query);
  });

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    renderUsers(query);
  });

  // Functions
  function getUsers() {
    const users = localStorage.getItem(STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  }

  function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  }

  function deleteUser(index) {
    const users = getUsers();
    users.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    renderUsers(searchInput.value.toLowerCase());
  }

  function renderUsers(filter = "") {
    const users = getUsers();
    userList.innerHTML = "";

    const filteredUsers = users
      .map((user, index) => ({ ...user, originalIndex: index }))
      .filter(
        (user) =>
          user.nome.toLowerCase().includes(filter) ||
          user.email.toLowerCase().includes(filter)
      );

    if (filteredUsers.length === 0) {
      userList.innerHTML =
        '<li style="text-align: center; padding: 1rem; color: var(--color-text-secondary);">Nenhum usuário encontrado.</li>';
      return;
    }

    filteredUsers.forEach((user) => {
      const li = document.createElement("li");
      li.style.cssText =
        "background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 8px; padding: 1rem; margin-bottom: 0.5rem; display: flex; justify-content: space-between; align-items: center;";

      li.innerHTML = `
                <div>
                    <strong>${user.nome}</strong> <br>
                    <span style="font-size: 0.9rem; color: #6c757d;">${user.email}</span> <br>
                    <span style="font-size: 0.8rem; color: #adb5bd;">Cadastrado em: ${user.data}</span>
                </div>
                <button class="btn-delete" style="background: var(--color-error); color: white; border: none; border-radius: 4px; padding: 0.5rem 1rem; cursor: pointer;">Excluir</button>
            `;

      const btnDelete = li.querySelector(".btn-delete");
      btnDelete.addEventListener("click", () => {
        if (confirm(`Excluir ${user.nome}?`)) {
          deleteUser(user.originalIndex);
        }
      });

      userList.appendChild(li);
    });
  }
});
