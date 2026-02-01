!function(t,i){"object"==typeof module&&"object"==typeof module.exports?module.exports=i():"function"==typeof define&&define.amd?define(i):t.ms_woo_pd_image_fly=i()}("undefined"!=typeof window?window:this,function(){return document.querySelectorAll(".add_to_cart_button *, .single_add_to_cart_button *").forEach(t=>{t.style.pointerEvents="none"}),class t{constructor(t={}){if(!t.miniCartSelector||!t.productContainer||(this.settings={miniCartSelector:t.miniCartSelector,addToCartButton:t.addToCartButton||".add_to_cart_button",productContainer:t.productContainer,productImage:t.productImage||"img",animationDuration:t.animationDuration??1e3,animationEasing:t.animationEasing??"ease-in-out",enableShakeEffect:t.enableShakeEffect??!0,onComplete:t.onComplete??null,onCartShake:t.onCartShake??null},this.cartElement=document.querySelector(this.settings.miniCartSelector),!this.cartElement))return;this.pendingAnimation=null,this.canTrigger=!1,this.isAnimating=!1,this.animationQueue=[],this._initClickListener(),this._initAjaxHook()}_toArray(t){return Array.isArray(t)?t:[t]}_initClickListener(){let t=this._toArray(this.settings.addToCartButton),i=this._toArray(this.settings.productContainer);document.body.addEventListener("click",e=>{let n=null;for(let a of t)if(n=e.target.closest(a))break;if(!n)return;let o=null;for(let r of i)if(o=n.closest(r))break;if(!o)return;let s=this._toArray(this.settings.productImage),l=null;for(let h of s)if(l=o.querySelector(h))break;l&&(this.pendingAnimation={image:l,item:o})},!1)}_initAjaxHook(){"undefined"!=typeof jQuery&&jQuery(document.body).on("added_to_cart",()=>{this.canTrigger=!0,this._triggerAnimation()})}_triggerAnimation(){if(!this.canTrigger||!this.pendingAnimation){this.canTrigger=!1;return}let t=this.pendingAnimation;this.pendingAnimation=null,this.canTrigger=!1,this.animationQueue.push(()=>this._animate(t.image,t.item)),this.isAnimating||this._processQueue()}_processQueue(){0!==this.animationQueue.length&&this.animationQueue.shift()()}_animate(t,i){this.isAnimating=!0;let e=t.cloneNode(!0),n=t.getBoundingClientRect(),a=this.cartElement.getBoundingClientRect(),o=window.getComputedStyle(t),r=window.scrollX,s=window.scrollY,l=this.settings.animationDuration,h=this.settings.animationEasing;Object.assign(e.style,{position:"absolute",top:`${n.top+s}px`,left:`${n.left+r}px`,width:`${n.width}px`,height:`${n.height}px`,border:o.border,boxShadow:o.boxShadow,filter:o.filter,opacity:"1",zIndex:"999999",pointerEvents:"none",transition:`all ${l}ms ${h}`}),document.body.appendChild(e),requestAnimationFrame(()=>{Object.assign(e.style,{top:`${a.top+s}px`,left:`${a.left+r}px`,width:"30px",height:"30px",opacity:"0.5"})}),setTimeout(()=>{e.remove(),this._finalizeAnimation(i)},l)}_finalizeAnimation(t){this.settings.onComplete?.(t),this.settings.enableShakeEffect&&this._shakeCart(),this.isAnimating=!1,this._processQueue()}_shakeCart(){this.cartElement.animate([{transform:"translateX(0)"},{transform:"translateX(-10px)"},{transform:"translateX(10px)"},{transform:"translateX(0)"},],{duration:300,iterations:1}),this.settings.onCartShake?.(this.cartElement)}}});





// ========================================
// INSTANCES — initialize after DOM ready
// ========================================
(function () {
    function init() {
       
        if (typeof ms_woo_pd_image_fly === 'undefined') {
            console.error(' ms_woo_pd_image_fly library not found.');
            return;
        }

        // ----------------------------------------
        // Instance 1: Product Archive / Loop
        // Modified selector to match the related products section on your website
        // ----------------------------------------
        new ms_woo_pd_image_fly({
            miniCartSelector:  '.woocommerce-mini-cart',
            addToCartButton:   'li.product .add_to_cart_button',
            productContainer:  'li.product',
            productImage:      '.attachment-woocommerce_thumbnail',
            animationDuration: 1000,
            animationEasing:   'ease-in-out',
            enableShakeEffect: true,
            
        });

        // ----------------------------------------
        // Instance 2: Single Product Page
        // Modified selector to match the related products section on your website
        // ----------------------------------------
        const singleImg = document.querySelector('.flex-active-slide a img')
            ? '.flex-active-slide a img'
            : '.woocommerce-product-gallery__image a img';

        new ms_woo_pd_image_fly({
            miniCartSelector:  '.woocommerce-mini-cart',
            addToCartButton:   '.single-product .single_add_to_cart_button',
            productContainer:  '.single-product .product',
            productImage:      singleImg,
            animationDuration: 1000,
            animationEasing:   'ease-in-out',
            enableShakeEffect: true,
            
        });

        
    }

    // Small delay so WooCommerce finishes loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(init, 100));
    } else {
        setTimeout(init, 100);
    }
})();