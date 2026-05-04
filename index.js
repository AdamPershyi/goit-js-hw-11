import{r as e}from"./assets/rolldown-runtime-DMWpINJ5.js";/* empty css                      */import{n as t,r as n,t as r}from"./assets/vendor-zG5q2fLY.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=`55713445-fbda8ed7255a2117e2c0a47fe`;async function a(e){return(await n.get(`https://pixabay.com/api/`,{params:{key:i,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0}})).data}var o=null;function s(e){let n=document.querySelector(`.gallery`);n.innerHTML=e.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="image-info">
        <span>👍 ${e.likes}</span>
        <span>👁️ ${e.views}</span>
        <span>💬 ${e.comments}</span>
        <span>📥 ${e.downloads}</span>
      </div>
    </li>
  `).join(``),o?o.refresh():o=new t(`.gallery a`,{captionsData:`alt`,captionDelay:250})}function c(){let e=document.querySelector(`.gallery`);e.innerHTML=``}function l(){let e=document.getElementById(`loader`);e&&e.classList.add(`show`)}function u(){let e=document.getElementById(`loader`);e&&e.classList.remove(`show`)}var d=e(r(),1),f=document.querySelector(`.form`);f.addEventListener(`submit`,async e=>{e.preventDefault();let t=f.elements.searchQuery.value.trim();if(!t){d.default.warning({title:`Warning`,message:`Please enter a search term`,position:`topRight`});return}c(),l();try{let e=await a(t);if(!e.hits||e.hits.length===0){d.default.error({title:`Error`,message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}s(e.hits)}catch{d.default.error({title:`Error`,message:`Something went wrong. Please try again later.`,position:`topRight`})}finally{u()}f.reset()});
//# sourceMappingURL=index.js.map