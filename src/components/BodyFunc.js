import product1Image from '@/assets/bracelets.jpg';
import product2Image from '@/assets/IPad.jpg';
import product3Image from '@/assets/iphone.jpg';
import product4Image from '@/assets/Shoes.jpg';

export default {
    data() {
        return {
            ProductsAndServices: [
                { id: 1, name: 'Bracelets', price: 1000, imageUrl: product1Image },
                { id: 2, name: 'IPad', price: 120000, imageUrl: product2Image },
                { id: 3, name: 'IPhone', price: 90000, imageUrl: product3Image },
                { id: 4, name: 'Shoes', price: 10000, imageUrl: product4Image }
            ]
        };
    }
};