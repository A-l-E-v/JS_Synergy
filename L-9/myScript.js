// https://github.com/A-l-E-v/JS_Synergy/blob/main/L-9/myScript.js

// 3. Создайте скрипт, который в html-документе создает следующую структуру:
// <div class="post-wrap">
// <div class="post-item">
// <div class="post-item-wrap">
// <a class="post-link">
// <h3 class="post-title">My new div
// <p class="post-content">Some long text</p>
// </h3>
// </a>
// </div>
// </div>
// </div>

function createDiv() {
    let div1 = document.createElement('div')
    div1.className = 'post-wrap'
    let div2 = document.createElement('div')
    div2.className = 'post-item'
    let div3 = document.createElement('div')
    div3.className = 'post-item-wrap'
    let a = document.createElement('a')
    a.className = 'post-link'
    let h3 = document.createElement('h3')
    h3.className = 'post-title'
    h3.innerHTML = 'My new div'
    let p = document.createElement('p')
    p.className = 'post-content'
    p.innerHTML = "A Promise is a proxy for a value not necessarily known when \
    the promise is created. It allows you to associate handlers with an asynchronous\
     action's eventual success value or failure reason. This lets asynchronous methods\
      return values like synchronous methods: instead of immediately returning the final\
       value, the asynchronous method returns a promise to supply the value at some point\
        in the future."

    document.getElementById('main').appendChild(div1)
    document.getElementsByClassName('post-wrap')[0].appendChild(div2)
    document.getElementsByClassName('post-item')[0].appendChild(div3)
    document.getElementsByClassName('post-item-wrap')[0].appendChild(a)
    document.getElementsByClassName('post-link')[0].appendChild(h3)
    document.getElementsByClassName('post-title')[0].appendChild(p)


}
