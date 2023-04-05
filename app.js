const lootList = document.getElementById('loot-list');
const clearBtn = document.getElementById('clear-btn');
const refreshBtn = document.getElementById('refresh-btn');

function addLoot(name, id) {
	const li = document.createElement('li');
	li.innerHTML = `
		<span class="name">${name}</span>
		<span class="id">${id}</span>
		<button class="loot-btn" data-id="${id}">Loot</button>
	`;
	lootList.appendChild(li);
}

function clearList() {
	while (lootList.firstChild) {
		lootList.removeChild(lootList.firstChild);
	}
}

function refreshList() {
	mp.trigger('refreshLoot')
}

lootList.addEventListener('click', function(e) {
	if (e.target.classList.contains('loot-btn')) {
		const lootId = e.target.getAttribute('data-id');
		mp.trigger('lootItem', lootId)
		mp.trigger('refreshLoot')
	}
});

clearBtn.addEventListener('click', clearList);
refreshBtn.addEventListener('click', refreshList);
