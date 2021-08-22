(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{233:function(t,a,v){"use strict";v.r(a);var _=v(4),e=Object(_.a)({},function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"关于前端框架的面试须知"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于前端框架的面试须知","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于前端框架的面试须知")]),t._v(" "),v("p",[t._v("点击关注本"),v("a",{attrs:{href:"#%E5%85%AC%E4%BC%97%E5%8F%B7"}},[t._v("公众号")]),t._v("获取文档最新更新,并可以领取配套于本指南的 "),v("strong",[t._v("《前端面试手册》")]),t._v(" 以及"),v("strong",[t._v("最标准的简历模板")]),t._v(".")]),t._v(" "),v("p",[t._v("目前,主流的招聘信息中都包含一项,就是至少会一种主流框架,如果只会JQuery可能在招聘市场就比较被动了.")]),t._v(" "),v("p",[t._v('本节没有具体的原理解析或者面试题目,而是一些偏"软"的一些学习技巧,但是个人认为会非常有用,希望你花点时间读一下.')]),t._v(" "),v("h2",{attrs:{id:"准备框架相关知识的误区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#准备框架相关知识的误区","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备框架相关知识的误区")]),t._v(" "),v("p",[t._v("笔者在学习框架和准备面试的过程中走过很多弯路,尤其是一些操作是很多人共通的,希望在这里分享出来,避免你再次掉入坑中.")]),t._v(" "),v("h3",{attrs:{id:"不要为了读源码而读源码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不要为了读源码而读源码","aria-hidden":"true"}},[t._v("#")]),t._v(" 不要为了读源码而读源码")]),t._v(" "),v("p",[t._v("不知道是从哪时起,读源码成为了一直时尚,甚至很多人以读过xx源码自居,仿佛读过xx源码就成为了某种意义上的认证一样.")]),t._v(" "),v("p",[t._v("笔者可以说读过非常多框架或者库的源码,曾经给自己的任务就是每天读一个库的源码,大概坚持了几个月,当然是从一些微型库开始阅读的.")]),t._v(" "),v("p",[t._v("也读过所谓的Vue、React、Redux、dva等著名库或者框架的源码，但是回过头来再审视自己的行为，其实性价比极低.")]),t._v(" "),v("p",[t._v("其实，很多情况下我是为了读源码而读源码,因为在社区里有一种很奇怪的气氛「读了xx源码就是牛x」,读源码成为了一种政治正确,仿佛说自己读了「xx源码」底气都足了一样.")]),t._v(" "),v("p",[t._v("而更多的时候我读源码，其实是为了『偷懒』,可能有人会问,读源码这么废力的行为,怎么还跟偷懒挂钩了?这里的偷懒是一种战术上的偷懒,我寄希望于用短期的战术上的勤奋,来到达长期的战略上的懒惰,我希望通过阅读React源码成为React专家,而不需要大量的长期的实践经验与思考。")]),t._v(" "),v("p",[t._v("很明显，读React源码根本不可能成为React专家，读源码才几斤几两，读了不代表理解了，更不代表理解了设计者背后的思想，更无法代表你能设计出一个React，就不要提改进React或者写React-like了，因为你读的目的就是为了『读』,所以读源码对你而言收益极低.")]),t._v(" "),v("p",[t._v("所以只推荐带着目的性的去阅读源码,比如公司有一个需求是需要一个mini版的React,而真得当你带有目的性的时候,阅读某一个库或者某一个框架的源码是远远不够的.")]),t._v(" "),v("p",[t._v("就比如,我认为Redux需要写太多了的模板代码,而当时市面上最著名的解决方案就是dva,但是dva并不是一个纯粹的数据流解决方案,它还加入了路由、异步等一些了库，算得上是一个框架集合了,我希望它是一个更加纯粹的数据流管理框架。")]),t._v(" "),v("p",[t._v("然后我找到了同样是阿里系的Mirror.js,但是Mirror.js由于是JavaScript编写的,即使加上了d.ts,也非常缺乏相关的类型支持和代码提示.")]),t._v(" "),v("p",[t._v("最后我找到了rematch,rematch既是纯粹的数据流管理框架,又是由TypeScript编写的,但是其类型编程运用的不够好,很多地方依然没有完整的类型提示.")]),t._v(" "),v("p",[t._v("于是我就通过阅读上述框架的源码,看看市面上主流的数据流管理框架的实现,然后取长补短,造了一个符合自己一点恶趣味的,但是完美支持TypeScript的数据流管理框架,丰富完整的类型提示让我的效率非常明显的提升了.")]),t._v(" "),v("p",[t._v("上述带着目的去阅读源码的过程才是正确的阅读源码的方式,你会通过阅读不同框架的源码发现其作者不同的设计理念,而哪些理念是与你相同的,哪些是没考虑到的,同样是设计插件系统,它们的实现为何会有这样或者那样的差异,哪个设计更好,这都是你在读源码过程中会思考到的地方,这样的好处就是你可以理解设计.")]),t._v(" "),v("p",[t._v("而当你只是单纯得为了读源码的时候,会陷入各种各样的细节中,目的就是为了搞懂作者这样写是什么意思,然后强行记忆下来,不久后你就会发现你早把自己读的源码忘记了,一方面是因为很多源码非常细节,你不可能记住这么多细节,另一方面,你根本没有理解这个设计,而只是记忆了源码细节而已.")]),t._v(" "),v("p",[t._v("我虽然读了很多库的源码,但是早已经忘记其具体细节和内容了,当初花费的时间其实算是白白流失了,而真正使我觉得自己读源码有价值且能提升能力的是有一些需求使我不得不去读一些源码,比如去设计一个虚拟滚动表格组件、比如写一个TypeScript友好的数据流框架、比如写一个前端Cli工具等等,我为了完成这些项目不得不阅读了非常多相关的库,不断思考与实践,我不仅沉淀下来了一些基础库,而且真正理解了背后的设计理念,它使得我有了设计上述组件或者库的能力,而这不是仅仅读一个库的源码就能做到的.")]),t._v(" "),v("h3",{attrs:{id:"不建议读源码解读的文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不建议读源码解读的文章","aria-hidden":"true"}},[t._v("#")]),t._v(" 不建议读源码解读的文章")]),t._v(" "),v("p",[t._v("这里可能太过绝对了,有非常小的一部分文章还是值得读的,但是绝大多数所谓「源码解读」文章更像是「源码罗列」文章,还是要区分好什么叫解读,什么叫罗列.")]),t._v(" "),v("p",[t._v('源码罗列的典型就是贴了大段大段的源码,然后配上几个注释或者一段话,讲这个函数是干啥的,然后像流水账一样把一个库的某个模块或者某个库罗列下来,就成为了一个洋洋洒洒的大篇幅的所谓"源码解读".')]),t._v(" "),v("p",[t._v("这种囫囵吞枣式的「解读」方式是非常低效且不负责任的，一个库真正的核心部分其实非常小，典型的就是React本身代码有数万行，但是很多React-like库可以压缩到几千行，而且如果去掉防御式编程部分、特殊情况处理部分、一些非核模块部分等等，做一个微型React可能只需要1000多行代码。")]),t._v(" "),v("p",[t._v("真正的解读应该着重把这1000多行的React代码讲清楚，其设计理念、其设计取舍、其设计手法等等，而不是把数万行的React代码大片罗列加几行注释完事了。")]),t._v(" "),v("p",[t._v("很多时候读「源码解读」文章就跟看源码没太多区别了，耗时且低效。")]),t._v(" "),v("h3",{attrs:{id:"不建议为了面试而读源码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#不建议为了面试而读源码","aria-hidden":"true"}},[t._v("#")]),t._v(" 不建议为了面试而读源码")]),t._v(" "),v("p",[t._v("现在的前端面试中确实流行问一些源码类的问题，比如双向绑定、虚拟DOM、脏检查、Fiber等等。")]),t._v(" "),v("p",[t._v("其实，面试官的目的是考察你对框架的一些基本原理理解，看一看是否有深入了解的意愿，把一些仅仅停留在API层面的框架小子筛出去，前端面试归根到底还是在招一个写业务代码的工程师，而不是招一个去造框架的专家，市面上到处抄点源码弄一个玩具框架的虽然很多，但是真正在生产环境中能运用的非常少，国内前端框架的设计专家掰着指头就能数出来几个。")]),t._v(" "),v("p",[t._v("所以不需要你去花非常大的精力去研究源码，因为当你并不想造一个可以在生产环境中运用的框架，只是为了面试而读的话，性价比太低，不如看几篇对应的面试文章，再进行一定程度的实战后理解其原理，在面试时讲清楚基本的原理即可，绝大多数时候面试官也不会刨根问底得问，因为面试官绝大多数也不知道更深层次的问题，比如如何优化Vue虚拟DOM的diff算法，除了专门的框架设计者和极少数求知欲非常强的开发者，没有人会考虑或者去探究这个问题。")]),t._v(" "),v("h2",{attrs:{id:"公众号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#公众号","aria-hidden":"true"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),v("p",[t._v("想要实时关注笔者最新的文章和最新的文档更新请关注公众号"),v("strong",[t._v("程序员面试官")]),t._v(",后续的文章会优先在公众号更新.")]),t._v(" "),v("p",[v("strong",[t._v("简历模板:")]),t._v(" 关注公众号回复「模板」获取")]),t._v(" "),v("p",[v("strong",[t._v("《前端面试手册》:")]),t._v(" 配套于本指南的突击手册,关注公众号回复「fed」获取")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://xiaomuzhu-image.oss-cn-beijing.aliyuncs.com/d846f65d5025c4b6c4619662a0669503.png",alt:"2019-08-12-03-18-41"}})])])},[],!1,null,null,null);a.default=e.exports}}]);