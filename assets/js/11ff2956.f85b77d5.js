"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8134],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=i,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],s={title:"Scripts",sidebar_position:19},c="Scripts",o={unversionedId:"guides/scripts",id:"guides/scripts",isDocsHomePage:!1,title:"Scripts",description:"scala-cli accepts Scala scripts as files that end in .sc.",source:"@site/docs/guides/scripts.md",sourceDirName:"guides",slug:"/guides/scripts",permalink:"/docs/guides/scripts",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/guides/scripts.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"Scripts",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"SBT and Mill",permalink:"/docs/guides/sbt-mill"},next:{title:"Scala.JS",permalink:"/docs/guides/scala-js"}},p=[{value:"Self executable Scala Script",id:"self-executable-scala-script",children:[],level:3},{value:"Aguments",id:"aguments",children:[],level:3},{value:"Difference with Ammonite scripts",id:"difference-with-ammonite-scripts",children:[],level:3}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"scripts"},"Scripts"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," accepts Scala scripts as files that end in ",(0,l.kt)("inlineCode",{parentName:"p"},".sc"),".\nUnlike ",(0,l.kt)("inlineCode",{parentName:"p"},".scala")," files, in scripts, any kind of statement is accepted at the top-level:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hello.sc",title:"hello.sc"},'val message = "Hello from Scala script"\nprintln(message)\n')),(0,l.kt)("p",null,"A script is run with the ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli hello.sc\n# Hello from Scala script\n")),(0,l.kt)("p",null,"The way this works is that a script is wrapped in an ",(0,l.kt)("inlineCode",{parentName:"p"},"object")," before it's passed to the Scala compiler, and a ",(0,l.kt)("inlineCode",{parentName:"p"},"main")," class is added to it.\nIn the previous example, when the ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.sc")," script is passed to the compiler, the altered code looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},'object hello {\n  val message = "Hello from Scala script"\n  println(message)\n\n  def main(args: Array[String]): Unit = ()\n}\n')),(0,l.kt)("p",null,"The name ",(0,l.kt)("inlineCode",{parentName:"p"},"hello")," comes from the file name, ",(0,l.kt)("inlineCode",{parentName:"p"},"hello.sc"),"."),(0,l.kt)("p",null,"When a script is in a sub-directory, a package name is also inferred:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/constants/messages.sc",title:"my-app/constants/messages.sc"},'def hello = "Hello from Scala scripts"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=my-app/main.sc",title:"my-app/main.sc"},"import constants.messages\nprintln(messages.hello)\n")),(0,l.kt)("p",null,"To specify a main class when running a script, use this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli my-app --main-class main\n# Hello from Scala scripts\n")),(0,l.kt)("p",null,"Both of the previous scripts (",(0,l.kt)("inlineCode",{parentName:"p"},"hello.sc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"main.sc"),") automatically get a main class, so this is required to disambiguate them."),(0,l.kt)("h3",{id:"self-executable-scala-script"},"Self executable Scala Script"),(0,l.kt)("p",null,"You can define a file with the \u201cshebang\u201d header to be self-executable. Please remember to use ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli shebang"),"\ncommand, which makes ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," compatible with Unix shebang interpreter directive.  For example, given this script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloScript.sc",title:"HelloScript.sc"},'#!/usr/bin/env -S scala-cli shebang\nprintln("Hello world")\n')),(0,l.kt)("p",null,"You can make it executable and run it, just like any other shell script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x HelloScript.sc\n./HelloScript.sc\n# Hello world\n")),(0,l.kt)("p",null,"It is also possible to set ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," command-line options in the shebang line, for example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Shebang213.sc",title:"Shebang213.sc"},"#!/usr/bin/env -S scala-cli shebang --scala-version 2.13\n")),(0,l.kt)("h3",{id:"aguments"},"Aguments"),(0,l.kt)("p",null,"You may also pass arguments to your script, and they are referenced with the special ",(0,l.kt)("inlineCode",{parentName:"p"},"args")," variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=p.sc",title:"p.sc"},"#!/usr/bin/env -S scala-cli shebang\n\nprintln(args(1))\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x p.sc\n./p.sc hello world\n# world\n")),(0,l.kt)("h3",{id:"difference-with-ammonite-scripts"},"Difference with Ammonite scripts"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://ammonite.io"},"Ammonite")," is a popular REPL for Scala that can also compile and run ",(0,l.kt)("inlineCode",{parentName:"p"},".sc")," files."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," and Ammonite are similar, but differ significantly when your code is split in multiple scripts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In Ammonite, a script needs to use ",(0,l.kt)("inlineCode",{parentName:"li"},"import $file")," directives to use values defined in another script"),(0,l.kt)("li",{parentName:"ul"},"With ",(0,l.kt)("inlineCode",{parentName:"li"},"scala-cli"),", all scripts passed can reference each other without such directives")),(0,l.kt)("p",null,"On the other hand:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'You can pass a single "entry point" script as input to Ammonite, and Ammonite finds the scripts it depends on via the ',(0,l.kt)("inlineCode",{parentName:"li"},"import $file")," directives"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"scala-cli")," requires all scripts to be passed beforehand, either one-by-one, or by putting them in a directory, and passing the directory to ",(0,l.kt)("inlineCode",{parentName:"li"},"scala-cli"))))}u.isMDXComponent=!0}}]);