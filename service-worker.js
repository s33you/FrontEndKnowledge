/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e85b1ec656ea436d2fd2d1cddd4636d5"
  },
  {
    "url": "assets/css/0.styles.c33ef3b7.css",
    "revision": "61bc6393848c315300c243951b9f1c19"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ef2ef882.js",
    "revision": "f360b9bf34669552f2f369bfec96c1e8"
  },
  {
    "url": "assets/js/11.bea478d7.js",
    "revision": "2e07cfa950cbcfb4b26d00b6dc24055b"
  },
  {
    "url": "assets/js/12.e2c9f81b.js",
    "revision": "1615068d36a9d6115ab68cbd36767ca8"
  },
  {
    "url": "assets/js/13.539d0fd0.js",
    "revision": "018611e9612ce154b5d49ad4c42e1e5a"
  },
  {
    "url": "assets/js/14.b2a3c4f4.js",
    "revision": "18331289dd3072f33f248b154f8b7d5e"
  },
  {
    "url": "assets/js/15.506d5de2.js",
    "revision": "6782a1204ea11ab9b7f2981af54db6f1"
  },
  {
    "url": "assets/js/16.28a0e5da.js",
    "revision": "fba1a71419badceb3896ec783e24c37e"
  },
  {
    "url": "assets/js/17.64e93417.js",
    "revision": "fb4463921024a383540cce60ac57f787"
  },
  {
    "url": "assets/js/18.6159566c.js",
    "revision": "4a281b13418668a1a0fe0fedf2d1e376"
  },
  {
    "url": "assets/js/19.55e3005a.js",
    "revision": "ff5f7fdd03546e39657519ed7b4484f1"
  },
  {
    "url": "assets/js/20.68544b6c.js",
    "revision": "313e38f48ed935b9f83d999ca4c3a615"
  },
  {
    "url": "assets/js/21.6c371d75.js",
    "revision": "1cb5c1864a947320f6ccba99ebfc02c6"
  },
  {
    "url": "assets/js/22.4714cad3.js",
    "revision": "430d2629d0bc3d9242b0bfd4aa1d0cb2"
  },
  {
    "url": "assets/js/23.19fe6f8a.js",
    "revision": "01b5139f9a4783cbf0ac927943e46d3c"
  },
  {
    "url": "assets/js/24.1a6b0cd3.js",
    "revision": "a40664f56f5d51b01d4b284be09d6391"
  },
  {
    "url": "assets/js/25.8b7e71a0.js",
    "revision": "37bc2a940da508608bdcdb514525a00d"
  },
  {
    "url": "assets/js/26.26de356d.js",
    "revision": "ccd3040c5f85ded349a36161f8ac95c1"
  },
  {
    "url": "assets/js/27.f7c115f3.js",
    "revision": "576a709d68937e412fe0605a2e5eadf1"
  },
  {
    "url": "assets/js/28.2fcb6ea6.js",
    "revision": "f90f6c3a4c66e00226e67d2380a246f9"
  },
  {
    "url": "assets/js/29.ce136aec.js",
    "revision": "1c3706e2fd0a2e97b0564fe61b168a47"
  },
  {
    "url": "assets/js/3.ca3c0aae.js",
    "revision": "ddd915d74e26a0f3b86044ddfe5a9000"
  },
  {
    "url": "assets/js/30.c0d64423.js",
    "revision": "5df83a95f599181f6d40678d855737fa"
  },
  {
    "url": "assets/js/31.19dc6acc.js",
    "revision": "e828986d085ab87dd59a73e3a44f5662"
  },
  {
    "url": "assets/js/32.177e1f96.js",
    "revision": "2287231039181e1ad1cd33419908b5b9"
  },
  {
    "url": "assets/js/33.884dbc82.js",
    "revision": "587ee2c0f887672e2b06a45b3531a680"
  },
  {
    "url": "assets/js/34.5ebc1136.js",
    "revision": "2cb1850751bf3c626469b2d1705594b2"
  },
  {
    "url": "assets/js/35.a4547614.js",
    "revision": "3355535a9f4744f4afe0bbfa3d382d47"
  },
  {
    "url": "assets/js/36.a0677337.js",
    "revision": "1253a429aca2ae1022c33c23bb1979f7"
  },
  {
    "url": "assets/js/37.be7cd7f5.js",
    "revision": "8af3238796c8039dd7b8e5da82f657ec"
  },
  {
    "url": "assets/js/38.10c27600.js",
    "revision": "e847c3a529d6a22613042d4569ef5252"
  },
  {
    "url": "assets/js/39.6f87eec6.js",
    "revision": "8318783aeda6fdb3a066c3eebfd6d525"
  },
  {
    "url": "assets/js/4.d9be5193.js",
    "revision": "a8bc3f3f5ad2667073fda9b0f9d3774b"
  },
  {
    "url": "assets/js/40.54b4b7fe.js",
    "revision": "81ad2f7af58a87d5a1a176685c3cf48a"
  },
  {
    "url": "assets/js/41.e0942284.js",
    "revision": "fd8ed360a8d4606ec461e5769e3a28a8"
  },
  {
    "url": "assets/js/42.d1ff8343.js",
    "revision": "cf9904165604f6bb45e0ea8cfcea638a"
  },
  {
    "url": "assets/js/43.e6fdcf27.js",
    "revision": "92661c59d5545574aca87e9e15216422"
  },
  {
    "url": "assets/js/44.cc4c5af7.js",
    "revision": "764d3a0ceee464a569bc2c7fadf4bf88"
  },
  {
    "url": "assets/js/45.2225bf90.js",
    "revision": "fbf6c7c7ab21fcdefdd698ad9394eafb"
  },
  {
    "url": "assets/js/46.b3d0804b.js",
    "revision": "2012353173aee277796608f23696b316"
  },
  {
    "url": "assets/js/47.5ba8c7dc.js",
    "revision": "3c9604975f7177998464f78e0d6f3a03"
  },
  {
    "url": "assets/js/48.0ee1425f.js",
    "revision": "f8ac9741bb1599267effbbcbe712b510"
  },
  {
    "url": "assets/js/49.27f002bb.js",
    "revision": "ada9f99d0624a7a64b6b733c77915b4c"
  },
  {
    "url": "assets/js/5.80081606.js",
    "revision": "24e45a810cbd60dc9fd726f9ba91df31"
  },
  {
    "url": "assets/js/50.41247e77.js",
    "revision": "7d813c5cedb3d6c5529c171b739c5083"
  },
  {
    "url": "assets/js/51.000e4d02.js",
    "revision": "f84d6cff32d690e0eed24186bbd7e8bf"
  },
  {
    "url": "assets/js/52.96533625.js",
    "revision": "e4407c0053d4407522ca7636c4aecca1"
  },
  {
    "url": "assets/js/53.d22edf24.js",
    "revision": "06c1b781605efcddee04b01d14ee977c"
  },
  {
    "url": "assets/js/54.bbeaea95.js",
    "revision": "5166f19e484d8595f2bee22e295a6e33"
  },
  {
    "url": "assets/js/55.78106060.js",
    "revision": "c487d179f7bfc5087557b0502180dbb3"
  },
  {
    "url": "assets/js/56.226b8631.js",
    "revision": "c260e5a36b25322d453f8c8efe073a3e"
  },
  {
    "url": "assets/js/57.fdfa3e7c.js",
    "revision": "8e10b7df855945c11b57bdf783191f71"
  },
  {
    "url": "assets/js/58.c2ad87bb.js",
    "revision": "a7734f8258c2e39dd84d11b6a986c024"
  },
  {
    "url": "assets/js/59.447e516c.js",
    "revision": "d650171ec578f6839fb8c005ae4727bb"
  },
  {
    "url": "assets/js/6.4cd0594d.js",
    "revision": "05a4a87766e1bf9c3c0e9220ef916aac"
  },
  {
    "url": "assets/js/60.5436675b.js",
    "revision": "0eef384b6d3e4c908b888b1c3f4b3a54"
  },
  {
    "url": "assets/js/61.f4868bfc.js",
    "revision": "551fb1b6074683db23d612ec642f9048"
  },
  {
    "url": "assets/js/62.eb7d521e.js",
    "revision": "d1a2be5749b03bb328d9c90c4f1a1324"
  },
  {
    "url": "assets/js/63.fdaa5579.js",
    "revision": "c63c119534c0a70ce34be18428c837e3"
  },
  {
    "url": "assets/js/64.608281c2.js",
    "revision": "e035962fddaca876a1a04147e387b883"
  },
  {
    "url": "assets/js/65.c77db638.js",
    "revision": "ac48a741e28d1e70f8cd22cb7a83dcb3"
  },
  {
    "url": "assets/js/66.b166d06e.js",
    "revision": "619bb0c0145fd5d3215966c6ce1bb826"
  },
  {
    "url": "assets/js/67.00752ddb.js",
    "revision": "aa514c4a07517072a58a1d7a7ad33aee"
  },
  {
    "url": "assets/js/68.86559cbb.js",
    "revision": "ae850d0e2905f0f61bf4d087105307e0"
  },
  {
    "url": "assets/js/69.82b034c1.js",
    "revision": "fa29ad2aa4ac4fe1f83a54bc49ff64ad"
  },
  {
    "url": "assets/js/7.f7fb530c.js",
    "revision": "b12252a7b1b8b00a145c17707fc02145"
  },
  {
    "url": "assets/js/70.4463ac0f.js",
    "revision": "c8d33ec71aefc536e68b238947267253"
  },
  {
    "url": "assets/js/8.6c131b05.js",
    "revision": "622f273e8e3490c9015b503b50982a49"
  },
  {
    "url": "assets/js/9.269875fa.js",
    "revision": "0d53c62520a60c6f2a8ee5de9366c1b2"
  },
  {
    "url": "assets/js/app.818a6464.js",
    "revision": "f2928f83119abc5133b598bcf834a06c"
  },
  {
    "url": "assets/js/vendors~notification.b8581b7d.js",
    "revision": "42e6fac24e08529f6883fbf1c8369934"
  },
  {
    "url": "guide/abstract.html",
    "revision": "000d1feb8e9b0c7e73a76aa39d7908af"
  },
  {
    "url": "guide/algorithm.html",
    "revision": "78332eec3f191d905a54930c133370e7"
  },
  {
    "url": "guide/ast.html",
    "revision": "19807622148614ccf7e945a2ae57537a"
  },
  {
    "url": "guide/babel.html",
    "revision": "cf90a7208650d6ed41aded856d6b1ee9"
  },
  {
    "url": "guide/babelPlugin.html",
    "revision": "de400b8aab859793183e9b7e91f5adfd"
  },
  {
    "url": "guide/book.html",
    "revision": "f2fbcf49ed76730ead2319e96641c3b4"
  },
  {
    "url": "guide/browser.html",
    "revision": "b7d9831668d6591915fbadd56c4c8e88"
  },
  {
    "url": "guide/carousel.html",
    "revision": "bb0399f1893399897536c5db4be87e93"
  },
  {
    "url": "guide/common.html",
    "revision": "d8455d0f4acea535de6c85506fd7a8d0"
  },
  {
    "url": "guide/component.html",
    "revision": "330e644b315e5257bc2d0ad5eb881b2c"
  },
  {
    "url": "guide/componentCli.html",
    "revision": "b9ca3391e1af4d09375e16b44f980857"
  },
  {
    "url": "guide/composite.html",
    "revision": "b8ebabd0d1791caf562dc5bfaff3c03a"
  },
  {
    "url": "guide/cssBasic.html",
    "revision": "42bc3326e9b29a620599f571a637dee9"
  },
  {
    "url": "guide/dataStructure.html",
    "revision": "dd216c80890bbe7f971b15d93726cf15"
  },
  {
    "url": "guide/deepclone.html",
    "revision": "89d1fd5764d7c4ddbd552f7e487bac4b"
  },
  {
    "url": "guide/designPatterns.html",
    "revision": "f70c8cc4dc1b1e15723f4e43ffc6cbb8"
  },
  {
    "url": "guide/devsProxy.html",
    "revision": "82115c1a2f28fa68bd033a345c1a7b83"
  },
  {
    "url": "guide/dom.html",
    "revision": "a2c38d099ab30ea8c665f2325f69b169"
  },
  {
    "url": "guide/engineering.html",
    "revision": "8b8693dccee2441ec4c3d3c6c4e1657b"
  },
  {
    "url": "guide/event.html",
    "revision": "4b8c32995f1025a13b5e1807d0bada18"
  },
  {
    "url": "guide/eventLoop.html",
    "revision": "9320fa20ae21e042d5a2818dae8b3351"
  },
  {
    "url": "guide/execute.html",
    "revision": "3182ba45c0d5f9f563e08615a570e511"
  },
  {
    "url": "guide/fiber.html",
    "revision": "e643e393775ab5eeb34278ebbd788a80"
  },
  {
    "url": "guide/framework.html",
    "revision": "6c9e024d727aed57105e6661c8b5779e"
  },
  {
    "url": "guide/hoisting.html",
    "revision": "a9d2c731ce518a3638a0f816c7c0c54c"
  },
  {
    "url": "guide/hr.html",
    "revision": "d37db2c1009204e3d8fa0f1681f3dbf7"
  },
  {
    "url": "guide/htmlBasic.html",
    "revision": "08b3f1aa19b92a8f63f50f2a32843297"
  },
  {
    "url": "guide/http.html",
    "revision": "d1b927e1008945cf00b073a659d24ec9"
  },
  {
    "url": "guide/httpWritten.html",
    "revision": "675a7105d4a48c269e86ca29a4bc8978"
  },
  {
    "url": "guide/immutable.html",
    "revision": "6cf4b8140d4eb0345ad978c323c1944c"
  },
  {
    "url": "guide/index.html",
    "revision": "863adb9eb71b6391a03435ac2d7fbf97"
  },
  {
    "url": "guide/jsBasic.html",
    "revision": "35840549188ae6c3c42b47063a62303c"
  },
  {
    "url": "guide/jsWritten.html",
    "revision": "109bc35ff8a59871ca6ef3c81093205f"
  },
  {
    "url": "guide/load.html",
    "revision": "03428b91be11d45c15aa0179637fb3bd"
  },
  {
    "url": "guide/mechanism.html",
    "revision": "124c8fcb3fcca5c1d3c6158082a8ad75"
  },
  {
    "url": "guide/memory.html",
    "revision": "e8bb07aeea40a162cb9bb118d6f3feee"
  },
  {
    "url": "guide/node.html",
    "revision": "f82de8682875949af306cd43beec4750"
  },
  {
    "url": "guide/preface.html",
    "revision": "5edd374e50276ec69c7c67362c363d84"
  },
  {
    "url": "guide/project.html",
    "revision": "a3b701614fe8882d41aee565b7778838"
  },
  {
    "url": "guide/react.html",
    "revision": "debe39153d3fe03fb6098a654fb7ef14"
  },
  {
    "url": "guide/reactHook.html",
    "revision": "da3ac2f846d324076715ee139940d5fe"
  },
  {
    "url": "guide/reactivity.html",
    "revision": "bcc5e7a7651daa7b586f92a8629eab37"
  },
  {
    "url": "guide/redux.html",
    "revision": "1492598a5f837f689d2c21406eda6f35"
  },
  {
    "url": "guide/resume.html",
    "revision": "e3addbcf1799dbf602cfae8d1e64c740"
  },
  {
    "url": "guide/router.html",
    "revision": "04e36cbd0218151e24009b0b2d5fcccd"
  },
  {
    "url": "guide/security.html",
    "revision": "15c88e86b4d4c47cc457c34d2416fdba"
  },
  {
    "url": "guide/setState.html",
    "revision": "0e79a30896fb229b315571034cf3ef16"
  },
  {
    "url": "guide/string.html",
    "revision": "cd593ff41d0761c7614f8edc32ac2def"
  },
  {
    "url": "guide/tcp.html",
    "revision": "960128727eb3324d49f8799aaa4e2d1d"
  },
  {
    "url": "guide/virtualDom.html",
    "revision": "f2147b020f714a6af386638f2ee86b3a"
  },
  {
    "url": "guide/vue.html",
    "revision": "596bc83dbef45a0e8814ec77e4c8a4ce"
  },
  {
    "url": "guide/webpack.html",
    "revision": "0ec2dba999be803c78ea04d1d580e0b5"
  },
  {
    "url": "guide/WebpackHMR.html",
    "revision": "a805390f7f0bbb7196b67f2f82d62df3"
  },
  {
    "url": "guide/webpackLoader.html",
    "revision": "585bd76c49adbc147a99ea836adc953a"
  },
  {
    "url": "guide/webpackMoudle.html",
    "revision": "23fa38f7bfab74fc187a3cdca2efc572"
  },
  {
    "url": "guide/webpackPlugin.html",
    "revision": "7f1628c86fe7a01a1c5c0520100455b3"
  },
  {
    "url": "guide/webpackPluginDesign.html",
    "revision": "2a25a2f9396f5272e8e38a4ee974d660"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "b4ebfe6ca70081e1ec5b1d36362c192a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
