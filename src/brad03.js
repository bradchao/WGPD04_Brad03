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


var Brad03Layer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.Brick_png);
        this.sprite.attr({
            x: cc.winSize.width /2,
            y: cc.winSize.height/2
        });
        this.addChild(this.sprite,0, "brick");

        // var bullet = new cc.Sprite(res.Bullet_png);
        // bullet.attr({
        //     x: cc.winSize.width,
        //     y: cc.winSize.height/2
        // });
        // this.addChild(bullet, 0, "bullet");

        //this.scheduleUpdate();


        var bullet = new Bullet(this, 10);
        bullet.setTexture(res.Bullet_png);
        bullet.attr({
            x: cc.winSize.width,
            y: cc.winSize.height/2
        });
        this.addChild(bullet, 0, "bullet");

        // var bullet2 = new Bullet(this,20);
        // bullet2.setTexture(res.Bullet_png);
        // bullet2.attr({
        //     x: cc.winSize.width,
        //     y: cc.winSize.height/4
        // });
        // this.addChild(bullet2, 0, "bullet");

        this.remove


        return true;
    },

    update: function () {
        var brick = this.getChildByName("brick");
        var bullet = this.getChildByName("bullet");

        if (bullet != null && brick != null){
            var brickRect = new cc.Rect(
                brick.x - brick.width/2,
                brick.y - brick.height/2,
                brick.width, brick.height
            );

            var bulletPoint = new cc.Point(
                bullet.x - brick.width/2, bullet.y
            );

            if (cc.rectContainsPoint(brickRect, bulletPoint)){
                this.removeChild(brick, true);
                this.removeChild(bullet, true);
            }

            bullet.x -= 4;

        }

    },


});

var Bullet = cc.Sprite.extend({
    layer:null,
    counter: 0,
    dx: 0,
    ctor: function (layer, dx) {
        this._super();
        this.layer = layer;
        this.dx = dx;
        this.scheduleUpdate();
    },

    update: function (dt) {
        this.counter++;

        if (this.counter % 100 == 0){
            cc.log("OK");
        }

        if (this.x <= 400){
            this.layer.removeChild(this.layer.sprite);
            this.layer.removeChild(this);
        }


        this.x -= this.dx;

    }
});


var Brad03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad03Layer();
        this.addChild(layer);
    }
});

