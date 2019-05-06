export const scroll = {
  methods: {
    scrollIt(destination, callback) {
      
      const destinationOffset = typeof destination === 'number' ? destination : document.querySelector(destination).offsetTop;
    
      window.scroll({top: destinationOffset, behavior: 'smooth'});

      if (window.pageYOffset != destinationOffset) {
        requestAnimationFrame(scroll);
      }
      
      if (callback) {
        callback();
      }
      
      return;
    }
  }
}