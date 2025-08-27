(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const h=document.querySelector("#app");h.innerHTML=`
  <main class="container">
    <section id="playlist-section">
      <h1>Плейлист</h1>
      <ol id="playlist"></ol>
    </section>

    <section id="modal-section">
      <h2>Модальне вікно</h2>
      <button id="openModalBtn" class="btn">Відкрити</button>
      <div id="modal" class="modal is-hidden" aria-hidden="true" role="dialog" aria-modal="true">
        <div class="modal__backdrop" data-close></div>
        <div class="modal__content" role="document">
          <p>Це модальне вікно.</p>
          <button id="closeModalBtn" class="btn btn--secondary" data-close>Закрити</button>
        </div>
      </div>
    </section>

    <section id="traffic-section">
      <h2>Світлофор</h2>
      <div class="traffic-light" aria-label="Світлофор">
        <span class="light light--red" data-color="red" aria-hidden="true"></span>
        <span class="light light--yellow" data-color="yellow" aria-hidden="true"></span>
        <span class="light light--green" data-color="green" aria-hidden="true"></span>
      </div>
      <button id="nextLightBtn" class="btn">Наступний колір</button>
    </section>
  </main>
`;const g=[{author:"LED ZEPPELIN",song:"STAIRWAY TO HEAVEN"},{author:"QUEEN",song:"BOHEMIAN RHAPSODY"},{author:"LYNYRD SKYNYRD",song:"FREE BIRD"},{author:"DEEP PURPLE",song:"SMOKE ON THE WATER"},{author:"JIMI HENDRIX",song:"ALL ALONG THE WATCHTOWER"},{author:"AC/DC",song:"BACK IN BLACK"},{author:"QUEEN",song:"WE WILL ROCK YOU"},{author:"METALLICA",song:"ENTER SANDMAN"}],p=document.getElementById("playlist");g.forEach(({author:n,song:o})=>{const s=document.createElement("li");s.textContent=`${n} — ${o}`,p.appendChild(s)});const i=document.getElementById("modal"),E=document.getElementById("openModalBtn");function f(){i.classList.remove("is-hidden"),i.setAttribute("aria-hidden","false")}E.addEventListener("click",f);function d(){i.classList.add("is-hidden"),i.setAttribute("aria-hidden","true")}i.addEventListener("click",n=>{const o=n.target;o&&o.hasAttribute("data-close")&&d()});document.addEventListener("keydown",n=>{n.key==="Escape"&&d()});const c=Array.from(document.querySelectorAll(".light"));let r=0;function u(){c.forEach((n,o)=>{n.classList.toggle("is-on",o===r)})}u();const m=document.getElementById("nextLightBtn");m.addEventListener("click",()=>{r=(r+1)%c.length,u()});
