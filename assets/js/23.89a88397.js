(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{444:function(_,t,e){"use strict";e.r(t);var v=e(0),o=Object(v.a)({},(function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("div",{staticClass:"content"},[_._m(0),_._v(" "),_._m(1),_._v(" "),_._m(2),_._v(" "),_._m(3),_._v(" "),_._m(4),_._v(" "),_._m(5),_._v(" "),_._m(6),_._v(" "),_._m(7),_._v(" "),_._m(8),_._v(" "),_._m(9),_._v(" "),_._m(10),_._v(" "),_._m(11),_._v(" "),_._m(12),_._v(" "),_._m(13),_._v(" "),_._m(14),_._v(" "),_._m(15),_._v(" "),_._m(16),_._v(" "),_._m(17),_._v(" "),_._m(18),_._v(" "),_._m(19),_._v(" "),_._m(20),_._v(" "),_._m(21),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",target:"_blank",rel:"noopener noreferrer"}},[_._v("继承与原型链"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/2",target:"_blank",rel:"noopener noreferrer"}},[_._v("JavaScript 深入之从原型到原型链"),e("OutboundLink")],1)])])])}),[function(){var _=this.$createElement,t=this._self._c||_;return t("h1",{attrs:{id:"图解原型和原型链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图解原型和原型链"}},[this._v("#")]),this._v(" 图解原型和原型链")])},function(){var _=this.$createElement,t=this._self._c||_;return t("h2",{attrs:{id:"原型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型"}},[this._v("#")]),this._v(" 原型")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("每一个 js 对象都有一个"),t("strong",[this._v("proto")]),this._v("属性,这个属性指向了"),t("code",[this._v("原型")]),this._v(",这个属性在现在来说已经不建议直接使用了,这是浏览器在早期为了让我们访问到内部属性"),t("code",[this._v("[[prototype]]")]),this._v("来实现的一个东西.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("讲到这里好像还是没明白什么是原型,接下来我们根据图来看看"),t("strong",[this._v("proto")]),this._v("都有些啥:")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("img",{attrs:{src:"/hanklog/images/obj.__proto__.png",alt:"原型图解"}})])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("p",[_._v("看了上图你应该明白了吧,"),e("code",[_._v("原型")]),_._v("也是一个"),e("code",[_._v("对象")]),_._v(",并且这个对象中包含了很多函数,所有我们可以得出一个结论:对于"),e("code",[_._v("obj")]),_._v("来说,可以通过"),e("code",[_._v("__proto__")]),_._v("找到了一个"),e("code",[_._v("原型对象")]),_._v(",且"),e("code",[_._v("原型对象")]),_._v("中定义了很多函数让我们来使用."),e("br"),_._v("\n另外,从图片上我还发现了一个"),e("code",[_._v("constructor")]),_._v("属性,也就是"),e("code",[_._v("构造函数")]),_._v(".")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("结论:"),t("code",[this._v("obj.__proto__.constructor === Object")]),this._v(".")])},function(){var _=this.$createElement,t=this._self._c||_;return t("blockquote",[t("p",[this._v("原型的 constructor 属性指向了构造函数")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("img",{attrs:{src:"/hanklog/images/obj.__proto__.constructor.png",alt:"obj.proto.contructor"}})])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("接下来,我们展开"),t("code",[this._v("obj.__proto__.constructor")]),this._v("属性,发现其中还有一个"),t("code",[this._v("prototype")]),this._v("属性,并且这个属性对应的值和先前在"),t("code",[this._v("obj.__proto__")]),this._v("中看到的一样.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("得出结论:")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("对象的"),e("code",[_._v("__proto__")]),_._v("属性指向了"),e("code",[_._v("原型")]),_._v(";")]),_._v(" "),e("li",[e("code",[_._v("原型")]),_._v("的"),e("code",[_._v("constructor")]),_._v("属性又指向了"),e("code",[_._v("构造函数")]),_._v(";")]),_._v(" "),e("li",[e("code",[_._v("构造函数")]),_._v("又通过它的"),e("code",[_._v("prototype")]),_._v("属性指回了"),e("code",[_._v("原型")]),_._v(";")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("并不是所有函数都具有"),t("code",[this._v("constructor")]),this._v("属性,如:"),t("code",[this._v("Function.prototype.bind()")])])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("img",{attrs:{src:"/hanklog/images/Function.prototype.bind.png",alt:"Function.prototype.bind"}}),t("br"),this._v("\n其实,原型就这么简单.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("h2",{attrs:{id:"原型链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原型链"}},[this._v("#")]),this._v(" 原型链")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[this._v("接下来我们根据下面这张图来看看"),t("code",[this._v("原型")]),this._v("和"),t("code",[this._v("原型链")]),this._v("等关系,彻底搞明白它."),t("br"),this._v(" "),t("embed",{attrs:{src:"/hanklog/images/图解原型链.svg",width:"700",height:"auto",type:"image/svg+xml",pluginspage:"http://www.adobe.com/svg/viewer/install/"}})])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("p",[_._v("看完这张图,接下来我们就来解释下什么是"),e("code",[_._v("原型链")]),_._v("吧."),e("br"),_._v("\n其实,"),e("code",[_._v("原型链")]),_._v("就是多个对象通过"),e("code",[_._v("__proto__")]),_._v("属性的方式链接了起来."),e("br"),_._v("\n为什么"),e("code",[_._v("obj")]),_._v("对象可以访问到"),e("code",[_._v("valueOf")]),_._v("函数,因为"),e("code",[_._v("obj")]),_._v("通过原型链找到了"),e("code",[_._v("valueOf")]),_._v("函数.")])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("看图梳理下:")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[e("p",[e("code",[_._v("__proto__")]),_._v(" ：是"),e("code",[_._v("对象")]),_._v("就会有这个属性(强调是对象);"),e("code",[_._v("函数")]),_._v("也是对象,那么函数也有这个属性咯,它指向"),e("code",[_._v("构造函数")]),_._v("的原型对象；")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("prototype")]),_._v(" ：是"),e("code",[_._v("函数")]),_._v("都会有这个属性(强调是函数)，"),e("code",[_._v("普通对象")]),_._v("是没有这个属性的（JS 里面，一切皆为对象，所以这里的"),e("code",[_._v("普通对象")]),_._v("不包括"),e("code",[_._v("函数对象")]),_._v("）.它是构造函数的原型对象；")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("constructor")]),_._v(" ：这是"),e("code",[_._v("原型对象")]),_._v("上的一个指向"),e("code",[_._v("构造函数")]),_._v("的属性。")])])])},function(){var _=this.$createElement,t=this._self._c||_;return t("p",[t("strong",[this._v("总结:")])])},function(){var _=this,t=_.$createElement,e=_._self._c||t;return e("ul",[e("li",[_._v("每一个对象都有"),e("code",[_._v("__proto__")]),_._v("属性,"),e("code",[_._v("__proto__")]),_._v("==>"),e("code",[_._v("Object.prototype")]),_._v("(Object 构造函数的原型对象);")]),_._v(" "),e("li",[_._v("每个函数都"),e("code",[_._v("__proto__")]),_._v("和"),e("code",[_._v("prototype")]),_._v("属性;")]),_._v(" "),e("li",[_._v("每个"),e("code",[_._v("原型对象")]),_._v("都有"),e("code",[_._v("constructor")]),_._v(" 和 "),e("code",[_._v("__proto__")]),_._v("属性,其中"),e("code",[_._v("constructor")]),_._v("指回'构造函数',"),e("br"),_._v("\n而"),e("code",[_._v("__proto__")]),_._v("指向"),e("code",[_._v("Object.prototype")]),_._v(";")]),_._v(" "),e("li",[e("code",[_._v("object")]),_._v("是有对象的祖先,所有对象都可以通过"),e("code",[_._v("__proto__")]),_._v("属性找到它;")]),_._v(" "),e("li",[e("code",[_._v("Function")]),_._v("是所有函数的祖先,所有函数都可以通过"),e("code",[_._v("__proto__")]),_._v("属性找到它;")]),_._v(" "),e("li",[_._v("每个函数都有一个"),e("code",[_._v("prototype")]),_._v(",由于"),e("code",[_._v("prototype")]),_._v("是一个对象,指向了构造函数的原型对象")]),_._v(" "),e("li",[_._v("对象的"),e("code",[_._v("__proto__")]),_._v("属性指向"),e("code",[_._v("原型")]),_._v(","),e("code",[_._v("__proto__")]),_._v("将对象和原型链接起来组成了原型链.")])])},function(){var _=this.$createElement,t=this._self._c||_;return t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[this._v("#")]),this._v(" 参考文献")])}],!1,null,null,null);t.default=o.exports}}]);