import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as c,c as a,a as o,b as i,w as l,d as t,e as d}from"./app-3psxIhhj.js";const r={},f=d('<div class="hint-container info"><p class="hint-container-title">打开游戏没反应，没窗口出现，任务栏也没有</p><ol><li>打开任务管理器，查看是否有 <code>th123.exe</code> 进程</li><li>若有，则是 <code>DsoundFix</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 插件导致的问题 ，原因未知，极个别的电脑上存在这个问题</li></ol></div><div class="hint-container info"><p class="hint-container-title">解决办法</p><p>先关闭所有 <code>th123.exe</code> 进程，打开<code>SWRStoys.ini</code>配置文件，找到 DsoundFix 一行，加分号屏蔽掉，保存后再开游戏</p><p>若没有，则可能是其他mod冲突或有mod 的配置文件有问题，可以先试试恢复默认SWRSToys配置或重新下载老游戏升级包覆盖换新</p></div><hr class="footnotes-sep">',3),_={class:"footnotes"},h={class:"footnotes-list"},p={id:"footnote1",class:"footnote-item"},m=o("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function u(x,S){const e=n("RouterLink");return c(),a("div",null,[f,o("section",_,[o("ol",h,[o("li",p,[o("p",null,[i(e,{to:"/FAQ/Failed-to-Start/DSound.html"},{default:l(()=>[t("关于这个插件")]),_:1}),t(),m])])])])])}const k=s(r,[["render",u],["__file","FailedStart.html.vue"]]);export{k as default};
