import{a as u,S as m,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const g="48892292-adf57a8bf9903d599c085e6e7",y="https://pixabay.com/api/";async function h(o){try{return(await u.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error fetching images:",t),[]}}function v(o){const t=document.querySelector(".gallery");t.innerHTML=o.map(a=>`
        <a href="${a.largeImageURL}" class="gallery-item">
          <img src="${a.webformatURL}" alt="${a.tags}" loading="lazy"/>
          <div class="info">
            <div class="info-item">
              <p class="info-title">❤️ Likes</p>
              <p class="info-value">${a.likes}</p>
            </div>
            <div class="info-item">
              <p class="info-title">👁️ Views</p>
              <p class="info-value">${a.views}</p>
            </div>
            <div class="info-item">
              <p class="info-title">💬 Comments</p>
              <p class="info-value">${a.comments}</p>
            </div>
            <div class="info-item">
              <p class="info-title">⬇️ Downloads</p>
              <p class="info-value">${a.downloads}</p>
            </div>
          </div>
        </a>
      `).join(""),new m(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",animationSpeed:250,fadeSpeed:250}).refresh()}const L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%3e%3cpath%20fill='%23fafafb'%20d='M9.08.292A.998.998%200%200%201%209.786%200h12.428c.265%200%20.519.105.706.292l8.788%208.788a.998.998%200%200%201%20.292.706v12.428a.998.998%200%200%201-.292.706l-8.788%208.788a.998.998%200%200%201-.706.292H9.786a.998.998%200%200%201-.706-.292L.292%2022.92A.998.998%200%200%201%200%2022.214V9.786c0-.265.105-.519.292-.706L9.08.292zM10.2%202%202%2010.2v11.6l8.2%208.2h11.6l8.2-8.2V10.2L21.8%202H10.2z'/%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292A.991.991%200%200%201%2010%208.999a1.002%201.002%200%200%201%20.708.293L16%2014.586l5.292-5.294A.991.991%200%200%201%2022%208.999a1.006%201.006%200%200%201%20.925.618%201.01%201.01%200%200%201%200%20.766c-.05.121-.124.232-.217.325L17.414%2016l5.294%205.292a.991.991%200%200%201%20.293.708%201.006%201.006%200%200%201-.618.925%201.01%201.01%200%200%201-.766%200%201.002%201.002%200%200%201-.325-.217L16%2017.414l-5.292%205.294a.991.991%200%200%201-.708.293%201.006%201.006%200%200%201-.925-.618%201.006%201.006%200%200%201%20.217-1.091L14.586%2016l-5.294-5.292A.991.991%200%200%201%208.999%2010a1.002%201.002%200%200%201%20.293-.708z'/%3e%3c/svg%3e",f=document.querySelector("#search-form"),p=document.querySelector(".loader"),l=document.querySelector("#loading-message"),d=f.querySelector("button"),c={messageColor:"#fafafb",backgroundColor:"#ef4040",messageSize:"16px",timeout:4e3,iconUrl:L,position:"topRight",displayMode:"replace",transitionIn:"flipInX"};function b(){p.style.display="block"}function S(){p.style.display="none"}f.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(document.querySelector(".gallery").innerHTML="",l.style.display="none",!t){n.error({...c,message:"Please enter a search query!"});return}b(),l.style.display="block",d.disabled=!0;try{const r=await h(t);r.length===0?n.error({...c,message:"Sorry, no images found. Try again."}):v(r)}catch{n.error({...c,message:"Something went wrong, please try again later."})}finally{S(),l.style.display="none",d.disabled=!1}});
//# sourceMappingURL=index.js.map
