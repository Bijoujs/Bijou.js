let isNode=!1;isNode="undefined"==typeof window||"undefined"==typeof document,isNode&&console.warn("There is no document element in Node, some functions of bijou.js will not work. If you need these functions consider using a package like jsDom to recreate the document element.");let _temp={primesTo:e=>{let t=Array.from({length:e-1}).map(((e,t)=>t+2)),r=Math.floor(Math.sqrt(e));return Array.from({length:r-1}).map(((e,t)=>t+2)).forEach((e=>t=t.filter((t=>t%e!=0||t===e)))),t},async:e=>{const t=new Worker(URL.createObjectURL(new Blob([`postMessage((${e})());`]),{type:"application/javascript; charset=utf-8"}));return new Promise(((e,r)=>{t.onmessage=({data:r})=>{e(r),t.terminate()},t.onerror=e=>{r(e),t.terminate()}}))},formatMilliseconds:e=>{e<0&&(e=-e);const t={day:Math.floor(e/864e5),hour:Math.floor(e/36e5)%24,minute:Math.floor(e/6e4)%60,second:Math.floor(e/1e3)%60,millisecond:Math.floor(e)%1e3};return Object.entries(t).filter((e=>0!==e[1])).map((([e,t])=>`${t} ${e}${1!==t?"s":""}`)).join(", ")},addStyles:(e,t)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return Object.assign(e.style,t)},onOutsideClick:(e,t)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return document.addEventListener("click",(r=>{e.contains(r.target)||t()})),t},onScrollStop:e=>{let t;if(isNode)throw new Error("No document element! (You are probably using Node.js)");window.addEventListener("scroll",(r=>{clearTimeout(t),t=setTimeout((()=>{e(r)}),150)}),!1)},copy:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);const r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);return t.select(),document.execCommand("copy"),document.body.removeChild(t),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r)),e},throttle:(e,t)=>{let r,n,o;return function(){const s=this,a=arguments;r?(clearTimeout(n),n=setTimeout((function(){Date.now()-o>=t&&(e.apply(s,a),o=Date.now())}),Math.max(t-(Date.now()-o),0))):(e.apply(s,a),o=Date.now(),r=!0)}},createElement:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild},browser:()=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,t="undefined"!=typeof InstallTrigger,r=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&window.safari.pushNotification).toString(),n=!!document.documentMode,o=!n&&!!window.StyleMedia,s=!(!window.chrome||!window.chrome.webstore&&!window.chrome.runtime),a=s&&-1!=navigator.userAgent.indexOf("Edg"),i=(s||e)&&!!window.CSS;return e?"Opera":t?"Firefox":r?"Safari":o?"Edge":n?"Internet Explorer":s?"Chrome":a?"Edge Chromium":i?"Blink":void 0},notify:(e,t,r)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");if(window.Notification)if("granted"===Notification.permission)new Notification(e,{body:t,icon:r});else Notification.requestPermission().then((function(n){if("granted"===n)new Notification(e,{body:t,icon:r});else console.log("User blocked notifications.")})).catch((function(e){console.error(e)}));else console.log("Browser does not support notifications.")},dayName:(e,t="en-US")=>e.toLocaleDateString(t,{weekday:"long"}),jsonToCsv:(e,t,r=",")=>[t.join(r),...e.map((e=>t.reduce(((t,n)=>`${t}${t.length?r:""}"${e[n]?e[n]:""}"`),"")))].join("\n"),unionArrays:(e,t)=>{for(var r={},n=e.length-1;n>=0;--n)r[e[n]]=e[n];for(n=t.length-1;n>=0;--n)r[t[n]]=t[n];var o=[];for(var s in r)r.hasOwnProperty(s)&&o.push(r[s]);return o},each:(e,t)=>{for(let r=0;r<e.length;r++)t(e[r],r,e)},mapObjectKeys:(e,t)=>Array.isArray(e)?e.map((e=>_$.mapObjectKeys(e,t))):"object"==typeof e?Object.keys(e).reduce(((r,n)=>{const o=t(n),s=e[n];return r[o]=null!==s&&"object"==typeof s?_$.mapObjectKeys(s,t):s,r}),{}):e,arrayToCSV:(e,t=",")=>e.map((e=>e.map((e=>isNaN(e)?`"${e.replace(/"/g,'""')}"`:e)).join(t))).join("\n"),averageBy:(e,t)=>e.map("function"==typeof t?t:e=>e[t]).reduce(((e,t)=>e+t),0)/e.length,inView:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");for(var t=e.offsetTop,r=e.offsetLeft,n=e.offsetWidth,o=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;return t>=window.pageYOffset&&r>=window.pageXOffset&&t+o<=window.pageYOffset+window.innerHeight&&r+n<=window.pageXOffset+window.innerWidth},inPartialView:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");for(var t=e.offsetTop,r=e.offsetLeft,n=e.offsetWidth,o=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,r+=e.offsetLeft;return t<window.pageYOffset+window.innerHeight&&r<window.pageXOffset+window.innerWidth&&t+o>window.pageYOffset&&r+n>window.pageXOffset},serializeForm:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return Array.from(new FormData(e),(e=>e.map(encodeURIComponent).join("="))).join("&")},formToObject:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return Array.from(new FormData(e)).reduce(((e,[t,r])=>({...e,[t]:r})))},uuid:(e=Math.random())=>{function t(t){var r=(e.toString(16)+"000000000").substr(2,8);return t?"-"+r.substr(0,4)+"-"+r.substr(4,4):r}return"string"==typeof e&&(e=_temp.hashString(e)/1e16),t()+t(!0)+t(!0)+t()},escapeHTML:e=>e.replace(/[&<>'"]/g,(e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[e]||e))),unescapeHTML:e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,(e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'}[e]||e))),previousPage:()=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return document.referrer||window.location.href},replaceText:(e,t)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");for(var r,n=function(){for(var t,r=e,n=[],o=0;o<r.length;o++)t=r[o].childNodes[0],r[o].hasChildNodes()&&3==t.nodeType&&n.push(t);return n}(),o=0,s=n.length;o<s;o++)r=n[o].nodeValue,n[o].nodeValue=t(r);return e},timeFunction:(e,t="_$ function timer")=>{console.time(t),e(),console.timeEnd(t)},sortObj:e=>Object.keys(e).sort().reduce((function(t,r){return t[r]=e[r],t}),{}),widows:e=>{for(var t=e.split(" "),r="",n=0;n<=t.length-1;n++)r+=t[n],n==t.length-2?r+="&nbsp;":r+=" ";return r},randomColor:()=>"#"+Math.floor(16777215*Math.random()).toString(16),lightenColor:(e,t)=>{var r=!1;"#"==e[0]&&(e=e.slice(1),r=!0);var n=parseInt(e,16),o=(n>>16)+t;o>255?o=255:o<0&&(o=0);var s=(n>>8&255)+t;s>255?s=255:s<0&&(s=0);var a=(255&n)+t;return a>255?a=255:a<0&&(a=0),(r?"#":"")+(a|s<<8|o<<16).toString(16)},lightOrDark:e=>{var t,r,n,o;return e.match(/^rgb/)?(t=(e=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/))[1],r=e[2],n=e[3]):(t=(e=+("0x"+e.slice(1).replace(e.length<5&&/./g,"$&$&")))>>16,r=e>>8&255,n=255&e),(o=Math.sqrt(t*t*.299+r*r*.587+n*n*.114))>127.5?{lightOrDark:"light",hsp:o}:{lightOrDark:"dark",hsp:o}},compStyle:(e,t)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return window.getComputedStyle(e).getPropertyValue(t)},rgbToHex:e=>{let t=e.indexOf(",")>-1?",":" ",r=(+(e=e.substr(4).split(")")[0].split(t))[0]).toString(16),n=(+e[1]).toString(16),o=(+e[2]).toString(16);return 1==r.length&&(r="0"+r),1==n.length&&(n="0"+n),1==o.length&&(o="0"+o),"#"+r+n+o},hexToRGB:e=>{let t=!1,r=e.slice(e.startsWith("#")?1:0);return 3===r.length?r=[...r].map((e=>e+e)).join(""):8===r.length&&(t=!0),r=parseInt(r,16),"rgb"+(t?"a":"")+"("+(r>>>(t?24:16))+", "+((r&(t?16711680:65280))>>>(t?16:8))+", "+((r&(t?65280:255))>>>(t?8:0))+(t?", "+(255&r):"")+")"},querySelector:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var t="";return function e(r){if(r.getAttribute("id")&&1===document.querySelectorAll(`#${r.getAttribute("id")}`).length)return t=(t=(t=t.replace(/^/," #"+r.getAttribute("id"))).replace(/\s/,"")).replace(/\s/g," > ");if(document.body===r)return t=(t=(t=t.replace(/^/," body")).replace(/\s/,"")).replace(/\s/g," > ");if(r.getAttribute("class")){var n=".";n=(n=(n+=r.getAttribute("class")).replace(/\s/g,".")).replace(/^/g," ");var o="";if((u=r.parentNode.children).length<2)return;for(var s=[],a=0;a<u.length;a++)r.getAttribute("class")==u[a].getAttribute("class")&&s.push(u[a]);if(s.length>1)for(var i=0;i<s.length;i++)if(r===s[i]){o=":nth-of-type("+ ++i+")";break}t=t.replace(/^/,n+o)}else{var l=r.nodeName;l=l.toLowerCase();var u,d="";if((u=r.parentNode.children).length>2){var c=[];for(a=0;a<u.length;a++)r.nodeName==u[a].nodeName&&c.push(u[a]);if(c.length>1)for(i=0;i<c.length;i++)if(r===c[i]){d=":nth-of-type("+ ++i+")";break}}t=t.replace(/^/," "+l+d)}if(!r.parentNode)return t=(t=t.replace(/\s/g," > ")).replace(/\s/,"");e(r.parentNode)}(e),t},removeComments:e=>{if("element"==typeof e){if(isNode)throw new Error("No document element! (You are probably using Node.js)");return e.innerHTML=e.innerHTML.replace(/<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,""),e}if("string"==typeof e)return string.replace(/<!--[\s\S]*?(?:-->)?<!---+>?|<!(?![dD][oO][cC][tT][yY][pP][eE]|\[CDATA\[)[^>]*>?|<[?][^>]*>?/g,"")},random:(e,t,r=!0,n=Math.random())=>r?Math.floor(n*(t-e+1)+e):Math.random()*(t-e+1)+e,seedRandom:e=>{var t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296},uniqueArray:e=>[...new Set(e)],formatNumber:e=>e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),spliceArrayBuffer:(e,t,r,n)=>{var o=(n=n||!1)?-1:1;n&&([t,r]=[r,t]),t=Math.floor(t),r=Math.floor(r)+o;for(var s=t,a=0;s!=r;s+=o)a=256*a+e[s];return a},unCamelCase:function(e){return e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b([A-Z]+)([A-Z])([a-z])/,"$1 $2$3").replace(/^./,(function(e){return e.toUpperCase()}))},parseHTML:(e,t="text/html")=>(new DOMParser).parseFromString(e,t),syntaxHighlight:(e,t="html",r={})=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");let n=document.createElement("DIV");n.innerText=e;return((e,t,r={})=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var n=t||"html",o=document.getElementById(e)||e,s=o.innerHTML,a=r.tagColor||"mediumblue",i=r.tagNameColor||"brown",l=r.attributeColor||"red",u=r.attributeValueColor||"mediumblue",d=r.commentColor||"green",c=r.cssSelectorColor||"brown",f=r.cssPropertyColor||"red",g=r.cssPropertyValueColor||"mediumblue",p=r.cssLimiterColor||"black",h=r.cssImportantColor||"red",m=r.jsColor||"black",b=r.jsKeywordColor||"mediumblue",w=r.jsStringColor||"brown",y=r.jsNumberColor||"red",N=r.jsPropertyColor||"black";function A(e,t,r,n,o){for(var s,a,i="",l=[];e.search(t)>-1;)s=e.search(t),-1==(a=e.indexOf(r,s))&&(a=e.length),o?(l.push(n(e.substring(s,a+r.length))),e=e.substring(0,s)+o+e.substr(a+r.length)):(i+=e.substring(0,s),i+=n(e.substring(s,a+r.length)),e=e.substr(a+r.length));this.rest=i+e,this.arr=l}function v(e){for(var t,r,n,o=e,s="";o.search(/(\s|<br>)/)>-1;)t=o.search(/(\s|<br>)/),-1==(r=o.indexOf("&gt;"))&&(r=o.length),s+=o.substring(0,t),s+=O(o.substring(t,r)),o=o.substr(r);return"&gt;"==(n="<span style=color:"+a+">&lt;</span>"+(n=s+o).substring(4)).substr(n.length-4,4)&&(n=n.substring(0,n.length-4)+"<span style=color:"+a+">&gt;</span>"),"<span style=color:"+i+">"+n+"</span>"}function O(e){for(var t,r,n,o,s,a=e,i="";a.indexOf("=")>-1;)r=-1,t=a.indexOf("="),n=a.indexOf("'",t),o=a.indexOf('"',t),(s=a.indexOf(" ",t+2))>-1&&(s<n||-1==n)&&(s<o||-1==o)?r=a.indexOf(" ",t):o>-1&&(o<n||-1==n)&&(o<s||-1==s)?r=a.indexOf('"',a.indexOf('"',t)+1):n>-1&&(n<o||-1==o)&&(n<s||-1==s)&&(r=a.indexOf("'",a.indexOf("'",t)+1)),(!r||-1==r||r<t)&&(r=a.length),i+=a.substring(0,t),i+=C(a.substring(t,r+1)),a=a.substr(r+1);return"<span style=color:"+l+">"+i+a+"</span>"}function C(e){return"<span style=color:"+u+">"+e+"</span>"}function E(e){return"<span style=color:"+d+">"+e+"</span>"}function M(e){var t,r,n,o,s,a,i,l=e,u="";for(l=(n=new A(l,/\/\*/,"*/",E,"W3CSSCOMMENTPOS")).rest;l.search("{")>-1;){for(t=l.search("{"),s=l.substr(t+1),i=1,a=0,o=0;o<s.length&&("{"==s.substr(o,1)&&(i++,a++),"}"==s.substr(o,1)&&i--,0!=i);o++);for(0!=i&&(a=0),r=t,o=0;o<=a;o++)r=l.indexOf("}",r+1);-1==r&&(r=l.length),u+=l.substring(0,t+1),u+=S(l.substring(t+1,r)),l=l.substr(r)}for(l=(l=(l=u+l).replace(/{/g,"<span style=color:"+p+">{</span>")).replace(/}/g,"<span style=color:"+p+">}</span>"),o=0;o<n.arr.length;o++)l=l.replace("W3CSSCOMMENTPOS",n.arr[o]);return"<span style=color:"+c+">"+l+"</span>"}function S(e){var t,r,n,o,s=e,a="";if(s.indexOf("{")>-1)return M(s);for(;s.search(":")>-1;){for(o=!0,n=t=s.search(":");1==o;)o=!1,r=s.indexOf(";",n),"&nbsp;"==s.substring(r-5,r+1)&&(o=!0,n=r+1);-1==r&&(r=s.length),a+=s.substring(0,t),a+=T(s.substring(t,r+1)),s=s.substr(r+1)}return"<span style=color:"+f+">"+a+s+"</span>"}function T(e){var t,r=e,n="";for(r="<span style=color:"+p+">:</span>"+r.substring(1);r.search(/!important/i)>-1;)t=r.search(/!important/i),n+=r.substring(0,t),n+=j(r.substring(t,t+10)),r=r.substr(t+10);return result=n+r,";"==result.substr(result.length-1,1)&&"&nbsp;"!=result.substr(result.length-6,6)&&"&lt;"!=result.substr(result.length-4,4)&&"&gt;"!=result.substr(result.length-4,4)&&"&amp;"!=result.substr(result.length-5,5)&&(result=result.substring(0,result.length-1)+"<span style=color:"+p+">;</span>"),"<span style=color:"+g+">"+result+"</span>"}function j(e){return"<span style=color:"+h+";font-weight:bold;>"+e+"</span>"}function x(e){var t,r,n,o,s,a,i,l,u,d,c=e,f="",g=[],p="";for(t=0;t<c.length;t++)"\\"==(r=c.substr(t,1))&&(g.push(c.substr(t,2)),r="W3JSESCAPE",t++),p+=r;for(c=p,1;n=H(c,"'","'",$),o=H(c,'"','"',$),s=H(c,/\/\*/,"*/",E),a=H(c,/\/\//,"<br>",E),l=D(c,L),i=Y("js",c,F),d=I(c,k),-1!=Math.max(l[0],n[0],o[0],s[0],a[0],i[0],d[0])&&-1!=(u=P(l,n,o,s,a,i,d))[0];)u[0]>-1&&(f+=c.substring(0,u[0]),f+=u[2](c.substring(u[0],u[1])),c=c.substr(u[1]));for(c=f+c,t=0;t<g.length;t++)c=c.replace("W3JSESCAPE",g[t]);return"<span style=color:"+m+">"+c+"</span>"}function $(e){return"<span style=color:"+w+">"+e+"</span>"}function F(e){return"<span style=color:"+b+">"+e+"</span>"}function L(e){return"<span style=color:"+y+">"+e+"</span>"}function k(e){return"<span style=color:"+N+">"+e+"</span>"}function I(e,t){var r,n,o,s,a=[".","<"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%"];if((s=e.indexOf("."))>-1)for(r=e.substr(s+1),o=0;o<r.length;o++)for(cc=r[o],n=0;n<a.length;n++)if(cc.indexOf(a[n])>-1)return[s+1,o+s+1,t];return[-1,-1,t]}function P(){var e,t=[];for(e=0;e<arguments.length;e++)arguments[e][0]>-1&&(0==t.length||arguments[e][0]<t[0])&&(t=arguments[e]);return 0==t.length&&(t=arguments[e]),t}function Y(e,t,r){var n,o,s,a,i=-1,l=-1;for("js"==e&&(n=["abstract","arguments","boolean","break","byte","case","catch","char","class","const","continue","debugger","default","delete","do","double","else","enum","eval","export","extends","false","final","finally","float","for","function","goto","if","implements","import","in","instanceof","int","interface","let","long","NaN","native","new","null","package","private","protected","public","return","short","static","super","switch","synchronized","this","throw","throws","transient","true","try","typeof","var","void","volatile","while","with","yield"]),o=0;o<n.length;o++)(s=t.indexOf(n[o]))>-1&&(a=/\W/g,t.substr(s+n[o].length,1).match(a)&&t.substr(s-1,1).match(a)&&s>-1&&(-1==i||s<i)&&(l=(i=s)+n[o].length));return[i,l,r]}function H(e,t,r,n){var o,s;return o=e.search(t),-1==(s=e.indexOf(r,o+r.length))&&(s=e.length),[o,s+r.length,n]}function D(e,t){var r,n,o,s,a,i=["<br>"," ",";","(","+",")","[","]",",","&",":","{","}","/","-","*","|","%","="],l=0;for(r=0;r<e.length;r++)for(n=0;n<i.length;n++)if((o=e.substr(r,i[n].length))==i[n]){if("-"==o&&("e"==e.substr(r-1,1)||"E"==e.substr(r-1,1)))continue;if(l<(s=r)&&(a=e.substring(l,s),!isNaN(a)))return[l,s,t];l=r+=i[n].length,r-=1;break}return[-1,-1,t]}o.style.fontFamily=r.fontFamily||"Consolas,'Courier New', monospace",n||(n="html"),"html"==n&&(s=function(e){var t,r,n,o,s,a=e,i="";t=new A(a,"&lt;!--","--&gt;",E,"W3HTMLCOMMENTPOS"),a=t.rest;for(;a.indexOf("&lt;")>-1;)o="",r=a.indexOf("&lt;"),"&LT;STYLE"==a.substr(r,9).toUpperCase()&&(o="css"),"&LT;SCRIPT"==a.substr(r,10).toUpperCase()&&(o="javascript"),-1==(n=a.indexOf("&gt;",r))&&(n=a.length),i+=a.substring(0,r),i+=v(a.substring(r,n+4)),a=a.substr(n+4),"css"==o&&(n=a.indexOf("&lt;/style&gt;"))>-1&&(i+=M(a.substring(0,n)),a=a.substr(n)),"javascript"==o&&(n=a.indexOf("&lt;/script&gt;"))>-1&&(i+=x(a.substring(0,n)),a=a.substr(n));for(a=i+a,s=0;s<t.arr.length;s++)a=a.replace("W3HTMLCOMMENTPOS",t.arr[s]);return a}(s)),"css"==n&&(s=M(s)),"js"==n&&(s=x(s)),o.innerHTML=s})(n,t,r),n.innerHTML},composeFunction:(...e)=>t=>e.reduceRight(((e,t)=>t(e)),t),curryFunction:(e,t=e.length,...r)=>t<=r.length?e(...r):curry.bind(null,e,t,...r),mobileOrDesktop:()=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"mobile":"desktop"},removeTags:e=>e.replace(/<[^>]*>/g,""),camelCase:e=>e.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s+/g,""),scrambleString:e=>{for(var t=e.split(""),r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),o=t[r];t[r]=t[n],t[n]=o}return t.join("")},drag:e=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");var t,r,n,o;function s(e){this.style.left=t+e.clientX-n+"px",this.style.top=r+e.clientY-o+"px"}return e.addEventListener("mousedown",(function(a){var i=window.getComputedStyle(e);e.style.top=i.getPropertyValue("top"),e.style.left=i.getPropertyValue("left"),e.style.right=i.getPropertyValue("right"),e.style.bottom=i.getPropertyValue("bottom"),this.style.position="absolute",t=this.offsetLeft,r=this.offsetTop,n=a.clientX,o=a.clientY,this.addEventListener("mousemove",s,!1),window.addEventListener("mouseup",(function(){e.removeEventListener("mousemove",s,!1)}),!1)}),!1),e},ease:{linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:(4-2*e)*e-1,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},getJSON:(e,t)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");fetch(e).then((e=>e.json())).then((e=>t(e))).catch((e=>{throw new Error(e.stack)}))},getHTML:(e,t)=>{if(isNode)throw new Error("No document element! (You are probably using Node.js)");fetch(e).then((e=>e.text())).then((e=>t(_$.parseHTML(e)))).catch((e=>{throw new Error(e.stack)}))},shuffleArray:e=>e.sort((()=>Math.random()-.5)),hashString:(e,t=0)=>{let r=3735928559^t,n=1103547991^t;for(let t,o=0;o<e.length;o++)t=e.charCodeAt(o),r=Math.imul(r^t,2654435761),n=Math.imul(n^t,1597334677);return r=Math.imul(r^r>>>16,2246822507)^Math.imul(n^n>>>13,3266489909),n=Math.imul(n^n>>>16,2246822507)^Math.imul(r^r>>>13,3266489909),4294967296*(2097151&n)+(r>>>0)},blendColors:(e,t,r=50)=>{const n=(e,t,r)=>e+r/100*(t-e),o=parseInt(`${e[1]}${e[2]}`,16),s=parseInt(`${e[3]}${e[4]}`,16),a=parseInt(`${e[5]}${e[6]}`,16),i=parseInt(`${t[1]}${t[2]}`,16),l=parseInt(`${t[3]}${t[4]}`,16),u=parseInt(`${t[5]}${t[6]}`,16);return((e,t,r)=>{let n=e.toString(16),o=t.toString(16),s=r.toString(16);for(;n.length<2;)n=`0${n}`;for(;o.length<2;)o=`0${o}`;for(;s.length<2;)s=`0${s}`;return`#${n}${o}${s}`})(Math.round(n(o,i,r)),Math.round(n(s,l,r)),Math.round(n(a,u,r)))},editDistance:(e,t)=>{if(0==e.length)return t.length;if(0==t.length)return e.length;var r,n,o=[];for(r=0;r<=t.length;r++)o[r]=[r];for(n=0;n<=e.length;n++)o[0][n]=n;for(r=1;r<=t.length;r++)for(n=1;n<=e.length;n++)t.charAt(r-1)==e.charAt(n-1)?o[r][n]=o[r-1][n-1]:o[r][n]=Math.min(o[r-1][n-1]+1,Math.min(o[r][n-1]+1,o[r-1][n]+1));return o[t.length][e.length]},byteSize:e=>new Blob([e]).size,elementSiblings:e=>[...e.parentElement.children].filter((t=>t!=e)),preloadImage:e=>{for(var t=0;t<arguments.length;t++)images[t]=new Image,images[t].src=preload.arguments[t]},replaceMultiple:(e,t)=>{var r=new RegExp(Object.keys(t).join("|"),"gi");return e=e.replace(r,(function(e){return mapObj[e]}))},urlQuery:(e,t=window.location.href)=>{e=e.replace(/[\[\]]/g,"\\$&");var r=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null},disableRightClick:e=>e.oncontextmenu=!1,sanitizeHTML:(e,t,r)=>{t=t||["A","B","BODY","DIV","BLOCKQUOTE","IMG","EM","HR","I","H1","H2","H3","H4","H5","H6","BR","ASIDE","MAIN","SPAN","SMALL","STRONG","UL","LI","TABLE","TH","TR","TD","OL","P","S"],r=r||["href","src"];var n=document.createElement("iframe");if(void 0===n.sandbox)throw new Error("Browser does not support sandboxed iframes.");n.sandbox="allow-same-origin",n.style.display="none",document.body.appendChild(n),n.contentDocument.body.innerHTML=e;var o=function e(o){if(o.nodeType==Node.TEXT_NODE)var s=o.cloneNode(!0);else if(o.nodeType==Node.ELEMENT_NODE&&t.includes(o.tagName)){s=n.contentDocument.createElement(o.tagName);for(var a=0;a<o.attributes.length;a++){var i=o.attributes[a];r.includes(i.name)&&s.setAttribute(i.name,i.value)}for(a=0;a<o.childNodes.length;a++){var l=e(o.childNodes[a]);s.appendChild(l,!1)}}else s=document.createDocumentFragment();return s}(n.contentDocument.body);return document.body.removeChild(n),o.innerHTML},inlineCSS:e=>{s=getComputedStyle(e);for(let t in s){let r=t.replace(/\-([a-z])/g,(e=>e[1].toUpperCase()));e.style[r]=s[t]}},saveBlob:(e,t="output/t")=>{var r=document.createElement("a");document.body.appendChild(r),r.style="display: none";var n=window.URL.createObjectURL(e);r.href=n,r.download=t,r.click(),window.URL.revokeObjectURL(n)},clone:e=>JSON.parse(JSON.stringify(e)),cookies:{setItem:(e,t,r=1e3)=>{var n="";if(r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),n="; expires="+o.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/"},getItem:e=>{for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null},removeItem:e=>{document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}},regex:{phone:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,name:/^(?:[a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?(?:[a-zA-Z]{1,})?)/,email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,link:/(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,strongPassword:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,moderatePassword:/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/,ipv4:/^ (([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2}| 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3 } ([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5]) $ /,ipv6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,ip:/ ((^\s*((([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2} | 2[0 - 4][0 - 9] | 25[0 - 5]) \.) { 3}([0 - 9] | [1 - 9][0 - 9] | 1[0 - 9]{ 2 }| 2[0 - 4][0 - 9] | 25[0 - 5])) \s * $)| (^\s * ((([0 - 9A - Fa - f]{ 1, 4 }:) { 7 } ([0 - 9A - Fa - f]{ 1, 4 }|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 6 } (: [0 - 9A - Fa - f]{ 1, 4 }| ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 5 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 2 })|: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 })|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 4 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 3 })| ((: [0 - 9A - Fa - f]{ 1, 4 })?: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 3 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 4 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 2 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 2 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 5 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 3 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (([0 - 9A - Fa - f]{ 1, 4 }:) { 1 } (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 6 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 4 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))| (: (((: [0 - 9A - Fa - f]{ 1, 4 }) { 1, 7 })| ((: [0 - 9A - Fa - f]{ 1, 4 }) { 0, 5 }: ((25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d) (\.(25[0 - 5] | 2[0 - 4]\d | 1\d\d | [1 - 9] ?\d)) { 3 }))|:))) (%.+) ?\s * $)) /,socialSecurity:/^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/,hex:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,zipCode:/(^\d{5}(-\d{4})?$)|(^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$)/,phone:/^\+?[\d\s]{3,}$/,visaCredit:/^4[0–9]{12}(?:[0–9]{3})?$/,expressCredit:/^3[47][0–9]{13}$/,mastercardCredit:/^(?:5[1–5][0–9]{2}|222[1–9]|22[3–9][0–9]|2[3–6][0–9]{2}|27[01][0–9]|2720)[0–9]{12}$/,discoverCredit:/^6(?:011|5[0–9]{2})[0–9]{12}$/}};_temp=_temp.sortObj(_temp);const _$=_temp,_=_temp,explosion=_temp;isNode&&(module.exports=_temp);