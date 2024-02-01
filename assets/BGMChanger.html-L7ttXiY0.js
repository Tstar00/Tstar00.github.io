import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as a,c as i,a as t,d as e,b as s,e as c}from"./app-TDcd5BQm.js";const l={},p=c('<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>BGMChanger 默认关闭</p><p>打开对应ini文件，会看到各个BGM （th123\\Modules\\BGMChanger\\BGMChanger.ini）</p><p>path 即文件路径，推荐自己新键一个非中文名文件夹，设置path为Modules/BGMChanger/文件夹/文件.ogg<br> intro 即开始循环点（秒数 x 44100）<br> loop 即为从intro点开始过多久就回到intro点（秒数 x 44100）</p><p>个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 秒数*44100 即可循环</p><p>示例：<br> path=Modules/BGMChanger/0/12-till-when.ogg<br> intro=1265361<br> loop=2954303</p><p>path=Modules/BGMChanger/0/23-till-when-alternative-version.ogg<br> intro=1<br> loop=8621663</p></div>',1),h={class:"hint-container warning"},d=t("p",{class:"hint-container-title"},"注意",-1),_=t("strong",null,"替换用的音乐文件必须是ogg格式，44100 HZ",-1),g={href:"https://convertio.co/zh/%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},u=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp",alt:"转化设置如图，否则可能会发生游戏内无法播放没声音的情况",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"转化设置如图，否则可能会发生游戏内无法播放没声音的情况")],-1);function b(f,B){const o=r("ExternalLinkIcon");return a(),i("div",null,[p,t("div",h,[d,t("p",null,[_,e(" （可以使用这个网站在线转换 "),t("a",g,[e("https://convertio.co/zh/）"),s(o)])]),u])])}const v=n(l,[["render",b],["__file","BGMChanger.html.vue"]]);export{v as default};
