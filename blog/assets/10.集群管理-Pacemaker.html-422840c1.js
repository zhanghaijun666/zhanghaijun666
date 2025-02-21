import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,f as e}from"./app-efa5e96e.js";const t={},l=e(`<h2 id="pacemaker介绍" tabindex="-1"><a class="header-anchor" href="#pacemaker介绍" aria-hidden="true">#</a> Pacemaker介绍</h2><blockquote><p>Pacemaker 是一个开源的高可用性软件，用于在集群环境中管理和监控服务的可用性。旨在提供一套框架和工具，使用户能够在分布式系统中构建高可用性的服务。</p><p>主要用于构建高可用性的集群服务，确保在节点或服务出现故障时能够保持系统的稳定性和可用性。它被广泛应用于企业环境中的关键业务应用和服务，如数据库、Web 服务器、应用服务器等。</p></blockquote><h3 id="主要特点和功能" tabindex="-1"><a class="header-anchor" href="#主要特点和功能" aria-hidden="true">#</a> 主要特点和功能</h3><ol><li><p>集群管理： Pacemaker 允许将多个节点组成一个集群，这些节点可以共同工作以提供服务的高可用性。集群中的节点通过网络通信协同工作。</p></li><li><p>资源管理： Pacemaker 可以管理和监控集群中的各种资源，如 IP 地址、虚拟 IP 地址、文件系统、数据库等。它能够启动、停止和迁移这些资源，以确保它们在整个集群中保持可用状态。</p></li><li><p>故障检测和自动恢复： Pacemaker 提供了故障检测机制，能够检测节点和资源的故障。一旦发现故障，它可以自动采取措施来恢复服务，例如迁移资源到其他健康的节点。</p></li><li><p>灵活的资源策略： Pacemaker 允许用户定义资源的启动顺序、亲和性规则和放置约束，以确保服务在特定节点上以期望的方式运行。</p></li><li><p>强大的插件架构： Pacemaker 的插件架构允许用户集成不同类型的资源代理，以支持各种服务和应用程序。它支持多种资源代理，如 OCF（Open Cluster Framework）资源代理、Systemd 服务资源代理等。</p></li><li><p>Web 界面和命令行工具： Pacemaker 提供了直观的 Web 界面（Pacemaker GUI）和强大的命令行工具，用于配置、监控和管理集群。</p></li><li><p>可扩展性和兼容性： Pacemaker 是一个可扩展和高度模块化的系统，可以适应不同规模和类型的集群。它与各种存储系统、网络配置和硬件兼容，并支持多种操作系统。</p></li></ol><h2 id="命令介绍" tabindex="-1"><a class="header-anchor" href="#命令介绍" aria-hidden="true">#</a> 命令介绍</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在基于 Red Hat 的系统上</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> pacemaker corosync pcs
<span class="token comment"># 在基于 Debian 的系统上</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> pacemaker corosync pcs

<span class="token comment">## 配置文件：/etc/corosync/corosync.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建集群和节点" tabindex="-1"><a class="header-anchor" href="#创建集群和节点" aria-hidden="true">#</a> 创建集群和节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建集群</span>
<span class="token function">sudo</span> pcs cluster setup <span class="token parameter variable">--name</span> mycluster node1 node2
<span class="token comment"># 启动集群</span>
<span class="token function">sudo</span> pcs cluster start <span class="token parameter variable">--all</span>
<span class="token comment"># 停止集群</span>
<span class="token function">sudo</span> pcs cluster stop <span class="token parameter variable">--all</span>
<span class="token comment"># 重启集群</span>
<span class="token function">sudo</span> pcs cluster restart <span class="token parameter variable">--all</span>
<span class="token comment"># 查看集群状态</span>
<span class="token function">sudo</span> pcs status

<span class="token comment">## 添加节点到集群：将新节点 new_node 添加到现有的 Pacemaker 集群。</span>
<span class="token function">sudo</span> pcs cluster <span class="token function">node</span> <span class="token function">add</span> new_node
<span class="token comment">## 删除节点从集群：从 Pacemaker 集群中删除节点 node_to_remove。</span>
<span class="token function">sudo</span> pcs cluster <span class="token function">node</span> remove node_to_remove
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可管理的资源" tabindex="-1"><a class="header-anchor" href="#可管理的资源" aria-hidden="true">#</a> 可管理的资源</h3><ul><li>IP 地址资源</li></ul><blockquote><p>允许管理虚拟 IP 地址，确保在故障切换时 IP 地址能够在不同节点之间迁移。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pcs resource create myvip ocf:heartbeat:IPaddr2 <span class="token assign-left variable">ip</span><span class="token operator">=</span><span class="token number">192.168</span>.1.100 <span class="token assign-left variable">cidr_netmask</span><span class="token operator">=</span><span class="token number">24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>文件系统资源 (ocf💓Filesystem)</li></ul><blockquote><p>允许管理文件系统，确保在节点切换时挂载和卸载文件系统。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pcs resource create myfs ocf:heartbeat:Filesystem <span class="token assign-left variable">device</span><span class="token operator">=</span><span class="token string">&quot;/dev/sdb1&quot;</span> <span class="token assign-left variable">directory</span><span class="token operator">=</span><span class="token string">&quot;/mnt/data&quot;</span> <span class="token assign-left variable">fstype</span><span class="token operator">=</span><span class="token string">&quot;ext4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>服务资源 (systemd)</li></ul><blockquote><p>允许管理 Systemd 服务，确保在节点切换时启动和停止服务。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pcs resource create myservice systemd:apache2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>数据库资源 (ocf💓pgsql)</li></ul><blockquote><p>允许管理 PostgreSQL 数据库实例，确保在节点切换时启动和停止数据库服务。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pcs resource create mydb ocf:heartbeat:pgsql <span class="token punctuation">\\</span>
  <span class="token function">op</span> monitor <span class="token assign-left variable">interval</span><span class="token operator">=</span>30s <span class="token punctuation">\\</span>
  params <span class="token assign-left variable">pgctl</span><span class="token operator">=</span><span class="token string">&quot;/usr/pgsql-13/bin/pg_ctl&quot;</span> <span class="token punctuation">\\</span>
  params <span class="token assign-left variable">pgdata</span><span class="token operator">=</span><span class="token string">&quot;/var/lib/pgsql/13/data&quot;</span> <span class="token punctuation">\\</span>
  params <span class="token assign-left variable">pgport</span><span class="token operator">=</span><span class="token string">&quot;5432&quot;</span> <span class="token punctuation">\\</span>
  params <span class="token assign-left variable">pgdatabase</span><span class="token operator">=</span><span class="token string">&quot;mydatabase&quot;</span> <span class="token punctuation">\\</span>
  params <span class="token assign-left variable">pgsuperuser</span><span class="token operator">=</span><span class="token string">&quot;postgres&quot;</span> <span class="token punctuation">\\</span>
  params <span class="token assign-left variable">pgdaemon</span><span class="token operator">=</span><span class="token string">&quot;postgres&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>虚拟机资源 (ocf💓VirtualDomain)：</li></ul><blockquote><p>允许管理虚拟机，确保在节点切换时启动和停止虚拟机。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> pcs resource create myvm ocf:heartbeat:VirtualDomain <span class="token assign-left variable">hypervisor</span><span class="token operator">=</span><span class="token string">&quot;qemu&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">config</span><span class="token operator">=</span><span class="token string">&quot;/path/to/vm.xml&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">migration_transport</span><span class="token operator">=</span><span class="token string">&quot;ssh&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令" aria-hidden="true">#</a> 运维命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看资源配置</span>
<span class="token function">sudo</span> pcs resource show
<span class="token comment"># 删除资源</span>
<span class="token function">sudo</span> pcs resource delete myvip
<span class="token comment"># 删除约束</span>
<span class="token function">sudo</span> pcs constraint delete <span class="token operator">&lt;</span>constraint_id<span class="token operator">&gt;</span>

<span class="token comment"># 配置约束：设置资源启动顺序约束</span>
<span class="token function">sudo</span> pcs constraint order start myvip <span class="token keyword">then</span> myservice
<span class="token comment"># 查看约束配置</span>
<span class="token function">sudo</span> pcs constraint show

<span class="token comment">## 设置属性：设置 Pacemaker 属性。在上述示例中，禁用 STONITH（Shoot The Other Node In The Head）。</span>
<span class="token function">sudo</span> pcs property <span class="token builtin class-name">set</span> stonith-enabled<span class="token operator">=</span>false
<span class="token comment">## 查看属性配置：查看当前配置的 Pacemaker 属性列表。</span>
<span class="token function">sudo</span> pcs property show
<span class="token comment">## 启用/禁用节点：使节点进入或退出 Standby 模式。在 Standby 模式下的节点不参与资源管理。</span>
<span class="token function">sudo</span> pcs cluster standby node_to_standby
<span class="token function">sudo</span> pcs cluster unstandby node_to_unstandby
<span class="token comment">## 强制启动资源：强制启动名为 myresource 的资源，即使有其他约束阻止。</span>
<span class="token function">sudo</span> pcs resource <span class="token builtin class-name">enable</span> myresource
<span class="token comment">## 强制停止资源：</span>
<span class="token function">sudo</span> pcs resource disable myresource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),i=[l];function c(o,p){return n(),a("div",null,i)}const u=s(t,[["render",c],["__file","10.集群管理-Pacemaker.html.vue"]]);export{u as default};
