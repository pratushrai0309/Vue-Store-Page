const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      img: './assets/images/socks_blue.jpg',
      url: 'https://github.com/pratushrai0309',
      inventory: 10,
      onSale: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [{id : 2234, color : 'green', img: './assets/images/socks_green.jpg'}, {id : 2235, color : 'blue', img: './assets/images/socks_blue.jpg'}],
      sizes: [5, 10, 20]
    }
  },
  methods: {
    addToCart() {
        if(this.inventory > 0){
        this.cart += 1
        this.inventory -= 1
        console.log(this.inventory);
        }
    },
  updateImage(variantImage){
        this.img = variantImage
  },
  removeFromCart() {
        if(this.cart >= 1){
          this.cart -= 1
        }
        else if(this.cart == 0){
          this.inventory = 10
        }
  }
}
  
})
