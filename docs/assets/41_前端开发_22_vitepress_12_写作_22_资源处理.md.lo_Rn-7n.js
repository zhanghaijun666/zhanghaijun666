import{_ as e,C as n,c as t,o as p,j as i,G as l,a5 as r,a as h}from"./chunks/framework.CBqkjkG0.js";const u=JSON.parse('{"title":"资源处理","description":"","frontmatter":{},"headers":[],"relativePath":"41_前端开发/22_vitepress/12_写作/22_资源处理.md","filePath":"41_前端开发/22_vitepress/12_写作/22_资源处理.md","lastUpdated":1739184584000}'),d={name:"41_前端开发/22_vitepress/12_写作/22_资源处理.md"};function k(o,s,c,g,B,A){const a=n("ArticleMetadata");return p(),t("div",null,[s[0]||(s[0]=i("h1",{id:"asset-handling",tabindex:"-1"},[h("资源处理 "),i("a",{class:"header-anchor",href:"#asset-handling","aria-label":'Permalink to "资源处理 {#asset-handling}"'},"​")],-1)),l(a),s[1]||(s[1]=r(`<h2 id="referencing-static-assets" tabindex="-1">引用静态资源 <a class="header-anchor" href="#referencing-static-assets" aria-label="Permalink to &quot;引用静态资源 {#referencing-static-assets}&quot;">​</a></h2><p>所有的 Markdown 文件都会被编译成 Vue 组件，并由 <a href="https://cn.vitejs.dev/guide/assets.html" target="_blank" rel="noreferrer">Vite</a> 处理。可以<strong>并且应该</strong>使用相对路径来引用资源：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes one-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">An image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">./image.png</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以在 Markdown 文件、主题中的 <code>*.vue</code> 组件、样式和普通的 <code>.css</code> 文件中引用静态资源，可以使用绝对路径 (基于项目根目录) 或者相对路径 (基于文件系统)。后者类似于 Vite、Vue CLI 或者 webpack 的 <code>file-loader</code> 的行为。</p><p>常见的图像，媒体和字体文件会被自动检测并视作资源。</p><div class="tip custom-block"><p class="custom-block-title">通过链接引用的文件不会视作资源</p><p>在 Markdown 内，通过链接引用的 PDF 或者其他文档不会被自动视作资源。要使这些文件可用，你必须手动将其放在项目的 <a href="#the-public-directory"><code>public</code></a> 目录内。</p></div><p>所有引用的资源，包括那些使用绝对路径的，都会在生产构建过程中被复制到输出目录，并使用哈希文件名。从未使用过的资源将不会被复制。小于 4kb 的图像资源将会采用 base64 内联——这可以通过 <a href="https://vitepress.dev/zh/reference/site-config#vite" target="_blank" rel="noreferrer"><code>vite</code></a> 配置选项进行配置。</p><p>所有<strong>静态</strong>路径引用，包括绝对路径，都应基于你的工作目录的结构。</p><h2 id="the-public-directory" tabindex="-1">public 目录 <a class="header-anchor" href="#the-public-directory" aria-label="Permalink to &quot;public 目录 {#the-public-directory}&quot;">​</a></h2><p>有时可能需要一些静态资源，但这些资源没有直接被 Markdown 或主题组件直接引用，或者你可能想以原始文件名提供某些文件，像 <code>robots.txt</code>，favicons 和 PWA 图标这样的文件。</p><p>可以将这些文件放置在<a href="https://vitepress.dev/zh/routing#source-directory" target="_blank" rel="noreferrer">源目录</a>的 <code>public</code> 目录中。例如，如果项目根目录是 <code>./docs</code>，并且使用默认源目录位置，那么 public 目录将是 <code>./docs/public</code>。</p><p>放置在 <code>public</code> 中的资源将按原样复制到输出目录的根目录中。</p><p>请注意，应使用根绝对路径来引用放置在 <code>public</code> 中的文件——例如，<code>public/icon.png</code> 应始终在源代码中使用 <code>/icon.png</code> 引用。</p><h2 id="base-url" tabindex="-1">根 URL <a class="header-anchor" href="#base-url" aria-label="Permalink to &quot;根 URL {#base-url}&quot;">​</a></h2><p>如果站点没有部署在根 URL 上，则需要在 <code>.vitepress/config.js</code> 中设置 <code>base</code> 选项。例如，如果计划将站点部署到 <code>https://foo.github.io/bar/</code>，则 <code>base</code> 应设置为 <code>&#39;/bar/&#39;</code>(它应始终以斜杠开头和结尾)。</p><p>所有静态资源路径都会被自动处理，来适应不同的 <code>base</code> 配置值。例如，如果 markdown 中有一个对 <code>public</code> 中的资源的绝对引用：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes one-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">![</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">An image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#A626A4;--shiki-light-text-decoration:inherit;--shiki-dark:#C678DD;--shiki-dark-text-decoration:underline;">/image-inside-public.png</span><span style="--shiki-light:#A626A4;--shiki-dark:#E06C75;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在这种情况下，更改 <code>base</code> 配置值时，<strong>无需</strong>更新该引用。</p><p>但是如果你正在编写一个主题组件，它动态地链接到资源，例如一个图片，它的 <code>src</code> 基于主题配置：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">theme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">logoPath</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在这种情况下，建议使用 VitePress 提供的 <a href="https://vitepress.dev/zh/reference/runtime-api#withbase" target="_blank" rel="noreferrer"><code>withBase</code> helper</a> 来包括路径：</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes one-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> setup</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">withBase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">useData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">theme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> useData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> :src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;withBase(theme.logoPath)&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,22))])}const y=e(d,[["render",k]]);export{u as __pageData,y as default};
