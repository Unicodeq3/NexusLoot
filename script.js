// Массив предметов
let items = [];

// Элементы DOM
const filter = document.getElementById('filter');
const itemsList = document.getElementById('items');
const addButton = document.getElementById('add');

// Функция для отображения списка предметов
function renderItems() {
  itemsList.innerHTML = '';
  for (let item of items) {
    // Проверяем, соответствует ли предмет фильтру
    if (item.name.toLowerCase().includes(filter.value.toLowerCase())) {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = 'Loot';
      button.addEventListener('click', () => mp.trigger('lootItem', item.id));
      li.textContent = `${item.name} (${item.id})`;
      li.appendChild(button);
      itemsList.appendChild(li);
    }
  }
}

// Функция для добавления нового предмета
function addItem(name, id) {
  if (name && id) {
    const item = {
      id: id,
      name: name
    };
    items.push(item);
    renderItems();
  }
}

function clearItems() {
  items = [];
  renderItems();
}

// Обработчики событий
filter.addEventListener('input', renderItems);

// Отображаем список предметов при загрузке страницы
renderItems();
