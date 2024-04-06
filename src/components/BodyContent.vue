<template>
    <h2>Just For You</h2>
    <div class="grid">
        <ul class="grid-items">
            <li v-for="item in ProductsAndServices" :key="item.id" class="grid-elements">
                <img :src="item.imageUrl" alt="Product/Service">
                <h3>{{ item.name }}</h3>
                <p>${{ item.price }}</p>
            </li>
        </ul>
        <!-- <div v-for="(item, index) in ProductsAndServices" :key="index" class="grid-items">
            <img :src="item.imageUrl" alt="Product/Service">
            <h3>{{ item.name }}</h3>
            <p>${{ item.price }}</p>
        </div> -->
    </div>
</template>


<script src="./BodyFunc.js"></script>

<style lang="scss" scoped>
@import "./body.scss"; 
</style>

