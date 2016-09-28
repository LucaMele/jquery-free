# no-jquery Intro #

This is for everyone that has to support only modern browsers and want to use native DOM objects instead of jQuery objects.

Modern browsers can do a lot natively without the need of jQuery. For example the `document.querySelector` and `document.querySelectorAll` select in a similar way as jQuery selectors. 
 
There is no need to explain that native selectors are faster than jQuery because they don't have to do before lots of legacy checks.

With this repo, my main goal is to be able to use native DOM selectors and also have some very helpful jQuery functions like `closest('.foo')`. 
 
By including this REPO in your stack, you will be able to use native selectors and also some jQuery like function that makes your life easier.

## Browser support ##

My goal is not to rebuild jQuery, but only some helpful functions which can be used with native DOM NODE objects. I assume query selector is available. So this is the browser support:

http://caniuse.com/#feat=queryselector 

