export class favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
  }

  load() {
    this.entries = [
        {
          login: "SeveroDeveloper",
          name: "Amanda Severo",
          public_repos: "23",
          followers: "120",
        },
        {
          login: "ondanieldev",
          name: "Daniel Oliveira",
          public_repos: "23",
          followers: "120",
        },
      ];
  }

}

export class FavoritesView extends favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeALLTr();

    this.entries.forEach(user => {
        const row = this.createRow()

        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user img').alt = `Imagem de ${user.name}`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.followers').textContent = user.followers

        this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `
   
    <td class="user">
        <img src="https://github.com/dinadevs.png" alt="imagem Edna ">
        <a href="https://github.com/dinadevs" target="_blank">
            <p>Edna Martins</p>
            <span>dinadevs</span>
        </a>
    </td>
    <td class="repositories"></td>
    <td class="followers"></td>
    <td>
        <button>&times;</button>
    </td>
    `;

    return tr;
  }

  removeALLTr() {
    
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
