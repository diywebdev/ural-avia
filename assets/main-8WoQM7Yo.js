(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();var f=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function E(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var u={exports:{}};(function(r,c){(function(a,n){r.exports=n()})(f,function(){let a=0;class n{constructor(e,s){this.element=e,this.selector=s.selector,this.speed=e.dataset.speed||.25,this.pausable=e.dataset.pausable,this.reverse=e.dataset.reverse,this.paused=!1,this.parent=e.parentElement,this.parentProps=this.parent.getBoundingClientRect(),this.content=e.children[0],this.innerContent=this.content.innerHTML,this.wrapStyles="",this.offset=0,this._setupWrapper(),this._setupContent(),this._setupEvents(),this.wrapper.appendChild(this.content),this.element.appendChild(this.wrapper)}_setupWrapper(){this.wrapper=document.createElement("div"),this.wrapper.classList.add("marquee3k__wrapper"),this.wrapper.style.whiteSpace="nowrap"}_setupContent(){this.content.classList.add(`${this.selector}__copy`),this.content.style.display="inline-block",this.contentWidth=this.content.offsetWidth,this.requiredReps=this.contentWidth>this.parentProps.width?2:Math.ceil((this.parentProps.width-this.contentWidth)/this.contentWidth)+1;for(let e=0;e<this.requiredReps;e++)this._createClone();this.reverse&&(this.offset=this.contentWidth*-1),this.element.classList.add("is-init")}_setupEvents(){this.element.addEventListener("mouseenter",()=>{this.pausable&&(this.paused=!0)}),this.element.addEventListener("mouseleave",()=>{this.pausable&&(this.paused=!1)})}_createClone(){const e=this.content.cloneNode(!0);e.style.display="inline-block",e.classList.add(`${this.selector}__copy`),this.wrapper.appendChild(e)}animate(){if(!this.paused){const e=this.reverse?this.offset<0:this.offset>this.contentWidth*-1,s=this.reverse?-1:1,o=this.reverse?this.contentWidth*-1:0;e?this.offset-=this.speed*s:this.offset=o,this.wrapper.style.whiteSpace="nowrap",this.wrapper.style.transform=`translate(${this.offset}px, 0) translateZ(0)`}}_refresh(){this.contentWidth=this.content.offsetWidth}repopulate(e,s){if(this.contentWidth=this.content.offsetWidth,s){const o=Math.ceil(e/this.contentWidth)+1;for(let l=0;l<o;l++)this._createClone()}}static refresh(e){MARQUEES[e]._refresh()}static pause(e){MARQUEES[e].paused=!0}static play(e){MARQUEES[e].paused=!1}static toggle(e){MARQUEES[e].paused=!MARQUEES[e].paused}static refreshAll(){for(let e=0;e<MARQUEES.length;e++)MARQUEES[e]._refresh()}static pauseAll(){for(let e=0;e<MARQUEES.length;e++)MARQUEES[e].paused=!0}static playAll(){for(let e=0;e<MARQUEES.length;e++)MARQUEES[e].paused=!1}static toggleAll(){for(let e=0;e<MARQUEES.length;e++)MARQUEES[e].paused=!MARQUEES[e].paused}static init(e={selector:"marquee3k"}){a&&window.cancelAnimationFrame(a),window.MARQUEES=[];const s=Array.from(document.querySelectorAll(`.${e.selector}`));let o=window.innerWidth,l;for(let i=0;i<s.length;i++){const d=s[i],h=new n(d,e);MARQUEES.push(h)}p();function p(){for(let i=0;i<MARQUEES.length;i++)MARQUEES[i].animate();a=window.requestAnimationFrame(p)}window.addEventListener("resize",()=>{clearTimeout(l),l=setTimeout(()=>{const i=o<window.innerWidth,d=window.innerWidth-o;for(let h=0;h<MARQUEES.length;h++)MARQUEES[h].repopulate(d,i);o=this.innerWidth},250)})}}return n})})(u);var m=u.exports;const w=E(m);w.init();
