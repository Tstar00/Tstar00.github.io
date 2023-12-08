import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as i,a as o,d as c,w as r,b as t,f as d}from"./app-8909229c.js";const l={},h=d('<h2 id="打开游戏没反应-没窗口出现-任务栏也没有" tabindex="-1"><a class="header-anchor" href="#打开游戏没反应-没窗口出现-任务栏也没有" aria-hidden="true">#</a> <strong>打开游戏没反应，没窗口出现，任务栏也没有</strong></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><ol><li>打开任务管理器，查看是否有 <code>th123.exe</code> 进程</li><li>若有，则是 <code>DsoundFix</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 插件导致的问题 ，原因未知，极个别的电脑上存在这个问题</li></ol></div><h3 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> <strong>解决方法</strong></h3><div class="hint-container info"><p class="hint-container-title">解决办法</p><p>先关闭所有 <code>th123.exe</code> 进程，打开<code>SWRStoys.ini</code>配置文件，找到 DsoundFix 一行，加分号屏蔽掉，保存后再开游戏</p><p>若没有，则可能是其他mod冲突或有mod 的配置文件有问题，可以先试试恢复默认SWRSToys配置或重新下载老游戏升级包覆盖换新</p></div><hr class="footnotes-sep">',5),f={class:"footnotes"},_={class:"footnotes-list"},p={id:"footnote1",class:"footnote-item"},u=o("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function m(x,S){const e=a("RouterLink");return n(),i("div",null,[h,o("section",f,[o("ol",_,[o("li",p,[o("p",null,[c(e,{to:"/FAQ/Failed-to-Start/DSound.html"},{default:r(()=>[t("关于这个插件")]),_:1}),t(),u])])])])])}const k=s(l,[["render",m],["__file","FailedStart.html.vue"]]);export{k as default};
