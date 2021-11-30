"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[980],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),o=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(i.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=o(t),d=l,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(g,s(s({ref:a},p),{},{components:t})):n.createElement(g,s({ref:a},p))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=m;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,s[1]=c;for(var o=2;o<r;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2612:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return o},toc:function(){return p},default:function(){return m}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),s=["components"],c={title:"Run",sidebar_position:6},i=void 0,o={unversionedId:"commands/run",id:"commands/run",isDocsHomePage:!1,title:"Run",description:"The run command runs your Scala code:",source:"@site/docs/commands/run.md",sourceDirName:"commands",slug:"/commands/run",permalink:"/docs/commands/run",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/commands/run.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Run",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/docs/commands/compile"},next:{title:"Test",permalink:"/docs/commands/test"}},p=[{value:"Passing arguments",id:"passing-arguments",children:[],level:2},{value:"Main class",id:"main-class",children:[],level:2},{value:"Custom JVM",id:"custom-jvm",children:[],level:2},{value:"Scala.JS",id:"scalajs",children:[],level:2},{value:"Scala Native",id:"scala-native",children:[],level:2},{value:"Scala Scripts",id:"scala-scripts",children:[],level:2},{value:"Scala CLI from docker",id:"scala-cli-from-docker",children:[],level:2}],u={toc:p};function m(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command runs your Scala code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run Hello.scala\n# Hello\n")),(0,r.kt)("p",null,"This is the default command, so you don\u2019t have to specify it explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n# Hello\n")),(0,r.kt)("h2",{id:"passing-arguments"},"Passing arguments"),(0,r.kt)("p",null,"You can pass arguments to the application or script you're launching after ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app.sc",title:"app.sc"},'println(args.mkString("App called with arguments: ", ", ", ""))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli app.sc -- first-arg second-arg\n# App called with arguments: first-arg, second-arg\n")),(0,r.kt)("h2",{id:"main-class"},"Main class"),(0,r.kt)("p",null,"If your application has multiple main classes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--main-class")," option lets you explicitly specify the main class you want to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hi.sc",title:"hi.sc"},'println("Hi")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala hi.sc --main-class hi_sc\n")),(0,r.kt)("h2",{id:"custom-jvm"},"Custom JVM"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--jvm")," lets you run your application with a custom JVM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --jvm adopt:14\n")),(0,r.kt)("p",null,"JVMs are ",(0,r.kt)("a",{parentName:"p",href:"https://get-coursier.io/docs/cli-java#managed-jvms"},"managed by coursier"),", and are based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shyiko/jabba/blob/master/index.json"},"index")," of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shyiko/jabba"},"jabba")," command-line tool."),(0,r.kt)("h2",{id:"scalajs"},"Scala.JS"),(0,r.kt)("p",null,"Scala.JS applications can also be compiled and run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--js")," option.\nNote that this requires ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," to be ",(0,r.kt)("a",{parentName:"p",href:"/install#scala-js"},"installed")," on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --js\n")),(0,r.kt)("p",null,"See our dedicated ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scala-js"},"Scala.js guide")," for more information."),(0,r.kt)("h2",{id:"scala-native"},"Scala Native"),(0,r.kt)("p",null,"Scala Native applications can be compiled and run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--native")," option.\nNote that the ",(0,r.kt)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"Scala Native requirements")," need to be ",(0,r.kt)("a",{parentName:"p",href:"/install#scala-native"},"installed")," for this to work, and that Scala Native only supports Linux and macOS at this time and can only use Scala 2.13 and 2.12 for now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --native -S 2.13.6\n")),(0,r.kt)("p",null,"We have a dedicated ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scala-native"},"Scala Native guide")," as well."),(0,r.kt)("h2",{id:"scala-scripts"},"Scala Scripts"),(0,r.kt)("p",null,"Scala CLI can also compile and run Scala scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloScript.sc",title:"HelloScript.sc"},'#!/usr/bin/env -S scala-cli shebang\n\nprintln("Hello world from scala script")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run HelloScript.sc\n# Hello world from scala script\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scripts"},"scripts guide")," provides many more details."),(0,r.kt)("h2",{id:"scala-cli-from-docker"},"Scala CLI from docker"),(0,r.kt)("p",null,"Scala applications can also be compiled and run using a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"docker")," image with ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli"),", without needing to install Scala CLI manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run virtuslab/scala-cli:latest about\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloWorld.scala",title:"HelloWorld.scala"},'object HelloWorld extends App {\n  println("Hello world")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"docker run  -v $(pwd)/HelloWorld.scala:/HelloWorld.scala virtuslab/scala-cli /HelloWorld.scala\n# Hello world\n")))}m.isMDXComponent=!0}}]);