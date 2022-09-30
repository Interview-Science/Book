"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9009],{3905:(t,l,e)=>{e.d(l,{Zo:()=>o,kt:()=>s});var a=e(7294);function n(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function r(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?r(Object(e),!0).forEach((function(l){n(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function u(t,l){if(null==t)return{};var e,a,n=function(t,l){if(null==t)return{};var e,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],l.indexOf(e)>=0||(n[e]=t[e]);return n}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var p=a.createContext({}),k=function(t){var l=a.useContext(p),e=l;return t&&(e="function"==typeof t?t(l):i(i({},l),t)),e},o=function(t){var l=k(t.components);return a.createElement(p.Provider,{value:l},t.children)},m={inlineCode:"code",wrapper:function(t){var l=t.children;return a.createElement(a.Fragment,{},l)}},d=a.forwardRef((function(t,l){var e=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),d=k(e),s=n,c=d["".concat(p,".").concat(s)]||d[s]||m[s]||r;return e?a.createElement(c,i(i({ref:l},o),{},{components:e})):a.createElement(c,i({ref:l},o))}));function s(t,l){var e=arguments,n=l&&l.mdxType;if("string"==typeof t||n){var r=e.length,i=new Array(r);i[0]=d;var u={};for(var p in l)hasOwnProperty.call(l,p)&&(u[p]=l[p]);u.originalType=t,u.mdxType="string"==typeof t?t:n,i[1]=u;for(var k=2;k<r;k++)i[k]=e[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},5266:(t,l,e)=>{e.r(l),e.d(l,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>k});var a=e(3117),n=(e(7294),e(3905));const r={sidebar_position:70},i="\u5176\u4ed6\u5185\u5bb9",u={unversionedId:"\u7b97\u6cd5\u6307\u5357/\u5176\u4ed6\u5185\u5bb9",id:"\u7b97\u6cd5\u6307\u5357/\u5176\u4ed6\u5185\u5bb9",title:"\u5176\u4ed6\u5185\u5bb9",description:"\u9700\u8981\u4e86\u89e3\u5e76\u5b9e\u73b0\u7684\u7279\u6b8a\u89e3\u6cd5\uff1a",source:"@site/docs/\u7b97\u6cd5\u6307\u5357/\u5176\u4ed6\u5185\u5bb9.md",sourceDirName:"\u7b97\u6cd5\u6307\u5357",slug:"/\u7b97\u6cd5\u6307\u5357/\u5176\u4ed6\u5185\u5bb9",permalink:"/\u7b97\u6cd5\u6307\u5357/\u5176\u4ed6\u5185\u5bb9",draft:!1,editUrl:"https://github.com/Interview-Science/Book/edit/main/docs/\u7b97\u6cd5\u6307\u5357/\u5176\u4ed6\u5185\u5bb9.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"BFS",permalink:"/\u7b97\u6cd5\u6307\u5357/\u7b97\u6cd5\u6742\u8c08/BFS"},next:{title:"\u63a8\u8350\u9605\u8bfb",permalink:"/\u7b97\u6cd5\u6307\u5357/\u63a8\u8350\u9605\u8bfb"}},p={},k=[{value:"\u9700\u8981\u4e86\u89e3\u5e76\u5b9e\u73b0\u7684\u7279\u6b8a\u89e3\u6cd5\uff1a",id:"\u9700\u8981\u4e86\u89e3\u5e76\u5b9e\u73b0\u7684\u7279\u6b8a\u89e3\u6cd5",level:3},{value:"Morris \u904d\u5386",id:"morris-\u904d\u5386",level:4},{value:"Floyd&#39;s Cycle Detection Algorithm\uff08\u5feb\u6162\u6307\u9488\uff09",id:"floyds-cycle-detection-algorithm\u5feb\u6162\u6307\u9488",level:4},{value:"Boyer\u2013Moore \u6295\u7968",id:"boyermoore-\u6295\u7968",level:4},{value:"\u8f6e\u8f6c\u7b97\u6cd5",id:"\u8f6e\u8f6c\u7b97\u6cd5",level:4},{value:"\u5feb\u901f\u5e42",id:"\u5feb\u901f\u5e42",level:4},{value:"\u6d17\u724c\u7b97\u6cd5",id:"\u6d17\u724c\u7b97\u6cd5",level:4},{value:"\u7279\u6b8a\u4e8c\u5206\u67e5\u627e",id:"\u7279\u6b8a\u4e8c\u5206\u67e5\u627e",level:4},{value:"\u5feb\u901f\u9009\u62e9",id:"\u5feb\u901f\u9009\u62e9",level:4},{value:"\u5224\u65ad\u8d28\u6570",id:"\u5224\u65ad\u8d28\u6570",level:4},{value:"\u6700\u8fd1\u516c\u5171\u7956\u5148",id:"\u6700\u8fd1\u516c\u5171\u7956\u5148",level:4},{value:"\u6700\u5927\u516c\u7ea6\u6570",id:"\u6700\u5927\u516c\u7ea6\u6570",level:4},{value:"\u6570\u5b66\u4e0e\u6392\u5217\u7ec4\u5408",id:"\u6570\u5b66\u4e0e\u6392\u5217\u7ec4\u5408",level:4},{value:"\u62d3\u6251\u6392\u5e8f",id:"\u62d3\u6251\u6392\u5e8f",level:4},{value:"Dijkstra \u7b97\u6cd5",id:"dijkstra-\u7b97\u6cd5",level:4},{value:"Bellman\u2013Ford \u7b97\u6cd5",id:"bellmanford-\u7b97\u6cd5",level:4},{value:"\u53ea\u9700\u8981\u4e86\u89e3\u7684\u7279\u6b8a\u89e3\u6cd5",id:"\u53ea\u9700\u8981\u4e86\u89e3\u7684\u7279\u6b8a\u89e3\u6cd5",level:3},{value:"\u9700\u8981\u8bb0\u4e0b\u6765\u7684\u4ee3\u7801\u6a21\u7248",id:"\u9700\u8981\u8bb0\u4e0b\u6765\u7684\u4ee3\u7801\u6a21\u7248",level:3},{value:"API \u5bf9\u6bd4",id:"api-\u5bf9\u6bd4",level:3},{value:"\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7",id:"\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7",level:3},{value:"\u57fa\u672c\u89c4\u5219",id:"\u57fa\u672c\u89c4\u5219",level:4},{value:"Java",id:"java",level:4},{value:"Python",id:"python",level:4},{value:"C++",id:"c",level:4},{value:"\u74f6\u9888\u671f",id:"\u74f6\u9888\u671f",level:3}],o={toc:k};function m(t){let{components:l,...e}=t;return(0,n.kt)("wrapper",(0,a.Z)({},o,e,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5176\u4ed6\u5185\u5bb9"},"\u5176\u4ed6\u5185\u5bb9"),(0,n.kt)("h3",{id:"\u9700\u8981\u4e86\u89e3\u5e76\u5b9e\u73b0\u7684\u7279\u6b8a\u89e3\u6cd5"},"\u9700\u8981\u4e86\u89e3\u5e76\u5b9e\u73b0\u7684\u7279\u6b8a\u89e3\u6cd5\uff1a"),(0,n.kt)("h4",{id:"morris-\u904d\u5386"},"Morris \u904d\u5386"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-inorder-traversal/"},"94. \u4e8c\u53c9\u6811\u7684\u4e2d\u5e8f\u904d\u5386")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/binary-tree-preorder-traversal/"},"144. \u4e8c\u53c9\u6811\u7684\u524d\u5e8f\u904d\u5386"))),(0,n.kt)("h4",{id:"floyds-cycle-detection-algorithm\u5feb\u6162\u6307\u9488"},"Floyd's Cycle Detection Algorithm\uff08\u5feb\u6162\u6307\u9488\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/linked-list-cycle/"},"141. \u73af\u5f62\u94fe\u8868")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/find-the-duplicate-number/"},"287. \u5bfb\u627e\u91cd\u590d\u6570"))),(0,n.kt)("h4",{id:"boyermoore-\u6295\u7968"},"Boyer\u2013Moore \u6295\u7968"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/majority-element/"},"169. \u591a\u6570\u5143\u7d20")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/majority-element-ii/"},"229. \u6c42\u4f17\u6570 II"))),(0,n.kt)("h4",{id:"\u8f6e\u8f6c\u7b97\u6cd5"},"\u8f6e\u8f6c\u7b97\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/rotate-array/"},"189. \u8f6e\u8f6c\u6570\u7ec4"))),(0,n.kt)("h4",{id:"\u5feb\u901f\u5e42"},"\u5feb\u901f\u5e42"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/powx-n/"},"50. Pow(x, n)"))),(0,n.kt)("h4",{id:"\u6d17\u724c\u7b97\u6cd5"},"\u6d17\u724c\u7b97\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/shuffle-an-array/"},"384. \u6253\u4e71\u6570\u7ec4"))),(0,n.kt)("h4",{id:"\u7279\u6b8a\u4e8c\u5206\u67e5\u627e"},"\u7279\u6b8a\u4e8c\u5206\u67e5\u627e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/longest-increasing-subsequence/"},"300. \u6700\u957f\u9012\u589e\u5b50\u5e8f\u5217"))),(0,n.kt)("h4",{id:"\u5feb\u901f\u9009\u62e9"},"\u5feb\u901f\u9009\u62e9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/kth-largest-element-in-an-array/"},"215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20"))),(0,n.kt)("h4",{id:"\u5224\u65ad\u8d28\u6570"},"\u5224\u65ad\u8d28\u6570"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/count-primes/"},"204. \u8ba1\u6570\u8d28\u6570"))),(0,n.kt)("h4",{id:"\u6700\u8fd1\u516c\u5171\u7956\u5148"},"\u6700\u8fd1\u516c\u5171\u7956\u5148"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/"},"236. \u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/"},"1676. \u4e8c\u53c9\u6811\u7684\u6700\u8fd1\u516c\u5171\u7956\u5148 IV"))),(0,n.kt)("h4",{id:"\u6700\u5927\u516c\u7ea6\u6570"},"\u6700\u5927\u516c\u7ea6\u6570"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/find-greatest-common-divisor-of-array/"},"1979. \u627e\u51fa\u6570\u7ec4\u7684\u6700\u5927\u516c\u7ea6\u6570"))),(0,n.kt)("h4",{id:"\u6570\u5b66\u4e0e\u6392\u5217\u7ec4\u5408"},"\u6570\u5b66\u4e0e\u6392\u5217\u7ec4\u5408"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/unique-paths/"},"62. \u4e0d\u540c\u8def\u5f84"))),(0,n.kt)("h4",{id:"\u62d3\u6251\u6392\u5e8f"},"\u62d3\u6251\u6392\u5e8f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/course-schedule-ii/"},"210. \u8bfe\u7a0b\u8868 II"))),(0,n.kt)("h4",{id:"dijkstra-\u7b97\u6cd5"},"Dijkstra \u7b97\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/network-delay-time/"},"743. Network Delay Time")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/cheapest-flights-within-k-stops/"},"787. Cheapest Flights Within K Stops")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/path-with-maximum-probability/"},"1514. Path with Maximum Probability"))),(0,n.kt)("h4",{id:"bellmanford-\u7b97\u6cd5"},"Bellman\u2013Ford \u7b97\u6cd5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/"},"787. K \u7ad9\u4e2d\u8f6c\u5185\u6700\u4fbf\u5b9c\u7684\u822a\u73ed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://leetcode-cn.com/problems/network-delay-time/"},"743. \u7f51\u7edc\u5ef6\u8fdf\u65f6\u95f4"))),(0,n.kt)("h3",{id:"\u53ea\u9700\u8981\u4e86\u89e3\u7684\u7279\u6b8a\u89e3\u6cd5"},"\u53ea\u9700\u8981\u4e86\u89e3\u7684\u7279\u6b8a\u89e3\u6cd5"),(0,n.kt)("p",null,"\u725b\u987f\u8fed\u4ee3\u6cd5\uff0cKMP \u7b97\u6cd5\uff0cPrim \u7b97\u6cd5\uff0cFloyd-Warshall \u7b97\u6cd5"),(0,n.kt)("h3",{id:"\u9700\u8981\u8bb0\u4e0b\u6765\u7684\u4ee3\u7801\u6a21\u7248"},"\u9700\u8981\u8bb0\u4e0b\u6765\u7684\u4ee3\u7801\u6a21\u7248"),(0,n.kt)("p",null,"\u4e8c\u5206\u67e5\u627e lower","_","bound, upper","_","bound\uff0c\u524d\u7f00\u6811\uff0c\u524d\u7f00\u548c\uff0c\u6ed1\u52a8\u7a97\u53e3\uff08\u627e\u6700\u957f\u4ee5\u53ca\u6700\u77ed\uff09\uff0c\u5355\u8c03\u6808\uff0c\u56de\u6eaf\uff0cBFS\uff0cDFS\uff0c\u62d3\u6251\u6392\u5e8f\uff0cUnion Find\uff0c\u6eda\u52a8\u54c8\u5e0c\uff0c\u5feb\u901f\u9009\u62e9\u7b97\u6cd5"),(0,n.kt)("h3",{id:"api-\u5bf9\u6bd4"},"API \u5bf9\u6bd4"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u4e09\u79cd\u5e38\u89c1\u7684\u7f16\u7a0b\u8bed\u8a00 API \u7684\u5bf9\u6bd4\u8868\u683c\uff0c\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7406\u89e3\u5176\u4ed6\u4eba\u7684\u4ee3\u7801\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Java"),(0,n.kt)("th",{parentName:"tr",align:null},"Python"),(0,n.kt)("th",{parentName:"tr",align:null},"C++"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html"},"ArrayList")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"arr.add(val)"),(0,n.kt)("li",null,"arr.insert(i, val)"),(0,n.kt)("li",null,"arr.get(i)"),(0,n.kt)("li",null,"arr.set(i, val)"),(0,n.kt)("li",null,"arr.remove(val)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/tutorial/datastructures.html#more-on-lists"},"List")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"arr.append(val)"),(0,n.kt)("li",null,"arr.insert(i, val)"),(0,n.kt)("li",null,"arr","[i]"),(0,n.kt)("li",null,"arr","[i]"," = val"),(0,n.kt)("li",null,"arr.remove(val)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/vector/vector/"},"vector")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"arr.push_back(val)"),(0,n.kt)("li",null,"arr.insert(i, val)"),(0,n.kt)("li",null,"arr","[i]"),(0,n.kt)("li",null,"arr","[i]"," = val"),(0,n.kt)("li",null," - ")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html"},"LinkedList")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"ll.add(val)"),(0,n.kt)("li",null,"ll.addFirst(val) / offerFirst(val)"),(0,n.kt)("li",null,"ll.addLast(val) / offerLast(val)"),(0,n.kt)("li",null,"ll.getFirst() / peek() / peekFirst() "),(0,n.kt)("li",null,"ll.getLast() / peekLast()"))),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/list/list/"},"list")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"ll.push","_","back(val)"),(0,n.kt)("li",null,"ll.push","_","front(val)"),(0,n.kt)("li",null,"ll.push","_","back(val)"),(0,n.kt)("li",null,"ll.front()"),(0,n.kt)("li",null,"ll.back()")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html"},"Stack")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"st.push(val)"),(0,n.kt)("li",null,"st.pop()"),(0,n.kt)("li",null,"st.peek()"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks"},"Stack")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"st.append(va)"),(0,n.kt)("li",null,"st.pop()"),(0,n.kt)("li",null,"st","[-1]"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/stack/stack/"},"stack")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"st.push","_","back()"),(0,n.kt)("li",null,"st.pop","_","back()"),(0,n.kt)("li",null,"st.top()")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Queue.html"},"Queue")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"q.add(val) / offer(val)"),(0,n.kt)("li",null,"q.poll() / remove()"),(0,n.kt)("li",null,"q.peek() / element()"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/collections.html"},"deque")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"q.append(val)"),(0,n.kt)("li",null,"q.popleft()"),(0,n.kt)("li",null,"q","[0]"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/queue/queue/"},"queue")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"q.push(val)"),(0,n.kt)("li",null,"q.pop()"),(0,n.kt)("li",null,"q.front()")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html"},"PriorityQueue")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"q.add(val) / offer(val)"),(0,n.kt)("li",null,"q.poll() / remove()"),(0,n.kt)("li",null,"q.peek()"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/heapq.html"},"heap")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"heappush(q, val)"),(0,n.kt)("li",null,"heappop(q)"),(0,n.kt)("li",null,"q","[0]"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/queue/priority_queue/"},"priority","_","queue")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"q.push(val)"),(0,n.kt)("li",null,"q.pop()"),(0,n.kt)("li",null,"q.top()")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html"},"HashSet")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"s.add(val)"),(0,n.kt)("li",null,"s.contains(val)"),(0,n.kt)("li",null,"s.remove(val)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/tutorial/datastructures.html#sets"},"Set")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"s.add(val)"),(0,n.kt)("li",null,"bool(val in s)"),(0,n.kt)("li",null,"s.remove(val)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/unordered_set/unordered_set/"},"unordered_set")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"s.insert(val)"),(0,n.kt)("li",null,"s.count(val)"),(0,n.kt)("li",null,"s.erase(val)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"},"HashMap")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"ht.put(i, val)"),(0,n.kt)("li",null,"ht.get(i)"),(0,n.kt)("li",null,"ht.remove(i)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/tutorial/datastructures.html#dictionaries"},"Dictionaries")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"ht","[i]"," = value"),(0,n.kt)("li",null,"ht","[i]"),(0,n.kt)("li",null,"del ht","[i]"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/unordered_map/unordered_map/"},"unordered_map")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"ht.insert({i, val})"),(0,n.kt)("li",null,"ht","[i]"),(0,n.kt)("li",null,"ht.erase(i)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html"},"TreeMap")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"bt.put(i, val)"),(0,n.kt)("li",null,"bt.get(i)"),(0,n.kt)("li",null,"bt.ceilingEntry(i)"),(0,n.kt)("li",null,"bt.higherEntry(i)"))),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/map/map/"},"map")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"bt.insert(i, val)"),(0,n.kt)("li",null,"bt","[i]"),(0,n.kt)("li",null,"bt.lower","_","bound(i)"),(0,n.kt)("li",null,"bt.upper","_","bound(i)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Collections.html#binarySearch-java.util.List-T-"},"binarySearch")," ",(0,n.kt)("ul",null," ",(0,n.kt)("li",null,"Collections.binarySearch(array, i)"),(0,n.kt)("li",null," - "))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/bisect.html"},"bisect")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"bisect","_","left(arr, i)"),(0,n.kt)("li",null,"bisect","_","right(arr, i)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/algorithm/binary_search/"},"binary","_","search")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"lower","_","bound(arr.begin(), arr.end(), i)"),(0,n.kt)("li",null,"upper","_","bound(arr.begin(), arr.end(), i)")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html"},"String")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"st.charAt(i)"),(0,n.kt)("li",null,"st.compareTo(st2)"),(0,n.kt)("li",null,"st.contains(i)"),(0,n.kt)("li",null,"Integer.parseInt(i)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.python.org/3/library/string.html"},"string")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"st","[i]"),(0,n.kt)("li",null,"st == st2"),(0,n.kt)("li",null,"bool(i in st)"),(0,n.kt)("li",null,"int(i)"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.cplusplus.com/reference/string/string/"},"string")," ",(0,n.kt)("ul",null,(0,n.kt)("li",null,"st","[i]"),(0,n.kt)("li",null,"st.compare(st2)"),(0,n.kt)("li",null,"st.contains(i)"),(0,n.kt)("li",null,"stoi(i)")))))),(0,n.kt)("h3",{id:"\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7"},"\u8fd0\u7b97\u7b26\u4f18\u5148\u7ea7"),(0,n.kt)("h4",{id:"\u57fa\u672c\u89c4\u5219"},"\u57fa\u672c\u89c4\u5219"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e00\u5143\u8fd0\u7b97\u7b26\u4f18\u4e8e\u4e8c\u5143\u8fd0\u7b97\u7b26"),(0,n.kt)("li",{parentName:"ol"},"\u4e58\u9664\u52a0\u51cf\u4f18\u4e8e\u5927\u90e8\u5206\u8fd0\u7b97\u7b26"),(0,n.kt)("li",{parentName:"ol"},"\u4f4d\u8fd0\u7b97\u4f18\u4e8e\u903b\u8f91\u8fd0\u7b97")),(0,n.kt)("h4",{id:"java"},"Java"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html"},"Java Operators")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u522b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5217\u8868"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u62ec\u53f7"),(0,n.kt)("td",{parentName:"tr",align:null},"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u524d\u540e\u7f00\u4e0e\u4e00\u5143\u8fd0\u7b97\u7b26"),(0,n.kt)("td",{parentName:"tr",align:null},"++, --, !, ~, +, -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e58\u9664\u52a0\u51cf"),(0,n.kt)("td",{parentName:"tr",align:null},"*, /, +, -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f4d\u79fb"),(0,n.kt)("td",{parentName:"tr",align:null},">>, <<")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u4e0e\u6bd4\u8f83"),(0,n.kt)("td",{parentName:"tr",align:null},">, >=, <, <=, ==,")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f4d\u8fd0\u7b97"),(0,n.kt)("td",{parentName:"tr",align:null},"&, ^, ","|",", &&, ","|","|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u903b\u8f91\u8fd0\u7b97"),(0,n.kt)("td",{parentName:"tr",align:null},"&&, ","|","|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e09\u5143\u8fd0\u7b97\u7b26"),(0,n.kt)("td",{parentName:"tr",align:null},"? :")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8d4b\u503c"),(0,n.kt)("td",{parentName:"tr",align:null},"=, +=, -=, ^=, >>=")))),(0,n.kt)("h4",{id:"python"},"Python"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/reference/expressions.html"},"Python Expressions")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u522b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5217\u8868"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u62ec\u53f7"),(0,n.kt)("td",{parentName:"tr",align:null},"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u9636\u4e58"),(0,n.kt)("td",{parentName:"tr",align:null},"**")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u524d\u540e\u7f00\u4e0e\u4e00\u5143\u8fd0\u7b97\u7b26"),(0,n.kt)("td",{parentName:"tr",align:null},"++, --, !, ~, +, -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e58\u9664\u52a0\u51cf"),(0,n.kt)("td",{parentName:"tr",align:null},"*, /, +, -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f4d\u79fb"),(0,n.kt)("td",{parentName:"tr",align:null},">>, <<")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f4d\u8fd0\u7b97"),(0,n.kt)("td",{parentName:"tr",align:null},"&, ^, ","|",", &&, ","|","|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u4e0e\u6bd4\u8f83"),(0,n.kt)("td",{parentName:"tr",align:null},">, >=, <, <=, ==,")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u903b\u8f91\u8fd0\u7b97"),(0,n.kt)("td",{parentName:"tr",align:null},"&&, ","|","|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8d4b\u503c"),(0,n.kt)("td",{parentName:"tr",align:null},"=, +=, -=, ^=, >>=")))),(0,n.kt)("h4",{id:"c"},"C++"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cpp/cpp/cpp-built-in-operators-precedence-and-associativity?view=msvc-170"},"C++ built-in operators, precedence, and associativity")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u522b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u5217\u8868"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u62ec\u53f7"),(0,n.kt)("td",{parentName:"tr",align:null},"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u524d\u540e\u7f00\u4e0e\u4e00\u5143\u8fd0\u7b97\u7b26"),(0,n.kt)("td",{parentName:"tr",align:null},"++, --, !, ~, +, -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e58\u9664\u52a0\u51cf"),(0,n.kt)("td",{parentName:"tr",align:null},"*, /, +, -")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f4d\u79fb"),(0,n.kt)("td",{parentName:"tr",align:null},">>, <<")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5224\u65ad\u4e0e\u6bd4\u8f83"),(0,n.kt)("td",{parentName:"tr",align:null},">, >=, <, <=, ==,")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4f4d\u8fd0\u7b97"),(0,n.kt)("td",{parentName:"tr",align:null},"&, ^, ","|",", &&, ","|","|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u903b\u8f91\u8fd0\u7b97"),(0,n.kt)("td",{parentName:"tr",align:null},"&&, ","|","|")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u8d4b\u503c"),(0,n.kt)("td",{parentName:"tr",align:null},"=, +=, -=, ^=, >>=")))),(0,n.kt)("h3",{id:"\u74f6\u9888\u671f"},"\u74f6\u9888\u671f"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u5e38\u89c1\u7684\u74f6\u9888\u671f\u4ee5\u53ca\u89e3\u51b3\u65b9\u6cd5"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u74f6\u9888\u671f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u539f\u56e0"),(0,n.kt)("th",{parentName:"tr",align:null},"\u89e3\u51b3\u65b9\u6cd5"),(0,n.kt)("th",{parentName:"tr",align:null},"\u76ee\u6807"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7406\u89e3\u9898\u76ee"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u5e73\u65f6\u505a\u9898\u6ca1\u6709\u8ba1\u65f6\u7684\u4e60\u60ef\uff0c\u4e0d\u77e5\u9053\u81ea\u5df1\u5199\u4ee3\u7801\u6240\u9700\u7684\u65f6\u95f4\uff0c\u6240\u4ee5\u901a\u8fc7\u5feb\u901f\u9605\u8bfb\u6765\u4e89\u53d6\u65f6\u95f4\uff0c\u5ffd\u7565\u4e86\u9898\u76ee\u8981\u70b9"),(0,n.kt)("li",null,"\u4e0d\u591f\u8010\u5fc3\u548c\u4ed4\u7ec6"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u4ed4\u7ec6\u8010\u5fc3\u9605\u8bfb\u9898\u76ee\uff0c\u8fb9\u9605\u8bfb\u8fb9\u8bb0\u4e0b\u8981\u70b9\uff0c\u5982\u8f93\u5165\u6570\u636e\uff0c\u9650\u5236\u6761\u4ef6\u7b49"),(0,n.kt)("li",null,"\u4f7f\u7528\u4f8b\u5b50\u5e2e\u52a9\u7406\u89e3\u9898\u76ee"),(0,n.kt)("li",null,"\u5bf9\u6bcf\u9898\u505a\u9898\u65f6\u95f4\u8fdb\u884c\u8ba1\u65f6"))),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e94\u5206\u949f\u5185\u80fd\u591f\u7406\u89e3\u9898\u76ee\u542b\u4e49")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u7406\u89e3\u9898\u89e3"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u6ca1\u6709\u89c2\u5bdf\u5230\u9898\u76ee\u7684\u7279\u70b9\u4ee5\u53ca\u4f7f\u7528\u8be5\u6570\u636e\u7ed3\u6784\u6216\u8005\u7b97\u6cd5\u7684\u539f\u56e0"),(0,n.kt)("li",null,"\u4e0d\u719f\u6089\u9898\u89e3\u63cf\u8ff0\u7684\u6570\u636e\u7ed3\u6784\u6216\u8005\u7b97\u6cd5"),(0,n.kt)("li",null,"\u9898\u76ee\u96be\u5ea6\u8fc7\u9ad8\uff0c\u6d89\u53ca\u4e86\u591a\u79cd\u6570\u636e\u7ed3\u6784\u6216\u8005\u7b97\u6cd5"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u4ed4\u7ec6\u9605\u8bfb\u591a\u79cd\u7c7b\u578b\u7684\u56fd\u533a\u9898\u89e3\u4ee5\u53ca\u7f8e\u533a\u9898\u89e3"),(0,n.kt)("li",null,"\u5217\u51fa\u9898\u89e3\u4e2d\u7684\u6570\u636e\u7ed3\u6784\u4ee5\u53ca\u7b97\u6cd5\uff0c\u9010\u4e2a\u5b66\u4e60"),(0,n.kt)("li",null,"\u9009\u62e9\u66f4\u4f4e\u96be\u5ea6\u7684\u9898\u76ee"))),(0,n.kt)("td",{parentName:"tr",align:null},"\u80fd\u591f\u7406\u89e3\u5927\u90e8\u5206\u5b98\u65b9\u9898\u89e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u505a\u8fc7\u7684\u9898\u76ee\u65e0\u6cd5 AC"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u505a\u9898\u53ea\u8ffd\u6c42\u901a\u8fc7\uff0c\u6ca1\u6709\u601d\u8003\u548c\u603b\u7ed3"),(0,n.kt)("li",null,"\u6ca1\u6709\u5b66\u4e60\u591a\u4e2a\u89e3\u6cd5\uff0c\u4ece\u800c\u4ece\u4e0d\u540c\u89d2\u5ea6\u770b\u5f85\u95ee\u9898\uff0c\u52a0\u6df1\u5370\u8c61"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u505a\u5b8c\u9898\u76ee\u4e4b\u540e\u8fdb\u884c\u56de\u987e\u4e0e\u603b\u7ed3\uff0c\u5c1d\u8bd5\u4e0d\u540c\u89e3\u6cd5"),(0,n.kt)("li",null,"\u4e86\u89e3\u8be5\u7c7b\u578b\u9898\u76ee\u7684\u5e38\u7528\u6a21\u5f0f\uff0c\u4f7f\u7528\u573a\u666f\u4ee5\u53ca\u5e38\u89c1\u9519\u8bef"))),(0,n.kt)("td",{parentName:"tr",align:null},"\u505a\u8fc7\u7684\u9898\u76ee\u57fa\u672c\u80fd\u591f\u505a\u51fa\u6765")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u77e5\u9053\u9898\u76ee\u662f\u4ec0\u4e48\u7c7b\u578b"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u65e0\u6cd5\u6709\u6548\u89c2\u5bdf\u4ee5\u53ca\u5206\u6790\u9898\u76ee"),(0,n.kt)("li",null,"\u4e0d\u719f\u6089\u4e0d\u540c\u7c7b\u578b\u9898\u76ee\u7684\u7279\u70b9"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u5b66\u4e60\u5b98\u65b9\u9898\u89e3\u7684\u524d\u671f\u5206\u6790\u6b65\u9aa4\uff0c\u89c2\u5bdf\u9898\u76ee\u7684\u7279\u70b9"),(0,n.kt)("li",null,"\u603b\u7ed3\u4e0d\u540c\u7c7b\u578b\u9898\u76ee\u7684\u4f7f\u7528\u573a\u666f"))),(0,n.kt)("td",{parentName:"tr",align:null},"\u80fd\u591f\u5224\u65ad\u9898\u76ee\u5927\u6982\u662f\u4ec0\u4e48\u7c7b\u578b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u6709\u601d\u8def\uff0c\u4f46\u662f\u5199\u4e0d\u5bf9"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u601d\u8def\u4e0d\u591f\u6e05\u6670\uff0c\u5ffd\u7565\u4e86\u91cd\u8981\u7684\u7ec6\u8282"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u5199\u4ee3\u7801\u524d\u8ba4\u771f\u601d\u8003\u6bcf\u4e00\u4e2a\u6b65\u9aa4"),(0,n.kt)("li",null,"\u5199\u4ee3\u7801\u524d\u5148\u5229\u7528\u4f8b\u5b50\u6765\u8bc1\u660e\u601d\u8def\u7684\u6b63\u786e\u6027"))),(0,n.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801\u80fd\u591f\u6b63\u786e\u5b9e\u73b0\u8111\u6d77\u4e2d\u7684\u601d\u8def")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u8bb0\u5f97\u5177\u4f53\u7684\u5e93\u4ee5\u53ca API"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u5bf9\u7f16\u7a0b\u8bed\u8a00\u4e0d\u591f\u719f\u7ec3"),(0,n.kt)("li",null,"\u4e0d\u4e86\u89e3\u5e38\u7528\u5e93"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("ul",null,(0,n.kt)("li",null,"\u9605\u8bfb\u5b98\u65b9\u9898\u89e3\uff0c\u5b66\u4e60\u4ec0\u4e48\u60c5\u51b5\u4e0b\u53ef\u4ee5\u7528\u6807\u51c6\u5e93"),(0,n.kt)("li",null,"\u5b66\u4e60\u6807\u51c6\u5e93\u7684 API"))),(0,n.kt)("td",{parentName:"tr",align:null},"\u6b63\u786e\u5199\u51fa\u5177\u4f53\u5e93\u4ee5\u53ca API")))))}m.isMDXComponent=!0}}]);