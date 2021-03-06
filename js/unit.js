/**
 * 下拉菜单
 */
function showMenu(parent,menu){
    $(parent).on("mousemove",function(){
        $(this).find(menu).stop(true,true).show()
    })
    $(parent).on("mouseout",function(){
        $(this).find(menu).stop(true,true).hide()
    })
}

/**
 * 菜单选择
 */
function selMenu(parent,menu,classTXT){
    $(parent).find(menu).on("click",function(){
        $(this).find("a").addClass(classTXT).parent().siblings().find("a").removeClass(classTXT)
    })
}

/**
 * 选中与取消
 */
function hasOrNo(ele,hasCls,noCls){
    $(ele).on("click",function(){
        var status = $(this).attr("data-ck")
        $(this).removeClass(noCls).removeClass(hasCls)
        if(status==0){
            $(this).attr("data-ck",1)
            $(this).addClass(hasCls)
        }
        if(status==1){
            $(this).attr("data-ck",0)
            $(this).addClass(noCls)
        }
    })
}


/**
 * 弹窗
 */
function pop(className){
    easyDialog.open({
        container:className,
        fixed: false
    });
}

/**
 * 进度条
 * ele     定位元素
 * num1    目标值
 * num2    总值
 */
function progress(ele,num1,num2){
    var timer01,timer02;
    var w = num1/num2*100;
    var start=0;
    var pw = 0;
    $(ele).find(".total-nums").text(num2);
    var startEle = $(ele).find(".first-nums");
    var progressBar = $(ele).find(".inner-bar"); 
    
    timer01 = setInterval(function(){
        if(num1<100){
            start+=1;
        }else {
            start+=10;
        }
        $(startEle).text(start);
        if(start>=num1 || start>=num2) {
            $(startEle).text(num1);
            clearInterval(timer01)
        }
    },2)
    timer02 = setInterval(function(){
        if(num1<100){
            pw+=1;
        }else {
            pw+=0.1;
        }
        $(progressBar).css("width",pw+"%");
        if(pw>=w) {
            $(progressBar).css("width",w+"%");
            clearInterval(timer02)
        }
    },2)
    
}

/**
 * 路由跳转
 * ele 跳转来源
 * target 跳转目的地
 */
function jumpTo(ele,target,event){
    event.preventDefault();
    var src = $(ele).attr("href")
    $(ele).addClass("active").parent().parent().parent().find("li").removeClass("active")
    $(target).prop("src",src)
}

/**
 * tab切换
 * ele tab切换父元素
 */
function changeTab(ele){
    var index = $(ele).index();
    console.log(index)
    $(ele).addClass("active").siblings().removeClass("active")
        .parent().parent().find(".content").eq(index).show()
        .siblings(".content").hide();
}

/**
 * iframe自适应高度，height为手动设置的最小高度
 */
function initIframeHeight(height){
    var userAgent = navigator.userAgent;
    var iframe = parent.document.getElementById("userContent");
    var subdoc = iframe.contentDocument || iframe.contentWindow.document;
    var subbody = subdoc.body;
    var realHeight;
    //谷歌浏览器特殊处理
    if(userAgent.indexOf("Chrome") > -1){
        realHeight = subdoc.documentElement.scrollHeight;
    }
    else{
        realHeight = subbody.scrollHeight;
    }
    if(realHeight < height){
        $(iframe).height(height);
    }
    else{
        $(iframe).height(realHeight);
    }
}

//视频播放设置中文
if(typeof videojs!=="undefined"){
    videojs.addLanguage('zh-CN', {
        "Play": "播放",
        "Pause": "暂停",
        "Current Time": "当前时间",
        "Duration": "时长",
        "Remaining Time": "剩余时间",
        "Stream Type": "媒体流类型",
        "LIVE": "直播",
        "Loaded": "加载完毕",
        "Progress": "进度",
        "Fullscreen": "全屏",
        "Non-Fullscreen": "退出全屏",
        "Mute": "静音",
        "Unmute": "取消静音",
        "Playback Rate": "播放速度",
        "Subtitles": "字幕",
        "subtitles off": "关闭字幕",
        "Captions": "内嵌字幕",
        "captions off": "关闭内嵌字幕",
        "Chapters": "节目段落",
        "Close Modal Dialog": "关闭弹窗",
        "Descriptions": "描述",
        "descriptions off": "关闭描述",
        "Audio Track": "音轨",
        "You aborted the media playback": "视频播放被终止",
        "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
        "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
        "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
        "No compatible source was found for this media.": "无法找到此视频兼容的源。",
        "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
        "Play Video": "播放视频",
        "Close": "关闭",
        "Modal Window": "弹窗",
        "This is a modal window": "这是一个弹窗",
        "This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
        ", opens captions settings dialog": ", 开启标题设置弹窗",
        ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
        ", opens descriptions settings dialog": ", 开启描述设置弹窗",
        ", selected": ", 选择",
        "captions settings": "字幕设定",
        "Audio Player": "音频播放器",
        "Video Player": "视频播放器",
        "Replay": "重播",
        "Progress Bar": "进度小节",
        "Volume Level": "音量",
        "subtitles settings": "字幕设定",
        "descriptions settings": "描述设定",
        "Text": "文字",
        "White": "白",
        "Black": "黑",
        "Red": "红",
        "Green": "绿",
        "Blue": "蓝",
        "Yellow": "黄",
        "Magenta": "紫红",
        "Cyan": "青",
        "Background": "背景",
        "Window": "视窗",
        "Transparent": "透明",
        "Semi-Transparent": "半透明",
        "Opaque": "不透明",
        "Font Size": "字体尺寸",
        "Text Edge Style": "字体边缘样式",
        "None": "无",
        "Raised": "浮雕",
        "Depressed": "压低",
        "Uniform": "均匀",
        "Dropshadow": "下阴影",
        "Font Family": "字体库",
        "Proportional Sans-Serif": "比例无细体",
        "Monospace Sans-Serif": "单间隔无细体",
        "Proportional Serif": "比例细体",
        "Monospace Serif": "单间隔细体",
        "Casual": "舒适",
        "Script": "手写体",
        "Small Caps": "小型大写字体",
        "Reset": "重启",
        "restore all settings to the default values": "恢复全部设定至预设值",
        "Done": "完成",
        "Caption Settings Dialog": "字幕设定视窗",
        "Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
        "End of dialog window.": "结束对话视窗"
    });
}
