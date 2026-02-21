'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d0c88490e24fc52e842abb5a83ab7ae3",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "3bfbf39bf7252f425be0cfa303efcd3e",
"/": "3bfbf39bf7252f425be0cfa303efcd3e",
"main.dart.js": "0e1877e4e829ff5bfe1b1d6bad7f85f3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "b7ec53c700d5c4d80f9c7a0ab63b2bb1",
".git/objects/59/e55143a1703c91624aec892ce193ec895f0ed8": "08dd5f0fe1ca0ef0ac3d07a18b88c428",
".git/objects/59/adebbe14d7d1731bc1e20b94f38066be7e5f03": "421a9c04636c7f6246a14ff0fa4620d4",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/575ccdba6e207ac55ed9b0d84efdc2083acedc": "f594a0b3742f3f002d9e65b94b5d0b39",
".git/objects/3e/6bdd25671838dc2318fb5dba7213f4b1d1cd7e": "d668c2a5436a2ed3e74ea4110b272fc1",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/69/5b5d2260b5c497dc54916c79b0f816a375724c": "44a1866c32c40936689290b13d9d5883",
".git/objects/69/53e62b90b8637b7bc1c11179d0af90bafc108a": "8bd16a4b95ae7f10ef6c287c120fbfcd",
".git/objects/3c/d39f09122cab86df65522186f41a32f2a29b25": "1be1703bdcd03d6d4552ffe56c29d745",
".git/objects/3c/c4179ba023eb6966ddc7d90b1da541b93de4db": "840f756f2c12a148448eba1a42f06b66",
".git/objects/51/d156f414ffbeb9daa994af93c90d9a096d1024": "269d7e0b9f0d29c7cef6cad7da9beacf",
".git/objects/94/fe0e982e7032d939c5652404606e3201d3b91e": "6b33d2fd9c7123e6acb57ab1a8b0b565",
".git/objects/a3/df6104d81402f0ba86f695139d02e8244ae552": "fc686516427fcccdc706b3cd03a59fd3",
".git/objects/b2/a842889f63cf23a44a963efb65e0ed1bd2bda5": "297e9925bc1feec450afefd02f2f2c79",
".git/objects/b2/57855982c42838b81219219a6626254fd185b6": "0e9231ec11fdcae856a7a2db598e17cc",
".git/objects/ac/63fb782a7e43afa96645e60980e2df0af8381a": "fffb1ef0ba0225db5491070430f119e9",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a5/ef13b9ad969a6b9bbd4a34109181c29ca5bc0a": "58b4889816a5032c41cb93fc473a9701",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/e23120d5f8de22f7d9f8b985613850471aa19c": "102964ba1e9ddaf00f70a7928069e2cc",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/e2/e5f5dd061899c46522c1ac4ec6c7536946225b": "08146d5a4812fc80b5e9ead774d10475",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/4b1b503224dcefaec85221f3d32ac1132e8c65": "c306ef959ab328c61d649b9212702379",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/1ac537947dde636814ddf5cee0bdd8d19ebaa3": "0486857fbc418d75a27a72417a6e9f6c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c6/6be977cc022af34080ada9234b5a0763ffb287": "9f98de8e32362f2b8665ac35b140df35",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/pack/pack-8fe88d198a3e1ba028be880ba0d52f09215cebb2.pack": "69e429cdc52cc2a150c65a2548535eef",
".git/objects/pack/pack-8fe88d198a3e1ba028be880ba0d52f09215cebb2.idx": "584bc454167552a278675a103b032980",
".git/objects/pack/pack-8fe88d198a3e1ba028be880ba0d52f09215cebb2.rev": "d1c952396bd252b1076e5f62e6994ca2",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/3cc711ab12a259fb0c4ea8ab1423b6944b28e0": "f8bc596e4f3d0464f5f7d22c9c695a04",
".git/objects/89/bc0cd018d56989a15715d6db4d0411c9a2aff3": "dc4ba77a54c3e471546ba965f7ae69ff",
".git/objects/89/a0b0e0279a59edfb5d6043d172adc586397c62": "51c2545e09c5b5a85252f8188b806562",
".git/objects/45/74f2a93de58fedac3d1ab7f9c09399fa77b0b7": "c0db2329398b4a3fb2c80c64c070e980",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/fe26400fd215eff160fe890a979749dbdcebd0": "4b06bffc31fcf8c020c48b1b56beb83b",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/21/437d717c42762f47047146f25b17af52e952bf": "4506f9072fe134225df7e03f8608f74e",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/81/fffdc4da769f3cf0489cf8e33adbf44d7eae49": "b1913e7e09edf3abf1cdb54e9c997518",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/43/59ff7f61dca624acb5c836382670fbc7248f0a": "13563f36b4f9c1a675280a93fb39f90e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/d1e9a427b3fa3b66dca79f8b804cadd17c6716": "28a799c8639c204265b127231485aa3b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/7a0673eb8a335173db85b58f23f81bd3832243": "4bfc41425a54c6cd6d8a1c34c66c4b50",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/5008c1bb1dc3ae4e11473daee9355b1cdac62b": "2543944d8e4c8b50e646ce6fe968b221",
".git/objects/5c/0cf3d78cf465c24099ec301d5bba02115d51f3": "7dd1d1e0972bf95df28db4b75c2d28e3",
".git/objects/5c/e8a2a090d3138243bcba0ee4ff9f7947f0e171": "cfcca2de29984fb389c6529ec7a6ecf2",
".git/objects/5c/c0ea2fc902d9de20f621bfde6e99d41b6fe641": "4d75a04ac68eb3fd75665fb6b8268d04",
".git/objects/09/6f74fb764185b2b2d47ac2459e1956cfc6cedc": "8dd2658f0a3940378c5a82dff9473115",
".git/objects/96/b9a631a72b9edc9ecc7386e99d1b53bba79c94": "6fa21187772271372fd5e3284b7edd75",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/96/1388167f3bb4c197c1292481042fb5f15629e6": "30629eea11941849f9fb2dd476d64815",
".git/objects/54/ebb980149147151e12fe93c81c48ba46bca916": "9fc929e2b7b2b2b6c9372538057406fd",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/01/ab4bda2f02e7e69296e0ebb1635cbccaa3bc3d": "c8d3b92493efa00c45faf04679df9e40",
".git/objects/6c/80f6ee6ba942595e1694b3dd4465d1ba423464": "868289e1404bad0227006989ba54c5c7",
".git/objects/64/c5a378502c1c2b480bffddf7f32a4684d8d773": "b39a31506f4394f69f446b36b19af928",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/225d734d730c5fb305655752a214d1a535bc3e": "795e0f88d28ae200419a6ecb9f7c3e29",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0f92e7e78b38a411ba0e8621db4cdb553331d9": "c7311e793e7f1c87fbce92ceeba2aa90",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/f0/2f3953728d66b0c49ff387b855d10905ae76cd": "480c1a5024b44f418550e727e047ac6a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/4f3c3315c8109fb8e3b666b76bd191839888a8": "d6b99a72e51af92ee861c6ff186db399",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/47/0ba8aca1a88382c0c853f870d9fd6eadba2e6e": "91f5d4b25c62303c6abeb3cd56bb5d5c",
".git/objects/8b/971bd97cc5d06e3a632fd6fbfe95022c38c202": "6be1f7479e8fa9fa1e4672abb359c8bb",
".git/objects/8b/3cd805a5d5e74a8d0e6917a82155fdf4ebfbbb": "ee3287aa1f6995c8a7ff9c4dbd36d305",
".git/objects/8b/6953dc9a40c0bb9b0eceed65c45dd5405acd69": "711f0399e0620f63de87d342827bf572",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "fdeb507ebeb5a2f80b5517f21507fb49",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3a795f95c9641cb921cfdaff8f276ade",
".git/logs/refs/heads/v2.0": "3a795f95c9641cb921cfdaff8f276ade",
".git/logs/refs/remotes/orgin/v2.0": "5fba00a4212e2c64c37275286458e8d9",
".git/logs/refs/remotes/orgin/HEAD": "5b61f1219deb63af0ec87f901ae46eb7",
".git/logs/refs/remotes/orgin/master": "d629137237d06f543b117c022372c3e9",
".git/logs/refs/remotes/orgin/main": "7ba8fcb9aee2a6ab423daccc870cebbd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/v2.0": "783a7c316d51d53432a1b5f3235f82bb",
".git/refs/remotes/orgin/v2.0": "783a7c316d51d53432a1b5f3235f82bb",
".git/refs/remotes/orgin/HEAD": "1163112c93a0a9f01629817fbccba144",
".git/refs/remotes/orgin/master": "3146b6b82c0ab2f776335492be560c5e",
".git/refs/remotes/orgin/main": "81538592b755eb92ba2b9925dc353415",
".git/index": "9706e921157ab879c99efe5c72ab059e",
".git/COMMIT_EDITMSG": "b544f0e2230f4615eda27569b00de6e8",
".git/FETCH_HEAD": "30b78699a66d44a6bc54bc6d89b21bc5",
"assets/AssetManifest.json": "bf77d2a043dc92e7e0c9b16fcab672da",
"assets/NOTICES": "dd0b951ed7a0d3c7d73a25d10dc414a8",
"assets/FontManifest.json": "b06c31ae890f48f62daf6833b3ef335d",
"assets/AssetManifest.bin.json": "808345797825d7b198d6d61cbc669a95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "644c2a8a486cca6cd2426fdfa1c0c553",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "14ace26cd29e747675e2029ecc6fc557",
"assets/fonts/MaterialIcons-Regular.otf": "6abfb1c6687dd70da6b2c24ad6a1ef92",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "ef42898551745693f902c2985594fd5c",
"assets/assets/images/languages.svg": "799efb89f63704b2c8a487447643e2db",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/xcode.svg": "35cb8b66e93683bb1be28abe6721f52c",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/skills.svg": "383f48088895a57619788201fda98a83",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
