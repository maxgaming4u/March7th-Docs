const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/\":{\"title\":\"Home\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Redirecting to the correct locale...\"]}]}},\"/en/\":{\"/en/guide/\":{\"title\":\"Guide\",\"contents\":[{\"header\":\"Highlight Features\",\"slug\":\"highlight-features\",\"contents\":[]},{\"header\":\"Bar\",\"slug\":\"bar\",\"contents\":[\"baz\",\"...\"]},{\"header\":\"Foo\",\"slug\":\"foo\",\"contents\":[\"ray\",\"...\"]}]},\"/en/install/\":{\"title\":\"Install steps\",\"contents\":[{\"header\":\"Steps\",\"slug\":\"steps\",\"contents\":[\"Environment configuration\"]}]},\"/en/install/environment.html\":{\"title\":\"Environment configuration\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"This page describes how to configure the system environment required to install March7th.\"]},{\"header\":\"Page Information\",\"slug\":\"page-information\",\"contents\":[\"Empty\"]}]},\"/en/resource/\":{\"title\":\"Resource\",\"contents\":[{\"header\":\"Content\",\"slug\":\"content\",\"contents\":[\"Repo: Mar-7th/StarRailRes\",\"File Structure\",\"Character Index\",\"Light Cone Index\",\"Relic Index\",\"MihomoAPI Parse\"]}]},\"/en/resource/characters.html\":{\"title\":\"Character Index\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"This page describes the structure of character index files.\"]},{\"header\":\"Info\",\"slug\":\"info\",\"contents\":[\"Empty.\"]}]},\"/en/resource/light_cones.html\":{\"title\":\"Light Cone Index\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"This page describes the structure of light cone index files.\"]},{\"header\":\"Info\",\"slug\":\"info\",\"contents\":[\"Empty.\"]}]},\"/en/resource/mihomo_api.html\":{\"title\":\"MihomoAPI Parse\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"This page describes the reference implementation of the Mihomo API for parsing by index.\"]},{\"header\":\"Info\",\"slug\":\"info\",\"contents\":[\"Empty.\"]}]},\"/en/resource/relics.html\":{\"title\":\"Relic Index\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"This page describes the structure of relic index files.\"]},{\"header\":\"Info\",\"slug\":\"info\",\"contents\":[\"Empty.\"]}]},\"/en/resource/structure.html\":{\"title\":\"File Structure\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"File structure of repo Mar-7th/StarRailRes.\"]},{\"header\":\"Project\",\"slug\":\"project\",\"contents\":[\"The project file structure is as follows:\",\"There are index folders for various languages in index_new or index_min, the list of supported languages is as follows:\",\"The language folder name is the lowercase letter of the corresponding language abbreviation, such as the en folder is the English index.\"]},{\"header\":\"Index\",\"slug\":\"index\",\"contents\":[\"Among the specific language index files, the following files exist:\",\"For the specific structure of each index file, please check the corresponding page.\"]}]},\"/en/guide/bar/\":{\"title\":\"Bar feature\",\"contents\":[{\"header\":\"Introduction\",\"slug\":\"introduction\",\"contents\":[\"We support bar feature, ...\"]},{\"header\":\"Details\",\"slug\":\"details\",\"contents\":[\"baz\",\"...\"]}]},\"/en/guide/bar/baz.html\":{\"title\":\"Baz\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Feature details here.\"]}]},\"/en/guide/foo/\":{\"title\":\"Foo feature\",\"contents\":[{\"header\":\"Introduction\",\"slug\":\"introduction\",\"contents\":[\"We support foo feature, ...\"]},{\"header\":\"Details\",\"slug\":\"details\",\"contents\":[\"ray\",\"...\"]}]},\"/en/guide/foo/ray.html\":{\"title\":\"Ray\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Feature details here.\"]}]}},\"/zh/\":{\"/zh/guide/\":{\"title\":\"指南\",\"contents\":[{\"header\":\"功能亮点\",\"slug\":\"功能亮点\",\"contents\":[]},{\"header\":\"Bar\",\"slug\":\"bar\",\"contents\":[\"baz\",\"...\"]},{\"header\":\"Foo\",\"slug\":\"foo\",\"contents\":[\"ray\",\"...\"]}]},\"/zh/install/\":{\"title\":\"安装流程\",\"contents\":[{\"header\":\"步骤\",\"slug\":\"步骤\",\"contents\":[\"环境配置\"]}]},\"/zh/install/environment.html\":{\"title\":\"环境配置\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本页面介绍如何配置安装 March7th 所需的系统环境。\"]},{\"header\":\"页面信息\",\"slug\":\"页面信息\",\"contents\":[\"空\"]}]},\"/zh/resource/\":{\"title\":\"资源\",\"contents\":[{\"header\":\"目录\",\"slug\":\"目录\",\"contents\":[\"资源仓库： Mar-7th/StarRailRes\",\"目录结构\",\"角色索引\",\"光锥索引\",\"遗器索引\",\"MihomoAPI 解析\"]}]},\"/zh/resource/characters.html\":{\"title\":\"角色索引\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本页面介绍角色相关索引文件的结构。\"]},{\"header\":\"角色索引文件\",\"slug\":\"角色索引文件\",\"contents\":[\"在对应语言文件夹（index_new/[lang]）下有以下几个和角色相关的索引文件：\"]},{\"header\":\"角色基本信息\",\"slug\":\"角色基本信息\",\"contents\":[\"以下是 characters.json 每一项各个字段的含义：\"]}]},\"/zh/resource/light_cones.html\":{\"title\":\"光锥索引\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本页面介绍光锥相关索引文件的结构。\"]},{\"header\":\"页面信息\",\"slug\":\"页面信息\",\"contents\":[\"空\"]}]},\"/zh/resource/mihomo_api.html\":{\"title\":\"MihomoAPI解析\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本页面介绍通过索引解析 MihomoAPI 的参考实现。\"]},{\"header\":\"MihomoAPI 字段说明\",\"slug\":\"mihomoapi-字段说明\",\"contents\":[\"MihomoAPI 返回值结构如下：\"]},{\"header\":\"MihomoAPI 字段解析\",\"slug\":\"mihomoapi-字段解析\",\"contents\":[\"以下是使用 StarRailRes 索引解析 MihomoAPI 的参考代码：\",\"返回格式如下：\"]}]},\"/zh/resource/relics.html\":{\"title\":\"遗器索引\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本页面介绍遗器相关索引文件的结构。\"]},{\"header\":\"页面信息\",\"slug\":\"页面信息\",\"contents\":[\"空\"]}]},\"/zh/resource/structure.html\":{\"title\":\"目录结构\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"本页面介绍资源仓库 Mar-7th/StarRailRes 的目录结构。\"]},{\"header\":\"项目结构\",\"slug\":\"项目结构\",\"contents\":[\"项目文件结构如下：\",\"在 index_new 或 index_min 中有各种语言的索引文件夹，支持的语言列表如下：\",\"语言文件夹名为对应语言缩写的小写字母形式，如 cn 文件夹为简体中文索引。\"]},{\"header\":\"索引结构\",\"slug\":\"索引结构\",\"contents\":[\"在具体的语言索引文件中，存在以下文件：\",\"各索引文件的具体结构请在对应页面查看。\"]}]},\"/zh/guide/bar/\":{\"title\":\"Bar 功能\",\"contents\":[{\"header\":\"介绍\",\"slug\":\"介绍\",\"contents\":[\"我们支持 bar 功能，...\"]},{\"header\":\"详情\",\"slug\":\"详情\",\"contents\":[\"baz\",\"...\"]}]},\"/zh/guide/bar/baz.html\":{\"title\":\"Baz\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"功能详情...\"]}]},\"/zh/guide/foo/\":{\"title\":\"Foo 功能\",\"contents\":[{\"header\":\"介绍\",\"slug\":\"介绍\",\"contents\":[\"我们支持 foo 功能，...\"]},{\"header\":\"详情\",\"slug\":\"详情\",\"contents\":[\"ray\",\"...\"]}]},\"/zh/guide/foo/ray.html\":{\"title\":\"Ray\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"功能详情...\"]}]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
