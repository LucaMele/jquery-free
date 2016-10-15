[![Build Status](https://travis-ci.org/LucaMele/jquery-free.svg?branch=master)](https://travis-ci.org/LucaMele/jquery-free)

# jquery-free Intro #

This is for everyone that has to support only modern browsers and want to use native DOM objects instead of jQuery objects.

Modern browsers can do a lot natively without the need of jQuery. For example the `document.querySelector` and `document.querySelectorAll` select in a similar way as jQuery selectors. 
 
There is no need to explain that native selectors are faster than jQuery because they don't have to do before lots of legacy checks.

With this repo, my main goal is to be able to use native DOM selectors and also have some very helpful jQuery functions like `closest('.foo')`. 
 
By including this REPO in your stack, you will be able to use native selectors and also some jQuery like function that makes your life easier.

## Implemented methods so far ##

Here is a list of the implemented utility methods so far. The list will be growing untill version 1.

- `.closest('.class-name')`. This selects the closest parent the same way as jquery does. Checkout the `demo/index.html`
- `.addClass('class-name')`. This adds a class to the selected element with querySelector or the elements selected with querySelectorAll. Checkout the `demo/index.html`

## Browser support ##

My goal is not to rebuild jQuery, but only some helpful functions which can be used with native DOM NODE objects. I assume query selector is available. So this is the browser support:

http://caniuse.com/#feat=queryselector 


## THIS REPO IS STILL WORK IN PROGRESS ##

