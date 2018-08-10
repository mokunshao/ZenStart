// todo:以后尝试用 onclick 代替 a 元素

// 初始化数据
var keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
}

var hash = {
    'q': 'qq.com', 
    'w': 'weibo.com', 
    'e': 'ele.me', 
    'r': 'people.com.cn', 
    't': 'taobao.com', 
    'y': 'youtube.com', 
    'u': 'uc.cn', 
    'i': 'iqiyi.com', 
    'o': 'oppo.com', 
    'p': 'pinduoduo.com', 
    'a': 'amazon.cn', 
    's': 'sina.com.cn',
    'd': 'douyu.com',
    'f': 'www.ifeng.com',
    'g': 'google.com',
    'h': 'hupu.com',
    'j': 'www.jd.com',
    'k': 'kuaishou.com',
    'l': 'lol.qq.com',
    'z': 'zhihu.com', 
    'x': 'xinhuanet.com',
    'c': 'cctv.com',
    'v': 'v2ex.com',
    'b': 'bilibili.com',
    'n': 'nba.com',
    'm': 'meituan.com'
}

// 取出 LocalStorage 中 zzz 对应的 hash
var hashInLocalStorage = JSON.parse(localStorage.getItem("zzz") || 'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}

// 生成键盘
for(var index = 0; index<keys["length"]; index++){

    // 创建三个 class="row" 的 div
    var div = document.createElement("div");
    div.className = "row"
    main.appendChild(div);

    var row = keys[index]; // 第一个数组 第二个数组 第三个数组
    
    for(var index2 = 0; index2 < row["length"]; index2++){ //0~10 0~9 0~7
        
        // 创建 kbd
        var kbd = document.createElement("kbd"); 
        div.appendChild(kbd);

        //kbd 里的超链接
        var link = document.createElement("a");
        link.href = ("http://"+hash[row[index2]])
        link.setAttribute("target","_blank")
        link.textContent = row[index2]
        kbd.appendChild(link)

        // 当鼠标浮在 kbd 上时显示域名
        kbd.setAttribute("title",hash[row[index2]])

        // 添加 button
        var button = document.createElement("button");
        kbd.appendChild(button);
        button.textContent = '编辑'
        button.id = row[index2]

        // 添加 icon        
        var icon = document.createElement("img")
        kbd.appendChild(icon)
        if(hash[row[index2]]){
            icon.src = "http://"+hash[row[index2]]+"/favicon.ico"
        }else{
            icon.src = "blank.png"
        }
        icon.onerror = function(failure){
            failure.target.src = "blank.png"
        }

        // 用户更改网址
        button.onclick = function(mouseClick){
            var button2 = mouseClick.target
            var key = button2.id
            var icon2 = button2.nextSibling
            var customDomain = prompt("给我一个网址")
            hash[key] = customDomain
            icon2.src = "http://"+ customDomain +"/favicon.ico"
            icon2.onerror = function(failure){
                failure.target.src = "blank.png"
            }
            localStorage.setItem('zzz',JSON.stringify(hash))
        }
    }
}

// 输入按键启动网页
document.onkeypress = function(keyPress){
    var key = (keyPress['key'])
    var website = hash[key]
    window.open('http://'+ website, '_blank')
}