/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/10/artical1-FAST-Feature-detect/index.html","a348aba67d32e8d3d1366cf2040b2c30"],["/2022/07/10/artical2_bilinear_inter/index.html","7fc1516e1445db98c510593ed368e559"],["/2022/07/12/artical3-CLAHE/index.html","776e685e908f8058857d035f11c39595"],["/2022/07/12/artical4-AXI2VGA/index.html","f5627068521b7045951ced775fd91359"],["/about/index.html","8d998929196cdafe076e6f2b2516e33c"],["/about/resume.jpg","bf482135d078aa8f0be13053e90b913d"],["/academy/img/basketball_detect/1.png","a4977b3176550a3813af7888aae55fa1"],["/academy/img/basketball_detect/2.png","f9ca20841e24ccf112927c7ff1ae0577"],["/academy/img/basketball_detect/3.jpg","13baebb721b6a200ea81420a8b356214"],["/academy/img/vessel_detect/TASFF.png","fc6d602cc5f8369a1acd80027b0b6006"],["/academy/img/vessel_detect/method.png","2743422df57aff1c91330c97b2ec47a1"],["/academy/index.html","9dc63e5ffe688c6273295b8aa753d0f7"],["/archives/2022/07/index.html","d10f8453f31c9a4b8b0cc9155ea5db80"],["/archives/2022/index.html","d10f8453f31c9a4b8b0cc9155ea5db80"],["/archives/index.html","d10f8453f31c9a4b8b0cc9155ea5db80"],["/baidu_verify_code-Qjbe4IE6uq.html","d99c3a67a645c1ffffd7dd5e2e53d883"],["/categories/Note/index.html","4e0ed9577fef8018077dfb7f50ee17f0"],["/categories/Project/index.html","656c04fd11f23ea239e65be9161ea98f"],["/css/backcss.css","85b70f15b263fe67ae35c435b73759bd"],["/css/demo.css","a6e636fef241eeeead539584afeb1f21"],["/css/dropdownMenu.css","bd43b180d3f4cf4744f082189c672f88"],["/css/font-awesome.min.css","d96cb70981f41365e78382b4cd5692b6"],["/css/gallery.css","6e444192a0a84075ff1d63cfbdc0f727"],["/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["/css/images/arrow-small.svg","b533e494e6e3a12c4c9d235a5511941a"],["/css/images/arrow.svg","b81558de2f8ad95c3241af72b5e75cb2"],["/css/images/close-small-alt.svg","67b0ce6b3b2e6c52a30703ae0d4a1fc9"],["/css/images/close-small.svg","d0a48b5f9fe9b8a3daf9748276dc2005"],["/css/images/close.svg","7f8fecc1a2cf927df8c366216e032ee6"],["/css/images/open-small.svg","80f5d7c853849f7f585e8b01c0a85c2c"],["/css/images/open.svg","87758d058b3c6585ffc82ce91a59ebe7"],["/css/images/spinner.svg","9da18585517e24318d29d6b78b8a69ab"],["/css/images/zhihu-brands.svg","6be1b5636fffab620c42936e310ebb85"],["/css/item.css","91187df968de177b0f42cf7e339521e8"],["/css/mic_gallery.css","86fcc64436d45be1440e805898a91f13"],["/css/mic_main.css","381e8629abb5d80e1e40345c572faeeb"],["/css/my_link.css","8ce3b13bc731ed288ef76227691e2ff9"],["/css/normalize.css","3bc2f546340fb700ab9a155ff6bf45ab"],["/css/noscript.css","c843beeb78b3f423ab3f94fe6312efee"],["/css/ok_prism.css","889f25d24668e8ab03e09bed12fd5feb"],["/css/prism.css","72eee4b150eab89c974115ed79022aa3"],["/css/prism_coy.css","c1bab6744d70284d306eda008c6b308b"],["/css/prism_dark.css","680bff80f17584f4e938650ae4b7035a"],["/css/prism_default.css","6d10cd2d58cb49126322a8ca6dae04b4"],["/css/prism_funky.css","d27caabf86b8bb1fc713570ebf6e4293"],["/css/prism_okaidia.css","889f25d24668e8ab03e09bed12fd5feb"],["/css/prism_solarized.css","b19e6854517241af44558969380aa6ed"],["/css/prism_twilight.css","87053b8f2a4cbef3b9713e15db372c40"],["/css/typo.css","8ada221d5f8bf6540e020c106281a40a"],["/fonts/FZLT.ttf","a58a499bddbda398e1275972e56b06f6"],["/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/gallery/index.html","d931f9545aaf006b717abccc343c0949"],["/images/12.jpg","063f15d7d753f8a1cb66d896406730c9"],["/images/21.jpg","e46e364f8f95d98560a7434e6ff23ed8"],["/images/3123.jpg","ad0eaf3e886a044295aba5d3f5bb91e0"],["/images/fulls/01.jpg","c8a7312b3ca1e9f153a138a7ce1527e8"],["/images/fulls/02.jpg","506c2e45453a53524c699d2854be80ec"],["/images/fulls/03.jpg","04b92949f6264af0504a9dad185c28e5"],["/images/fulls/04.jpg","c71d55db77950b48f1e0be787b9bff47"],["/images/fulls/05.jpg","a33544f13eae99055db9023eb6f3aca9"],["/images/fulls/06.jpg","30620e37375cb828ec76ae7af50c36bf"],["/images/fulls/07.jpg","be66077687b72be05328ab1a99dd888d"],["/images/fulls/08.jpg","82e3b23903381d05c19a82098995b11b"],["/images/fulls/09.jpg","d251e85896ef98a1f49a87938ce48392"],["/images/fulls/10.jpg","a7d9057e096faa3fb6bf4035201eb9bd"],["/images/fulls/11.jpg","017c093be9b7228f5d9dea2a6ba2b461"],["/images/fulls/12.jpg","5d552f169f67c6d870695ead6c216da5"],["/images/logo.png","7f8ce5e74e314b22c6a744ff9345615f"],["/images/me.jpg","70ecc460367417d19e59c8d3cfdb9b50"],["/images/overlay.png","aff0992faef6ad79b50ec21e2225a881"],["/images/pic01.jpg","5f1e31e56b332bd5f0b315b45b7204fb"],["/images/pic02.jpg","8c20e039b8ea7c4a90cafb95d2c1b498"],["/images/pic03.jpg","0cd4c9ac02964e7a96b264994670600f"],["/images/pic04.jpg","1cf94a5ef0dc43c4fa7c63e7aaea252f"],["/images/pic05.jpg","8212f9a3928223bbf9d952946cd7492e"],["/images/pic06.jpg","43b89b2eac7888441a47d537b6024e4d"],["/images/pic07.jpg","3b551384c703206ac7330a61ceedef2d"],["/images/pic08.jpg","0e1004b210354f71dcac4334f9872864"],["/images/pic09.jpg","0f3e6cca6c792f7a754df48fde7d6d3b"],["/images/pic10.jpg","aa9397310c794b5f3a09c68382ca2770"],["/images/pic11.jpg","ba7bf856c45343791163833746d0f4b8"],["/images/pic12.jpg","51b5ad0c7762d954b22952ef86b29c3c"],["/images/picx03.jpg","c2e220dfa740f6276f38d399e04412f3"],["/images/thumbs/01.jpg","36a0adce2d218008a56d28240a55920d"],["/images/thumbs/02.jpg","71a93e8ccee1914c4fed2b14b2048c26"],["/images/thumbs/03.jpg","9bf32c8a9d000bc51fd67216d3bb0087"],["/images/thumbs/04.jpg","077b2a375f0251339ebea289b4d28e9e"],["/images/thumbs/05.jpg","dc767c675d8c93a28df27471772c265d"],["/images/thumbs/06.jpg","6f6d111464d45eb548e0343cee8ea848"],["/images/thumbs/07.jpg","84ca89fb3ee0a26effbb0e69ce59709e"],["/images/thumbs/08.jpg","5bc1d1921f0de35b81862b722d481901"],["/images/thumbs/09.jpg","1b14d2e13a6e24a20d2664711b27cca9"],["/images/thumbs/10.jpg","cfae7c322ca3c75d2703f97361441016"],["/images/thumbs/11.jpg","4c763bbbf4fb53986e4c0c5074fd3a6d"],["/images/thumbs/12.jpg","33fa13356921680b4e21c10f7e909753"],["/img/bg.jpg","678ae8886abb2ee2080a1d13c2f7b6f3"],["/img/logo_miccall.png","7f8ce5e74e314b22c6a744ff9345615f"],["/img/logo_nicy.jpg","55bbe635d47978464f0778a101806ba8"],["/img/me.jpg","59bb7739ce045b186f2de57aa048a635"],["/index.html","5b270498b71ee02c4bb4ad2df1778a01"],["/js/clicklove.js","ab3ff0c58c10e179758e4643f5bb8fcc"],["/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["/js/gallery_skel.min.js","df4f8930f3747bbadcdeb7dfe326ed73"],["/js/jquery.min.js","895323ed2f7258af4fae2c738c8aea49"],["/js/jquery.scrollex.min.js","830ab00c7d7a5be0c57f91e35bd32376"],["/js/jquery.scrolly.min.js","cdaa947ce14cf917fd3fbb34bbf69292"],["/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["/js/main.js","0f5163a8225aea599e8182bef85062dc"],["/js/mic_gallery.js","b586d86e9514fea46595c272a35dd8e8"],["/js/prism.js","dba8b9fa138014d5ea1c37f7be2a2e20"],["/js/skel.min.js","df4f8930f3747bbadcdeb7dfe326ed73"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/publication/index.html","16c2c5d74b21e71aa05afbeed91561ab"],["/sw-register.js","db942e4398a761a464783a484f5b5448"],["/tag/index.html","d300c971c4368d1af93c0682a5d75764"],["/tags/FPGA/index.html","656c04fd11f23ea239e65be9161ea98f"],["/tags/图像处理/index.html","d10f8453f31c9a4b8b0cc9155ea5db80"],["/tags/接口协议/index.html","4e0ed9577fef8018077dfb7f50ee17f0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
