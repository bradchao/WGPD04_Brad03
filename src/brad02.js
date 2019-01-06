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


var Brad02Layer = cc.Layer.extend({
    sprite:null,
    isShoot: false,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: 0,
            y: 0
        });
        this.addChild(this.sprite, 0);

        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                target.isShoot = true;
            },

            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isShoot = false;
            },
        }, this);

        this.scheduleUpdate();

        return true;
    },

    update: function () {
        if (this.isShoot){
            this.sprite.x += 16;
            this.sprite.y += 16;
        }
    }


});

var Brad02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad02Layer();
        this.addChild(layer);
    }
});

