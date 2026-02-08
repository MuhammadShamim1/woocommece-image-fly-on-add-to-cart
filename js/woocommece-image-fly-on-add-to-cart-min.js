!function(t,i){"object"==typeof module&&"object"==typeof module.exports?module.exports=i():"function"==typeof define&&define.amd?define(i):t.ms_woo_pd_image_fly=i()}("undefined"!=typeof window?window:this,function(){return document.querySelectorAll(".add_to_cart_button *, .single_add_to_cart_button *").forEach(t=>{t.style.pointerEvents="none"}),class t{constructor(t={}){if(!t.miniCartSelector||!t.productContainer)return console.warn("⚠ ms_woo_pd_image_fly: skipped — miniCartSelector and productContainer are required.",{miniCartSelector:t.miniCartSelector,productContainer:t.productContainer}),null;if(this.settings={miniCartSelector:t.miniCartSelector,addToCartButton:t.addToCartButton||".add_to_cart_button",productContainer:t.productContainer,productImage:t.productImage||"img",animationDuration:t.animationDuration??1e3,animationEasing:t.animationEasing??"ease-in-out",enableShakeEffect:t.enableShakeEffect??!0,imageStartFromAddToCartOnMobile:t.imageStartFromAddToCartOnMobile??!1,mobileBreakpoint:t.mobileBreakpoint??767,onComplete:t.onComplete??null,onCartShake:t.onCartShake??null},this.cartElement=document.querySelector(this.settings.miniCartSelector),!this.cartElement){console.warn(`⚠ ms_woo_pd_image_fly: cart element not found — "${this.settings.miniCartSelector}". Instance will not run.`);return}this.pendingAnimation=null,this.isAnimating=!1,this.animationQueue=[],this._initClickListener(),this._initAjaxHook()}_toArray(t){return Array.isArray(t)?t:[t]}_initClickListener(){let t=this._toArray(this.settings.addToCartButton),i=this._toArray(this.settings.productContainer);document.body.addEventListener("click",e=>{let n=null;for(let o of t)if(n=e.target.closest(o))break;if(!n)return;let a=null;for(let r of i)if(a=n.closest(r))break;if(!a)return;let s=this._toArray(this.settings.productImage),l=null;for(let m of s)if(l=a.querySelector(m))break;l&&(this.pendingAnimation={image:l,item:a,button:n})},!1)}_initAjaxHook(){"undefined"!=typeof jQuery&&jQuery(document.body).on("added_to_cart",()=>{this._triggerAnimation()})}_triggerAnimation(){if(!this.pendingAnimation)return;let t=this.pendingAnimation;this.pendingAnimation=null,this.animationQueue.push(()=>this._animate(t.image,t.item,t.button)),this.isAnimating||this._processQueue()}_processQueue(){if(0===this.animationQueue.length){this.isAnimating=!1;return}this.isAnimating=!0,this.animationQueue.shift()()}_isMobile(){return window.innerWidth<=this.settings.mobileBreakpoint}_animate(t,i,e){let n=t.cloneNode(!0),o=t.getBoundingClientRect(),a=this.cartElement.getBoundingClientRect(),r=window.getComputedStyle(t),s=window.scrollX,l=window.scrollY,m=this.settings.animationDuration,u=this.settings.animationEasing,d=!0===this.settings.imageStartFromAddToCartOnMobile&&this._isMobile(),h,c,p,g;if(d&&e){let f=e.getBoundingClientRect();p=200,g=200,c=f.left+s,h=f.top+l-g}else h=o.top+l,c=o.left+s,p=o.width,g=o.height;Object.assign(n.style,{position:"absolute",top:`${h}px`,left:`${c}px`,width:`${p}px`,height:`${g}px`,border:r.border,boxShadow:r.boxShadow,filter:r.filter,opacity:"1",zIndex:"999999",pointerEvents:"none",objectFit:"cover",transition:"none"}),document.body.appendChild(n),n.offsetHeight,n.style.transition=`all ${m}ms ${u}`,requestAnimationFrame(()=>{requestAnimationFrame(()=>{Object.assign(n.style,{top:`${a.top+l}px`,left:`${a.left+s}px`,width:"30px",height:"30px",opacity:"0.4"})})}),setTimeout(()=>{n.remove(),this._finalizeAnimation(i)},m)}_finalizeAnimation(t){this.settings.onComplete?.(t),this.settings.enableShakeEffect&&this._shakeCart(),this._processQueue()}_shakeCart(){this.cartElement.animate([{transform:"translateX(0)"},{transform:"translateX(-10px)"},{transform:"translateX(10px)"},{transform:"translateX(0)"},],{duration:300,iterations:1}),this.settings.onCartShake?.(this.cartElement)}}});


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
			imageStartFromAddToCartOnMobile: true,
            mobileBreakpoint: 767,
        });

        
    }

    // Small delay so WooCommerce finishes loading
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => setTimeout(init, 100));
    } else {
        setTimeout(init, 100);
    }
})();
