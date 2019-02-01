(function(){
    document.querySelector("#priceblock_ourprice").textContent +=
               "｜税抜き: " + Math.round( document.querySelector("#priceblock_ourprice").textContent.replace(/[^0-9]/g, '') / 1.08 ) + "円"
})()