<!-- <a target="_blank" href="https://icons8.com/icon/60655/customer">Customer</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<!-- <a target="_blank" href="https://icons8.com/icon/7697/heart">Heart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<!-- <a target="_blank" href="https://icons8.com/icon/85180/shopping-cart">Shopping Cart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<!-- <a target="_blank" href="https://icons8.com/icon/83218/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->



<template>
    <header class="header">
        <div class="top">
            <h1>CAMPUS MARKETPLACE</h1>
            
            <!-- <div class="profile_icon">
                <img src="\frontend\public\images\profile_icon.png" alt="Profile icon">
            </div> -->
            <nav class="nav">
                <ul class="nav-list">
                    <li>
                        <!-- <router-link to="/profile"> -->
                            <a href="#">
                                <img src="@/assets/profile_icon.png" alt="Profile icon">
                            </a>
                        <!-- </router-link> -->
                    </li>
                    <li>
                        <!-- <router-link to="/wishlist"> -->
                            <a href="#">
                                <img src="@/assets/wishlist_icon.png" alt="Wishlist icon">
                            </a>
                        <!-- </router-link> -->
                    </li>
                    <li>
                        <!-- <router-link to="/wishlist"> -->
                            <a href="#">
                                <img src="@/assets/cart_icon.png" alt="Cart icon">
                            </a>
                        <!-- </router-link> -->
                    </li>
                </ul>
            </nav>
        </div>

        <!-- Search Bar -->
        <div class="search-bar">
            <input type="text" placeholder="Search" class="search-input">
            <button class="search-button">
                <img src="@/assets/search_icon.png" alt="Search" class="search-icon">
            </button>
        </div>
    </header>

    <div class="menu-bar">
            <ul class="menu-list">
                <li class="dropdown" @mouseenter="showDropdown('service')" @mouseleave="hideDropdown('service')">
                    <a href="#">Categories</a>
                    <ul class="dropdown-menu" v-show="dropdown.service">
                        <li class="menu-heading">PRODUCTS</li>                        
                        <li><a href="#">Beauty & Health</a></li>
                        <li><a href="#">Clothing</a></li>
                        <li><a href="#">Dorm Essentials</a></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Jewelry & Accessories</a></li>
                        <li><a href="#">Office & School Supplies</a></li>
                        <li><a href="#">Shoes</a></li>
                        <li><a href="#">Textbooks</a></li>
                        <li class="menu-heading">SERVICES</li>                        
                        <li><a href="#">Hair</a></li>
                        <li><a href="#">Makeup</a></li>
                        <li><a href="#">Nails</a></li>
                        <li><a href="#">Promotions</a></li>
                        <li><a href="#">Tutoring</a></li>
                    </ul>
                </li>
            <li><a href="#">Tutoring</a></li>
            <li><a href="#">Textbooks</a></li>
            <li><a href="#">Dorm Essentials</a></li>
        </ul>
    </div>
</template>

<script src="./MenuBar.js">
// import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
@import "./header.scss"; 
</style>