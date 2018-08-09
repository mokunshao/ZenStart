keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}
hash = {
    'q': 'qq.com', 
    'w': 'weibo.com', 
    'e': 'ele.me', 
    'r': 'people.com.cn', 
    't': 'tianya.cn', 
    'y': 'yy.com', 
    'u': 'uc.cn', 
    'i': 'iqiyi.com', 
    'o': 'opera.com', 
    'p': undefined, 
    'a': 'acfun.cn', 
    's': 'sohu.com', 
    'z': 'zhihu.com', 
    'm': 'mcdonalds.com.cn'
}

hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

var index = 0;
while(index<keys["length"]){ // 0 1 2
    var div=document.createElement("div");
    div.className="row"
    main.appendChild(div);
    var row=keys[index]; // 第一个数组 第二个数组 第三个数组
    index2=0;
    while(index2<row["length"]){  //0-9 0-8 0-6
        var kbd=document.createElement("kbd");
        div.appendChild(kbd);

        // 由于要加超链接,不用以下写法
        // kbd.textContent=row[index2]; // q w e
        // kbd.className = "key"

        //kbd里的超链接
        var fun = document.createElement("a");
        fun.href=("http://www."+hash[row[index2]])
        fun.setAttribute("target","_blank")
        fun.textContent =row[index2]
        kbd.appendChild(fun)

        // 当鼠标浮在kbd上时显示域名
        kbd.setAttribute("title",hash[row[index2]])

        // kbd里添加button和icon
        var button = document.createElement("button");
        kbd.appendChild(button);
        button.textContent='编辑'
        button.id = row[index2]
        var icon = document.createElement("img")
        kbd.appendChild(icon)

        // 添加icon
        if(hash[row[index2]]){
            icon.src = "http://www."+hash[row[index2]]+"/favicon.ico"
        }else{
            icon.src = "1.png"
        }

        icon.onerror = function(xxx){
            xxx.target.src = "1.png"
        }

        // 用户更改网址
        button.onclick = function(mkss){
            key = mkss.target.id
            x = prompt("给我一个网址")
            hash[key] = x
            localStorage.setItem('zzz',JSON.stringify(hash))
        }
        index2++;
    }
    index++;
}

// 输入按键启动网页
document.onkeypress = function(mkss){
    key = (mkss['key'])
    website = hash[key]
    window.open('http://'+website, '_blank')
}