var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

window.addEventListener('load', init);

var canvas;
var ctx;

function init() {
        canvas = document.getElementById('maincanvas');
        ctx = canvas.getContext('2d');

        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;

        requestAnimationFrame(update);
}

function update() {
        requestAnimationFrame(update);

        render();
}

function render() {
        // 画面全体をクリア
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 背景を表示
        ctx.drawImage(Asset.images['back'], 0, 0);

        // 笑い男を表示
        ctx.drawImage(Asset.image['laughing_man'], 0, 0);
}





var Asset = {};

// アセットの定義
Asset.assets = [
{ type: 'image', name: 'back', src: 'assets/back.png' },
{ type: 'image', name: 'laughing_man', src: 'assets/laughing_man.png' }
];

//読み込んだアセット
Asset.images = {};

Asset.loadAssets = function(onComplete) {
        var total = Asset.assets.length; // lengthメソッドは配列の要素を返す
        var loadCount = 0; // 読み込み完了したアセットの数

        // アセットが読み込み終わった時に呼ばれるコールバック関数
        var onLoad = function() {
                loadCount++; // 読み込み完了数を一つ足す
                if (loadCount >= total) {
                        // すべてのアセット読み込みが完了した
                        onComplete;
                }
        };
        // すべてのアセットを読み込む
        Asset.assets.forEach(function(assets) {
                switch (asset.type) {
                        case 'image':
                                Asset._loadImage(asset, onLoad);
                                break;
                }
        });

};

Asset._loadImage = function(assets, onLoad) {
        var image = new Image();
        image.src = assets.src;
        image.onLoad = onLoad;
        Asset.images[asset.name] = image;
};

