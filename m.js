!function(){var t=document.createElement("div");t.setAttribute("class","storefront-modal");var e=document.createElement("div");e.setAttribute("class","storefront-modal-content");var o=document.createElement("iframe");o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("frameBorder","0"),o.setAttribute("src",window.storefront.url),e.appendChild(o),t.appendChild(e);var n=document.createElement("button");n.setAttribute("id","storefront-btn"),n.setAttribute("title","Open storefront"),n.innerHTML='<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21H21" stroke="#19BB16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 8C15 8.79565 15.3161 9.55871 15.8787 10.1213C16.4413 10.6839 17.2044 11 18 11C18.7956 11 19.5587 10.6839 20.1213 10.1213C20.6839 9.55871 21 8.79565 21 8V7H3L5 3H19L21 7M3 7V8C3 8.79565 3.31607 9.55871 3.87868 10.1213C4.44129 10.6839 5.20435 11 6 11C6.79565 11 7.55871 10.6839 8.12132 10.1213C8.68393 9.55871 9 8.79565 9 8V7H3ZM9 8C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8V7L9 8Z" stroke="#19BB16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 21V10.85" stroke="#19BB16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 21V10.85" stroke="#19BB16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 21V17C9 16.4696 9.21071 15.9609 9.58579 15.5858C9.96086 15.2107 10.4696 15 11 15H13C13.5304 15 14.0391 15.2107 14.4142 15.5858C14.7893 15.9609 15 16.4696 15 17V21" stroke="#19BB16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',document.body.appendChild(t),document.body.appendChild(n),n.onclick=function(){t.style.display="block"},window.addEventListener("click",(function(e){e.target==t&&(t.style.display="none")}))}();