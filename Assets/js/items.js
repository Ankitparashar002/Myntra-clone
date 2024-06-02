let bagItems;
onLoad();

function onLoad() {
  let bagItemStr = bagItems = localStorage.getItem('bagItems');
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagCountElement.style.visibility = 'visible';
    bagCountElement.innerText = bagItems.length;
  } else {
    bagCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }

  let innerHTML = '';

  items.forEach(item => {
    innerHTML += `
    <div class="item-container">
        <img src="${item.image}" class="item-image" alt="item image">
        <div>
          ${item.rating.stars}<i class="fa-star fa-solid" style="color: goldenrod;"></i> |${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name} </div>
        <div class="price">
          <span class="current-price">Rs${item.current_price}</span>
          <span class="original-price">Rs${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% off)</span>
        </div>
        <button class="btn-add-bag" onclick = "addToBag(${item.id})">Add to bag</button>
      </div>`;
  });

  itemsContainerElement.innerHTML = innerHTML;


}

