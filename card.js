export function Card(title, description) {
  this.getTime = function () {
    return new Date().toLocaleString();
  };

  this.title = title;
  this.description = description;

  this.getHtml = function () {
    return `<div class="card text-dark bg-light mb-3" style="max-width: 18rem;">
    <div class="card-header">${this.getTime()}</div>
    <div class="card-body">
      <h5 class="card-title">${this.title}</h5>
      <p class="card-text">${this.description}</p>
    </div>
    </div>`;
  };
}
