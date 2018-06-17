!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class a{constructor(){}createPopupWindow(){let e=document.createElement("div");e.classList.add("popup"),e.setAttribute("id","popup"),game.appendChild(e);let t=document.createElement("span");t.classList.add("cross"),t.innerHTML="×",e.appendChild(t),t.onclick=function(){game.removeChild(e)}}createRatingTable(){let e=document.createElement("h2");e.innerHTML="Rating list:",popup.appendChild(e);let t=document.createElement("ol");popup.appendChild(t);let n=JSON.parse(localStorage.getItem("arrayOfUsers"));n=n.sort(function(e,t){return t.killedEnemies-e.killedEnemies});for(let e=0;e<n.length;e++){let a=document.createElement("li");t.appendChild(a),a.appendChild(document.createTextNode(`Name: ${n[e].name}, killed enemies: ${n[e].killedEnemies}`))}}}class l{constructor(){this.name,this.chosenHead,this.chosenBody}choosePlayer(){game.setAttribute("style","background-color: #c4e381;");let e=document.createElement("div");e.setAttribute("id","choiceOfPlayer"),e.classList.add("choice_of_player"),game.appendChild(e);let t=document.createElement("h1");t.innerHTML="Choose your character:",e.appendChild(t);let n=document.createElement("div");n.classList.add("choice_of_head"),e.appendChild(n);let a=document.createElement("span");a.classList.add("controls"),a.innerHTML='<i class="fa fa-chevron-circle-left"></i>',n.appendChild(a);let l=document.createElement("div");l.classList.add("player_head"),l.id=1,l.setAttribute("style","background-image: url('img/head_1.png');"),n.appendChild(l);let i=document.createElement("span");i.classList.add("controls"),i.innerHTML='<i class="fa fa-chevron-circle-right"></i>',n.appendChild(i);let s=document.createElement("div");s.classList.add("choice_of_body"),e.appendChild(s);let d=document.createElement("span");d.classList.add("controls"),d.innerHTML='<i class="fa fa-chevron-circle-left"></i>',s.appendChild(d);let r=document.createElement("div");r.classList.add("player_body"),r.id=1,r.setAttribute("style","background-image: url('img/body_1.png');"),s.appendChild(r);let o=document.createElement("span");o.classList.add("controls"),o.innerHTML='<i class="fa fa-chevron-circle-right"></i>',s.appendChild(o);let c=0;function u(e,t,n){let a=(4+c+e)%4;t.id=a+1,t.setAttribute("style",`background-image: url('img/${n}_${a+1}.png');`),c=a}a.onclick=function(){u(-1,l,"head")},i.onclick=function(){u(1,l,"head")},d.onclick=function(){u(-1,r,"body")},o.onclick=function(){u(1,r,"body")}}buildRegistration(){let e=document.createElement("form");e.classList.add("users_form"),choiceOfPlayer.appendChild(e);let t=document.createElement("input");t.setAttribute("id","usersName"),t.setAttribute("type","text");let n=document.createElement("label");n.setAttribute("for","usersName"),n.innerHTML="Enter your name:",e.appendChild(n),e.appendChild(t);let l=document.createElement("button");l.setAttribute("id","play_game"),l.classList.add("play_button"),l.innerHTML="Play",l.setAttribute("type","submit"),e.appendChild(l);let i=document.createElement("button");i.setAttribute("id","buttonRating"),i.classList.add("rating_button"),i.innerHTML="Watch rating",e.appendChild(i),i.onclick=function(e){e.preventDefault();let t=new a;t.createPopupWindow(),t.createRatingTable()}}initialize(){this.choosePlayer(),this.buildRegistration()}}class i{constructor(){this.adjectives=["Imbecile","Vile","Fastidious","Deadly","Sullen","Vicious","Awful","Snotty","Smelly","Foul","Dangerous","Terrible","Sniffling"],this.nouns=["org","troll","hooligan","bully","dwarf","goblin","bugbear","freak","monster","sultry","ghoul"],this.names=["Yrec","Il'ich","Sanek","Dimas","Leha","Vlados","Antoha","Pashtet","Kolyan"],this.name=`${this.adjectives[Math.floor(Math.random()*this.adjectives.length)]} ${this.nouns[Math.floor(Math.random()*this.nouns.length)]} ${this.names[Math.floor(Math.random()*this.names.length)]}`,this.head=Math.ceil(4*Math.random()),this.body=Math.ceil(4*Math.random()),this.weapon=Math.ceil(3*Math.random())}buildEnemy(){let e=document.createElement("p");e.innerHTML=this.name,e.classList.add("characters_name"),e.classList.add("enemy_name"),game.appendChild(e);let t=document.createElement("div");t.id="lifeOfEnemy",t.classList.add("quantity_of_lost_life"),t.classList.add("quantity_of_lost_life_of_enemy"),t.innerHTML="100/100",game.appendChild(t);let n=document.createElement("div");n.classList.add("enemy_head"),n.classList.add(`enemy_body_${this.head}`),n.setAttribute("id","enemyHead"),game.appendChild(n);let a=document.createElement("div");a.classList.add("enemy_body"),a.classList.add(`enemy_body_${this.body}`),a.setAttribute("id","enemyBody"),game.appendChild(a);let l=document.createElement("div");l.classList.add("enemy_legs"),l.classList.add(`enemy_body_${this.body}`),l.setAttribute("id","enemyLegs"),game.appendChild(l);let i=document.createElement("div");i.classList.add("enemy_weapon"),i.classList.add(`enemy_weapon_${this.weapon}`),i.setAttribute("id","enemyWeapon"),game.appendChild(i),setInterval(function(){"325px"===n.style.bottom?(n.style.bottom="320px",i.style.bottom="125px"):(n.style.bottom="325px",i.style.bottom="130px")},500)}}class s{constructor(){}init(){game.innerHTML="";let e=document.createElement("div");e.id="gameOverWrapper",e.classList.add("global_wrap"),e.classList.add("grid"),game.appendChild(e);let t=document.createElement("h1");t.classList.add("gameover_text"),t.innerHTML="GAME OVER",e.appendChild(t);let n=document.createElement("h2");n.classList.add("gameover_text");let i=JSON.parse(localStorage.getItem("arrayOfUsers"));n.innerHTML=`Killed enemies: ${i[i.length-1].killedEnemies}`,e.appendChild(n);let s=document.createElement("button");s.id="registation_page",s.setAttribute("value","submit"),s.innerHTML="Registration page",s.classList.add("game_over_button"),e.appendChild(s);let d=document.createElement("button");d.setAttribute("id","buttonRating"),d.classList.add("game_over_button"),d.innerHTML="Watch rating",e.appendChild(d),d.onclick=function(e){e.preventDefault();let t=new a;t.createPopupWindow(),t.createRatingTable()},registation_page.onclick=function(e){e.preventDefault(),game.removeChild(gameOverWrapper),(new l).initialize()}}}class d{constructor(e){this.character=e}buidExplosion(){let e=document.createElement("div");e.id="explosionWrapper",e.classList.add("explosion_wrapper"),game.appendChild(e);let t=this.character;"player"===t&&e.classList.add("explosion_player"),"enemy"===t&&e.classList.add("explosion_enemy");let n=1;setInterval(function(){"player"===t&&e.setAttribute("style",`background-position: -150px ${580*-n}px;`),"enemy"===t&&e.setAttribute("style",`background-position: -80px ${580*-n}px;`),++n>5&&(n=1)},200),setTimeout(function(){game.removeChild(e),"enemy"===t&&(game.removeChild(enemyHead),game.removeChild(enemyBody),game.removeChild(enemyLegs),game.removeChild(enemyWeapon)),"player"===t&&(game.removeChild(playerHead),game.removeChild(playerBody),game.removeChild(playerLegs),setTimeout(function(){(new s).init()},1e3))},2e3)}}class r{constructor(){}buidAttack(e){let t=document.createElement("div");t.id="fireAttackWrapper",t.classList.add("fire_attack_wrapper"),game.appendChild(t);let n,a,l=1;"player"===e&&(n=0,a=0),"enemy"===e&&(n=-270,a=window.innerWidth-500),setInterval(function(){1===l?t.setAttribute("style",`background-position: ${-55-280*l}px ${n}px;`):t.setAttribute("style",`background-position: ${-55*l-280*l}px ${n}px;`),++l>5&&(l=1)},100);let i=new Audio;var s;s="audio/Sound_20640.mp3",i.pause(),i.currentTime=2,i.src=s,i.play();let r=setInterval(function(){"player"===e&&(a>window.innerWidth-500?(clearInterval(r),game.removeChild(t)):(a+=95,t.style.left=`${a}px`));if("enemy"===e&&enemyBody)if(a<50){clearInterval(r),game.removeChild(t);let e=lifeOfPlayer.innerHTML.split(/\//g);if(lifeOfPlayer.innerHTML=`${e[0]-10}/100`,lifeOfPlayer.setAttribute("style",`background-position: -${3.5*(100-(e[0]-10))}px -11px;`),e[0]-10==0){let e=new d("player");e.buidExplosion()}}else a-=95,t.style.left=`${a}px`},100)}}class o{constructor(){}createCongratulations(){let e=document.getElementById("game"),t=document.createElement("div"),n=document.createElement("p"),a=document.createElement("div");t.className="flex global_wrap",a.setAttribute("id","anim"),a.className="flex slide task_wrap",e.appendChild(t),t.appendChild(a),n.className="congrats-text",n.innerHTML="Congratulations!!!",a.appendChild(n),setTimeout(function(){game.removeChild(t)},2e3)}}class c{constructor(){this.word=vocabulary[Math.floor(Math.random()*vocabulary.length)].word}buildTask(){let e=document.createElement("div");e.id="task",e.classList.add("global_wrap"),e.classList.add("grid"),game.appendChild(e);let t=document.createElement("h1");t.innerHTML="Restore the mixed word",e.appendChild(t);let n="";function a(e){let t,a=e.length-1;for(;a>=0;)t=Math.floor(Math.random()*a),n+=e[t],e=e.slice(0,t)+e.slice(t+1),a--}for(a(this.word);n===this.word;)n="",a(this.word);let l=document.createElement("ul");l.setAttribute("id","listOfMixedLetters"),l.classList.add("listOfMixedLetters"),e.appendChild(l);let i=n.length;for(let e=0;e<i;e++){let t=document.createElement("li");t.innerHTML=n[e],l.appendChild(t)}$(function(){$("#listOfMixedLetters").sortable(),$("#listOfMixedLetters").disableSelection()});let s=document.createElement("button");s.setAttribute("value","submit"),s.innerHTML="answer",s.classList.add("submit_task"),s.classList.add("drag_n_drop_button"),e.appendChild(s);let c=this.word;s.onclick=function(){event.preventDefault();let t=Array.from(document.getElementsByTagName("li")),n="";for(let e=0;e<t.length;e++)n+=t[e].innerHTML;let a=new r,l=new h;if(c===n){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let t=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${t[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(t[0]-20))-368}px -57px;`),t[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){a.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){l.buildSkills(),l.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){a.buidAttack("enemy")},2e3),setTimeout(function(){l.buildSkills(),l.addEventsOnSkills()},4e3))}game.removeChild(e)}}}class u{constructor(){}buildMathTask(){let e,t,n=!0,a="",l="",i=0,s=0;function c(e){return Math.floor(Math.random()*e)}function u(e,t,n){switch(t){case"+":return e+n;case"−":return e-n;case"×":return e*n;case"÷":return e/n;default:return!1}}for(;n;)e=["+","−","×","÷"][c(4)],i=c(17),s=c(17),"−"==e&&(i+=s),"÷"==e&&(i*=s=c(12)+5),t=i+" "+e+" "+s,n=!1,a=void 0==(l=u(i,e,s))?"Correct! ":"Incorrect, "+t+" = "+l+".\n";let m=document.getElementById("game"),p=document.createElement("div");p.id="task";let f=document.createElement("div"),y=document.createElement("form"),b=document.createElement("label"),g=document.createElement("input"),k=document.createElement("button"),E=document.createElement("h1");m.appendChild(p),p.className="flex global_wrap",E.className="task",E.innerHTML="Try to solve it",f.appendChild(E),f.className="flex task_wrap",y.className="flex task_form",b.className="flex task_random",b.setAttribute("id","math"),g.setAttribute("id","ans"),g.setAttribute("type","text"),g.setAttribute("autocomplete","off"),g.className="insert_word",k.className="submit_task",k.setAttribute("id","check_answer"),k.innerHTML="Answer",p.appendChild(f),f.appendChild(y),y.appendChild(b),y.appendChild(g),y.appendChild(k),document.getElementById("math").innerHTML=t+"=",document.getElementById("check_answer").onclick=function(e){e.preventDefault();let t=document.getElementById("ans"),n=new r,a=new h;if(t.value==l){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let t=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${t[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(t[0]-20))-368}px -57px;`),t[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){n.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){n.buidAttack("enemy")},2e3),setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},4e3))}game.removeChild(task)}}}class m{constructor(){}createAnimalTask(){let e=document.createElement("div");e.className="flex global_wrap",e.id="task",game.appendChild(e);let t=document.createElement("div");t.className="flex task_wrap";let n=document.createElement("img"),a=document.createElement("h1");a.className="task",n.className="flex animal_task",e.appendChild(t),t.appendChild(a),a.innerHTML="Who is it?";let l=document.createElement("input");l.setAttribute("id","animal_name"),l.className="insert_word",l.setAttribute("type","text"),t.appendChild(n),t.appendChild(l);let i=document.createElement("button");i.innerHTML="Answer",i.className="submit_task",i.setAttribute("id","animal_submit"),i.setAttribute("value","submit"),t.appendChild(i);let s=["elephant","leopard","lion","rabbit","zebra","bat","bear","beaver","cat","chicken","cow","crab","dog","goose","horse","kangaroo","koala","monkey","squirrel","tiger","wolf"],c=s[Math.floor(Math.random()*s.length)];n.setAttribute("src",`img/${c}.png`),animal_submit.onclick=function(e){e.preventDefault();let t=document.getElementById("animal_name").value,n=new r,a=new h;if(t===c){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let t=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${t[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(t[0]-20))-368}px -57px;`),t[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){n.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){n.buidAttack("enemy")},2e3),setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},4e3))}game.removeChild(task)}}}class p{constructor(){this.word=vocabulary[Math.floor(Math.random()*vocabulary.length)].word.toUpperCase()}createListening(){let e=document.getElementById("game"),t=document.createElement("div");t.setAttribute("id","component"),t.className="flex global_wrap",e.appendChild(t);let n=document.createElement("form");n.className="flex task_form";let a=document.createElement("input"),l=document.createElement("input"),i=document.createElement("button"),s=document.createElement("div"),c=document.createElement("i"),u=(document.createElement("div"),document.createElement("h1")),m=document.createElement("div");m.appendChild(u),m.appendChild(n),m.className="flex task_wrap",u.className="task",u.innerHTML="Enter the word you heard",t.appendChild(m),a.setAttribute("id","speak"),a.className="listen_word",a.setAttribute("type","button"),a.setAttribute("value","Listen"),s.appendChild(c),s.className="flex virtual-keyboard-hook",s.setAttribute("data-target-id","type-word"),s.setAttribute("data-keyboard-mapping","qwerty"),c.className="fa fa-keyboard-o",c.setAttribute("aria-hidden","true"),i.innerHTML="Submit",n.appendChild(a),n.appendChild(l),n.appendChild(i),n.appendChild(s),l.setAttribute("id","type-word"),l.className="insert_word",l.setAttribute("type","text"),l.setAttribute("autocomplete","off"),l.setAttribute("virtual-keyboard",""),l.className="insert_word",i.setAttribute("id","check"),i.className="submit_task",i.setAttribute("type","submit");document.getElementById("type-word");let p=this.word;this.win;speak.onclick=function(e){responsiveVoice.speak(p)},check.onclick=function(e){e.preventDefault();let t=document.getElementById("type-word").value.toUpperCase(),n=new r,a=new h;if(p===t){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let t=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${t[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(t[0]-20))-368}px -57px;`),t[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){n.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){n.buidAttack("enemy")},2e3),setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},4e3))}game.removeChild(component)}}}class f{constructor(){}createTranslation(){let e=document.getElementById("game"),t=document.createElement("div");t.className="flex global_wrap",t.id="task",e.appendChild(t);let n=document.createElement("div");t.appendChild(n),n.className="flex task_wrap";let a=document.createElement("h1");a.className="task",a.innerHTML="Try to translate it",n.appendChild(a);let l=document.createElement("form");l.className="flex task_form",n.appendChild(l);let i=document.createElement("label");i.className="task_random",i.setAttribute("id","eng"),l.appendChild(i);let s=document.createElement("input");s.setAttribute("id","translate"),s.setAttribute("type","text"),s.setAttribute("autocomplete","off"),s.className="insert_word",l.appendChild(s);let c=document.createElement("button");c.className="submit_task",c.setAttribute("id","check_translate"),c.innerHTML="Answer",l.appendChild(c);let u=Math.floor(Math.random()*vocabulary.length),m=vocabulary[u].word,p=vocabulary[u].translate;document.getElementById("eng").innerHTML=m,document.getElementById("check_translate").onclick=function(e){e.preventDefault();let t=document.getElementById("translate").value,n=new r,a=new h;if(-1!=p.indexOf(t)){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let t=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${t[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(t[0]-20))-368}px -57px;`),t[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){n.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){n.buidAttack("enemy")},2e3),setTimeout(function(){a.buildSkills(),a.addEventsOnSkills()},4e3))}game.removeChild(task)}}}class y{constructor(){this.words=[],this.translates=[],this.shuffledArr=[]}buildTask(){let e=document.createElement("div");e.id="task",e.classList.add("global_wrap"),e.classList.add("grid"),game.appendChild(e);let t=document.createElement("h1");for(t.innerHTML="Match the words",e.appendChild(t);5!==this.words.length;){let e=Math.floor(Math.random()*vocabulary.length);-1===this.words.indexOf(vocabulary[e].word)&&(this.words.push(vocabulary[e].word),this.translates.push(vocabulary[e].translate),this.shuffledArr.push(vocabulary[e].translate))}!function(e){let t,n,a=e.length;for(;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t}(this.shuffledArr);let n=document.createElement("div");n.style.display="flex",e.appendChild(n);let a=document.createElement("ul");a.setAttribute("id","listOfWords"),a.classList.add("listOfWordsToMatch"),n.appendChild(a);for(let e=0;e<5;e++){let t=document.createElement("li");t.innerHTML=this.words[e],a.appendChild(t)}let l=document.createElement("ul");l.setAttribute("id","listOfTranslate"),l.classList.add("listOfWordsToMatch"),n.appendChild(l);for(let e=0;e<5;e++){let t=document.createElement("li");t.innerHTML=this.shuffledArr[e][0],l.appendChild(t)}$(function(){$("#listOfTranslate").sortable(),$("#listOfTranslate").disableSelection()});let i=document.createElement("button");i.setAttribute("value","submit"),i.innerHTML="answer",i.classList.add("submit_task"),i.classList.add("drag_n_drop_button"),e.appendChild(i);let s=this.translates;i.onclick=function(){event.preventDefault();let t,n=Array.from(document.getElementsByTagName("li"));for(let e=0;e<5;e++)t=n[e+5].innerHTML===s[e][0];let a=new r,l=new h;if(t){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let t=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${t[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(t[0]-20))-368}px -57px;`),t[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){a.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){l.buildSkills(),l.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){a.buidAttack("enemy")},2e3),setTimeout(function(){l.buildSkills(),l.addEventsOnSkills()},4e3))}game.removeChild(e)}}}class b{constructor(){}buildTranslateNumber(){let e=document.getElementById("game"),t=document.createElement("div");t.className="flex global_wrap",t.id="task",e.appendChild(t);let n=document.createElement("div");t.appendChild(n),n.className="flex task_wrap";let a=document.createElement("h1");a.className="task",a.innerHTML="Translate the number:",n.appendChild(a);let l=document.createElement("form");l.className="flex task_form",n.appendChild(l);let i=document.createElement("label");i.className="task_random",i.setAttribute("id","get_number"),l.appendChild(i);let s=document.createElement("input");s.setAttribute("id","translate_number"),s.setAttribute("type","text"),s.setAttribute("autocomplete","off"),s.className="insert_word",l.appendChild(s);let c=document.createElement("button");c.className="submit_task",c.setAttribute("id","check_translate"),c.innerHTML="Answer",l.appendChild(c);let u=Math.floor(Math.random()*numbers.length),m=numbers[u].onscreen,p=numbers[u].translate;document.getElementById("get_number").innerHTML=m,document.getElementById("check_translate").onclick=function(e){e.preventDefault();let t=new r,n=new h,a=document.getElementById("translate_number").value;if(-1!==p.indexOf(a)){(new o).createCongratulations();let e=new r;setTimeout(function(){e.buidAttack("player")},2e3);let a=lifeOfEnemy.innerHTML.split(/\//g);if(lifeOfEnemy.innerHTML=`${a[0]-20}/100`,lifeOfEnemy.setAttribute("style",`background-position: ${3.5*(100-(a[0]-20))-368}px -57px;`),a[0]-20==0){let e=new d("enemy");setTimeout(function(){e.buidExplosion()},3e3)}else setTimeout(function(){t.buidAttack("enemy")},4e3),playerBody&&setTimeout(function(){n.buildSkills(),n.addEventsOnSkills()},6e3)}else{(new r).buidAttack("player"),enemyBody&&(setTimeout(function(){t.buidAttack("enemy")},2e3),setTimeout(function(){n.buildSkills(),n.addEventsOnSkills()},4e3))}game.removeChild(task)}}}class h{constructor(){}buildSkills(){let e=document.getElementById("game"),t=document.createElement("div");t.id="choiceOfSkills",t.className="flex flex_container";let n=document.createElement("div");t.appendChild(n),n.setAttribute("id","skill_board"),n.className="flex wrap_skills",e.appendChild(t),t.appendChild(n);for(let e=1;e<=7;e++){let t=document.createElement("div");t.id=`skill_${e}`,t.className=`skill skill_${e}`,n.appendChild(t)}}addEventsOnSkills(){skill_board.onclick=function(e){if("skill_1"===e.target.id){(new c).buildTask(),game.removeChild(choiceOfSkills)}if("skill_2"===e.target.id){(new u).buildMathTask(),game.removeChild(choiceOfSkills)}if("skill_3"===e.target.id){(new m).createAnimalTask(),game.removeChild(choiceOfSkills)}if("skill_4"===e.target.id){(new p).createListening(),game.removeChild(choiceOfSkills)}if("skill_5"===e.target.id){(new f).createTranslation(),game.removeChild(choiceOfSkills)}if("skill_6"===e.target.id){(new y).buildTask(),game.removeChild(choiceOfSkills)}if("skill_7"===e.target.id){(new b).buildTranslateNumber(),game.removeChild(choiceOfSkills)}}}}class g{constructor(){}startGame(){game.setAttribute("style",`background: url(img/backgrounds/background_${Math.ceil(7*Math.random())}.png) repeat bottom / cover;`);let e=document.createElement("button");e.setAttribute("id","finishGame"),e.classList.add("finish_game_button"),e.innerHTML="Finish game",game.appendChild(e),e.onclick=function(){(new s).init()},(new i).buildEnemy();let t=new h;t.buildSkills(),t.addEventsOnSkills()}}$(document).ready(function(){(new l).initialize(),play_game.onclick=function(e){if(!usersName.value)return alert("Please, enter your name!"),!1;e.preventDefault();let t=new class{constructor(){this.name,this.head,this.body}buildPlayer(){let e=document.createElement("p");e.innerHTML=this.name,e.classList.add("characters_name"),e.classList.add("player_name"),game.appendChild(e);let t=document.createElement("div");t.id="lifeOfPlayer",t.classList.add("quantity_of_lost_life"),t.classList.add("quantity_of_lost_life_of_player"),t.innerHTML="100/100",game.appendChild(t);let n=document.createElement("div");n.classList.add(`player_head_${this.head}`),n.setAttribute("id","playerHead"),game.appendChild(n);let a=document.createElement("div");a.classList.add("player_body"),a.classList.add(`player_body_${this.body}`),a.setAttribute("id","playerBody"),game.appendChild(a);let l=document.createElement("div");l.classList.add("player_legs"),l.classList.add(`player_body_${this.body}`),l.setAttribute("style","background-position: -22px -5px;"),l.setAttribute("id","playerLegs"),game.appendChild(l),setInterval(function(){"137px"===a.style.bottom?(n.style.bottom="307px",a.style.bottom="132px"):(n.style.bottom="312px",a.style.bottom="137px")},500)}addMoveability(){function e(e){"back"===e?playerLegs.setAttribute("style","background-position: -27px -115px;"):"forward"===e&&playerLegs.setAttribute("style","background-position: -22px -5px;"),playerLegs.style.left=playerBody.style.left}document.onkeyup=function(t){39===t.keyCode?e("forward"):37===t.keyCode&&e("back")}}initialize(){this.buildPlayer(),this.addMoveability()}};t.name=usersName.value,t.head=document.querySelector(".player_head").getAttribute("id"),t.body=document.querySelector(".player_body").getAttribute("id");let n=[];localStorage.getItem("arrayOfUsers")&&(n=JSON.parse(localStorage.getItem("arrayOfUsers")));let a={};a.name=t.name,a.killedEnemies=0,n.push(a),localStorage.setItem("arrayOfUsers",JSON.stringify(n)),game.innerHTML="",t.initialize();let l=new g;l.startGame();let i=20;function s(e){if("back"===e)i>=20&&(i-=15),playerBody.setAttribute("style","background-position: -215px -242px;"),playerHead.setAttribute("style","background-position: -170px 0px;"),playerLegs.setAttribute("style","background-position: -415px -110px;");else if("forward"===e){document.getElementById("enemyBody")||(i+=15),playerBody.setAttribute("style","background-position: -20px -242px;"),playerHead.setAttribute("style","background-position: 0px 0px;"),playerLegs.setAttribute("style","background-position: -210px -5px;")}playerBody.style.left=`${i}px`,playerHead.style.left=`${i}px`,playerLegs.style.left=`${i}px`,i>window.innerWidth-500&&(i=0,game.innerHTML="",t.initialize(),a.killedEnemies++,(n=JSON.parse(localStorage.getItem("arrayOfUsers")))[n.length-1].killedEnemies=a.killedEnemies,localStorage.setItem("arrayOfUsers",JSON.stringify(n)),(l=new g).startGame())}document.onkeydown=function(e){39===e.keyCode?s("forward"):37===e.keyCode&&s("back")}}})}]);
//# sourceMappingURL=app.bundle.js.map