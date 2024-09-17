import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,c as l,e as n,a,d as h,w as r,o as p,b as g}from"./app-D9jCRQkU.js";const d={};function c(o,i){const s=t("RouteLink");return p(),l("div",null,[i[1]||(i[1]=n('<h2 id="购买服务器" tabindex="-1"><a class="header-anchor" href="#购买服务器"><span>购买服务器</span></a></h2><ul><li><p>第一步</p><ul><li>推荐服务器<a href="https://cloud.tencent.com" target="_blank" rel="noopener noreferrer">腾讯云</a><a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">阿里云</a><a href="https://activity.huaweicloud.com" target="_blank" rel="noopener noreferrer">华为云</a>等...</li></ul></li></ul><h2 id="系统选择" tabindex="-1"><a class="header-anchor" href="#系统选择"><span>系统选择</span></a></h2><ul><li><p>第二步</p><ul><li>推荐选择Ubuntu22,Debian‌12,当然你也可以选择其他liunx发行版系统</li></ul></li></ul><h2 id="开始安装" tabindex="-1"><a class="header-anchor" href="#开始安装"><span>开始安装</span></a></h2><h3 id="接下来开始安装" tabindex="-1"><a class="header-anchor" href="#接下来开始安装"><span>接下来开始安装</span></a></h3><p>1 换源</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://linuxmirrors.cn/main.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2 选择源</p><ul><li><p>选择清华源(7) <img src="https://img.vinua.cn/images/IWuJw.jpg" alt="1" loading="lazy"></p></li><li><p>接下来按Y <img src="https://img.vinua.cn/images/IWJM2.jpg" alt="2" loading="lazy"></p></li><li><p>按N更新软件包 <img src="https://img.vinua.cn/images/IWZpA.jpg" alt="1" loading="lazy"></p></li><li><p>回车继续 <img src="https://img.vinua.cn/images/IWg0R.jpg" alt="1" loading="lazy"></p></li><li><p>按Y清理缓存 <img src="https://img.vinua.cn/images/IWhBW.jpg" alt="1" loading="lazy"></p></li><li><p>到这里你已经完成第一步了 <img src="https://img.vinua.cn/images/IWsLQ.jpg" alt="1" loading="lazy"></p></li></ul><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装Docker</span></a></h2><p>1 脚本安装docker</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://linuxmirrors.cn/docker.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>按Y安装最新的Docker Engine <img src="https://img.vinua.cn/images/IWnB7.jpg" alt="1" loading="lazy"></p></li><li><p>国内服务器选择清华源(7),国外服务器选择官方源(13) <img src="https://img.vinua.cn/images/IWCLD.jpg" alt="1" loading="lazy"></p></li><li><p>国内服务器选择阿里云成都(13),国外服务器选择官方(28) <img src="https://img.vinua.cn/images/IWYxU.jpg" alt="1" loading="lazy"></p></li><li><p>回车继续 <img src="https://img.vinua.cn/images/IWdGL.jpg" alt="1" loading="lazy"></p></li><li><p>还是回车 <img src="https://img.vinua.cn/images/IWk4l.jpg" alt="1" loading="lazy"></p></li><li><p>看到这个就证明你安装成功了，可以进行下一步了 <img src="https://img.vinua.cn/images/IW8zi.jpg" alt="1" loading="lazy"></p></li></ul><h2 id="安装trss容器" tabindex="-1"><a class="header-anchor" href="#安装trss容器"><span>安装TRSS容器</span></a></h2><h3 id="使用脚本安装trss容器" tabindex="-1"><a class="header-anchor" href="#使用脚本安装trss容器"><span>使用脚本安装TRSS容器</span></a></h3><p>1 国外服务器使用脚本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2 国内服务器使用脚本</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DKURL</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">docker.fxxk.dedyn.io</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -L</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> gitee.com/TimeRainStarSky/TRSS_AllBot/raw/main/Install-Docker.sh)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>看到这个恭喜你安装成功 <img src="https://img.vinua.cn/images/IWoZ1.jpg" alt="1" loading="lazy"></li></ul><p>遇到问题？</p>',22)),a("ul",null,[a("li",null,[h(s,{to:"/yunzai/wt/"},{default:r(()=>i[0]||(i[0]=[g("点击解惑")])),_:1})])])])}const u=e(d,[["render",c],["__file","index.html.vue"]]),b=JSON.parse('{"path":"/yunzai/liunx/","title":"liunx","lang":"zh-CN","frontmatter":{"title":"liunx","icon":"lightbulb","description":"购买服务器 第一步 推荐服务器腾讯云阿里云华为云等... 系统选择 第二步 推荐选择Ubuntu22,Debian‌12,当然你也可以选择其他liunx发行版系统 开始安装 接下来开始安装 1 换源 2 选择源 选择清华源(7) 1 接下来按Y 2 按N更新软件包 1 回车继续 1 按Y清理缓存 1 到这里你已经完成第一步了 1 安装Docker 1 ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/yunzai/liunx/"}],["meta",{"property":"og:site_name","content":"这是神马"}],["meta",{"property":"og:title","content":"liunx"}],["meta",{"property":"og:description","content":"购买服务器 第一步 推荐服务器腾讯云阿里云华为云等... 系统选择 第二步 推荐选择Ubuntu22,Debian‌12,当然你也可以选择其他liunx发行版系统 开始安装 接下来开始安装 1 换源 2 选择源 选择清华源(7) 1 接下来按Y 2 按N更新软件包 1 回车继续 1 按Y清理缓存 1 到这里你已经完成第一步了 1 安装Docker 1 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.vinua.cn/images/IWuJw.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"岩王帝君 版权所有 保留一切解释权利"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liunx\\",\\"image\\":[\\"https://img.vinua.cn/images/IWuJw.jpg\\",\\"https://img.vinua.cn/images/IWJM2.jpg\\",\\"https://img.vinua.cn/images/IWZpA.jpg\\",\\"https://img.vinua.cn/images/IWg0R.jpg\\",\\"https://img.vinua.cn/images/IWhBW.jpg\\",\\"https://img.vinua.cn/images/IWsLQ.jpg\\",\\"https://img.vinua.cn/images/IWnB7.jpg\\",\\"https://img.vinua.cn/images/IWCLD.jpg\\",\\"https://img.vinua.cn/images/IWYxU.jpg\\",\\"https://img.vinua.cn/images/IWdGL.jpg\\",\\"https://img.vinua.cn/images/IWk4l.jpg\\",\\"https://img.vinua.cn/images/IW8zi.jpg\\",\\"https://img.vinua.cn/images/IWoZ1.jpg\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"岩王帝君 版权所有 保留一切解释权利\\",\\"url\\":\\"https://img.vinua.cn/images/u4eY.jpeg\\"}]}"]]},"headers":[{"level":2,"title":"购买服务器","slug":"购买服务器","link":"#购买服务器","children":[]},{"level":2,"title":"系统选择","slug":"系统选择","link":"#系统选择","children":[]},{"level":2,"title":"开始安装","slug":"开始安装","link":"#开始安装","children":[{"level":3,"title":"接下来开始安装","slug":"接下来开始安装","link":"#接下来开始安装","children":[]}]},{"level":2,"title":"安装Docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装TRSS容器","slug":"安装trss容器","link":"#安装trss容器","children":[{"level":3,"title":"使用脚本安装TRSS容器","slug":"使用脚本安装trss容器","link":"#使用脚本安装trss容器","children":[]}]}],"git":{},"readingTime":{"minutes":1.11,"words":333},"filePathRelative":"yunzai/liunx/README.md","autoDesc":true}');export{u as comp,b as data};