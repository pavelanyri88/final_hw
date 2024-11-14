<template>
  <div class="home">
    
    <div class="banner">
    <div class="banner-text">
      <h1>Маркетплейс с душой</h1>
      <p>Плати людям, а не корпорациям</p>
      <div class="banner-buttons">
        <button @click="goToProducts">К товарам</button>
        <button @click="goToAbout">О проекте</button>
      </div>
    </div>
    <img src="@/assets/girl.png" alt="Баннер общий" class="banner-image" />
    </div>

    <section class="product-group">
      <h2>Лучшие товары недели</h2>
      <div class="product-list">
        <ProductCard
          v-for="product in store.products"
          :key="product.id"
          :product="product"
          @add-to-cart="store.addToCart"
        />
      </div>
    </section>

    <section class="product-group">
      <h2>Лучшие товары недели</h2>
      <div class="product-list">
        <ProductCard
          v-for="product in store.products"
          :key="product.id"
          :product="product"
          @add-to-cart="store.addToCart"
        />
      </div>
    </section>

    <section class="product-group">
      <h2>Рекомендуемое</h2>
      <div class="product-list">
        <ProductCard
          v-for="product in store.products"
          :key="product.id"
          :product="product"
          @add-to-cart="store.addToCart"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { useStore } from '../store/';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  setup() {
    const store = useStore();

    return { store };
  }
};
</script>

<style scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  padding: 20px;
  font-size: 25px;
}

.banner-text {
  max-width: 50%;
}

.banner-buttons button {
  margin-right: 10px;
  background-color: #ff5a5f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.banner-buttons button:hover {
  background-color: #ff3a3f;
}

.banner-image {
  max-width: 40%;
  background-image: url('../src/assets/big_heart.png');
  background-size: 500px 500px; 
  background-position: center 20px;
  background-repeat: no-repeat;
}

.banner-big-heart {
  max-width: 40%;
}

.home {
  padding: 1rem;
}

.product-group {
  margin-bottom: 2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
