import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    cart: [],
    favorites: [],
   products: [
      { id: 1, name: 'Худи “Barcode”', status: 'В наличии', price: 93500, seller: 'Ержан Г.', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 2, name: 'Минималистичный стул', status: 'В наличии', price: 15000, seller: 'GreenTal', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 3, name: 'Ковёр в национальном стиле с орнаментом', status: 'В наличии', price: 27000, seller: 'Руслан А.', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 4, name: 'Светильник из стали', status: 'Под заказ (1-2 недели)', price: 56990, seller: 'Мадина И.', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 5, name: 'Лофт-комплект из стола и стула', status: 'Под заказ (2-4 недели)', oldPrice: 93500, price: 89990, seller: 'СП «Медиалайн»', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 6, name: 'Керамическая ваза', status: 'В наличии', price: 19990, seller: 'Керамика плюс', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 7, name: 'Декоративное панно', status: 'В наличии', price: 12000, seller: 'АртХаус', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 8, name: 'Мягкий пуф', status: 'Под заказ (1 неделя)', price: 8000, seller: 'МебельКом', image: '../src/assets/image.png', description: 'Типа описание' },
      { id: 9, name: 'Ручной ковёр', status: 'В наличии', price: 150000, seller: 'Салон "Ковровый рай"', image: '../src/assets/image.png', description: 'Типа описание' }
    ]
  }),
  actions: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(productId) {
      //this.cart = this.cart.filter(item => item.id !== productId);
      const index = this.cart.findIndex(item => item.id === productId);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    addToFavorites(product) {
      if (!this.favorites.some(item => item.id === product.id)) {
        this.favorites.push(product);
      }
    },
    calculateTotal() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    },
    loadProductById(id) {
      this.currentProduct = this.products.find(product => product.id === id);
    }
  }
});
