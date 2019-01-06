/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/


var Brad05Layer = cc.Layer.extend({
    bg:null,
    man: null,
    manFrams: null,
    manAction: 0,
    isRight: true,
    ctor:function () {
        this._super();

        this.bg = new cc.Sprite(res.Bg1_png);
        this.bg.attr({
            y: cc.winSize.height /2,
            x: this.bg.width/2
        });
        this.bg.scaleY = 2;
        this.addChild(this.bg);

        var cache = cc.spriteFrameCache;
        cache.addSpriteFrames(res.Man_plist, res.Man_png);
        var img37 = cache.getSpriteFrame("image37.png");
        var img38 = cache.getSpriteFrame("image38.png");
        var img39 = cache.getSpriteFrame("image39.png");
        var img40 = cache.getSpriteFrame("image40.png");

        this.manFrams = [img38, img39, img37, img40];

        this.man = new cc.Sprite(this.manFrams[this.manAction]);
        this.man.attr({
            x: cc.winSize.width/2,
            y: cc.winSize.height/2 + this.man.height/2
        });
        this.addChild(this.man);

        this.man.runAction(cc.flipX(this.isRight));

        this.setupKeyboard(this);

        return true;
    },


    setupKeyboard: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
                switch (keyCode) {
                    case 39:
                        // right
                        if (!layer.isRight){
                            layer.chDir();
                        }
                        layer.goForward();
                        break;
                    case 37:
                        // left
                        if (layer.isRight){
                            layer.chDir();
                        }
                        layer.goBack();
                        break;
                }
            },
        }, this);
    },

    chDir: function(){
        this.isRight = !this.isRight;
        this.man.runAction(cc.flipX(this.isRight));
    },

    goForward: function () {
        if (this.bg.x + this.bg.width/2 > cc.winSize.width){
            this.bg.x -= 8;

            this.manAction = this.manAction==3?0:this.manAction+1;
            this.man.setSpriteFrame(this.manFrams[this.manAction]);
        }

    },

    goBack: function () {
        if (this.bg.x - this.bg.width/2 < 0) {
            this.bg.x += 8;
            this.manAction = this.manAction==0?3:this.manAction-1;
            this.man.setSpriteFrame(this.manFrams[this.manAction]);
        }
    },




});

var Brad05Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad05Layer();
        this.addChild(layer);
    }
});

