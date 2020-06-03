// const watchBtn = document.getElementById('a');
// watchBtn.addEventListener('click',()=>{

// });

class Product {

  constructor(title, image) {
    this.title = title;
    this.imageUrl = image;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
        <div>
        <iframe width="80%" height="315" src="${this.product.imageUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            
          </div>
        </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'Introduction to web development',
      'https://www.youtube.com/embed/qp-sl2PMcXg'
    ),
    new Product(
      'Setting up an environment for html',
      'https://www.youtube.com/embed/ieyyX1WjqFo'
    ),
    new Product(
      'Basic html code',
      'https://www.youtube.com/embed/b3BnQFV9JpY'
    ),
    new Product(
      'Comments and basic definations',
      'https://www.youtube.com/embed/3g-_RfUdukI'
    ),
    new Product(
      'Heading and Paragraph tags in html',
      'https://www.youtube.com/embed/VvsaOLg84iw'
    ),
    new Product(
      'Formatting and Quotations in html',
      'https://www.youtube.com/embed/Y87GtWjTb_k'
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
