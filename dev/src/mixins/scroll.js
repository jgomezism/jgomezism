export const scroll = {
  methods: {
    scrollIt(destination, callback) {
      
      const destinationOffset = typeof destination === 'number' ? destination : document.querySelector(destination).offsetTop;
    
      window.scroll({top: destinationOffset, behavior: 'smooth'});
      
      if (callback) {
        callback();
      }
      
      return;
    }
  }
}