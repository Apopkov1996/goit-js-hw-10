!function(){var t="https://api.thecatapi.com",e={headers:{"x-api-key":"live_aUFqRDdCUhNgAKkwm1toN44d52zqmJ1i8nfxJCvrFxi8kJLGtAgN6nyIP42LEG2F"}};var n,c={selectEl:document.querySelector(".breed-select"),textLoadEl:document.querySelector(".loader"),textErrorEl:document.querySelector(".error"),divEl:document.querySelector(".cat-info")};c.textLoadEl.classList.add("is-hidden"),c.textErrorEl.classList.add("is-hidden"),c.divEl.classList.add("is-hidden"),c.selectEl.addEventListener("change",(function(n){c.textLoadEl.classList.remove("is-hidden"),c.divEl.classList.remove("is-hidden"),(i=c.selectEl.value,s="?breed_ids=".concat(i),a="".concat(t).concat("/v1/images/search").concat(s),fetch(a,e).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){c.textLoadEl.classList.add("is-hidden"),function(t){var e='\n        <h2 class="header-cat-info ">'.concat(t[0].breeds[0].name,'</h2>\n        <section class = "section-cat">\n        <div class = "div-cat-left">\n        <img class="img-cat-info" src="').concat(t[0].url,'" alt="cat" width = "600" height = "400">\n        </div>\n        <div class = "div-cat-right">\n        <p class="text-cat-info-first">').concat(t[0].breeds[0].description,'</p>\n        <p class="text-cat-info-second">').concat(t[0].breeds[0].temperament,"</p>\n        </div>\n        </section>\n        ");c.divEl.innerHTML=e}(t)})).catch((function(t){c.textErrorEl.classList.remove("is-hidden")}));var i,s,a})),(n="".concat(t).concat("/v1/breeds"),fetch(n,e).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){var e=t.map((function(t){return"<option value='".concat(t.id,"'>").concat(t.name,"</option>")})).join("");c.selectEl.innerHTML=e})).catch((function(t){c.textErrorEl.classList.remove("is-hidden")}))}();
//# sourceMappingURL=index.01585549.js.map
