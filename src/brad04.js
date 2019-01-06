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


var Brad04Layer = cc.Layer.extend({
    ball:null,
    dx: 4,
    dy: 4,
    ctor:function () {
        this._super();

        this.ball = new cc.Sprite(res.Ball_png);
        this.ball.attr({
            x: cc.winSize.width /2,
            y: cc.winSize.height/2
        });
        this.addChild(this.ball, 0);

        this.scheduleUpdate();

        return true;
    },

    update: function () {
        if (this.ball.x + this.ball.width/2 >= cc.winSize.width ||
            this.ball.x - this.ball.width/2 <= 0){
            this.dx *= -1;
        }
        if (this.ball.y + this.ball.height/2 >= cc.winSize.height ||
            this.ball.y - this.ball.height/2 <= 0){
            this.dy *= -1;
        }
        this.ball.x += this.dx;
        this.ball.y += this.dy;
    },

});

var Brad04Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad04Layer();
        this.addChild(layer);
    }
});

