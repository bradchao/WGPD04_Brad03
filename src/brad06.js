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


var Brad06Layer = cc.Layer.extend({
    sprite:null,
    isFlipY: false,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        this.sprite = new cc.Sprite(res.s1b);
        this.sprite.attr({
            x: cc.winSize.width /2,
            y: cc.winSize.height /2
        });
        this.addChild(this.sprite);

        var act1 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.isFlipY = !this.isFlipY;
                this.sprite.runAction(cc.flipY(this.isFlipY));
            },
            this
        );
        act1.x = 100, act1.y = 600;

        var act2 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(cc.scaleBy(2,2,2));
            },
            this
        );
        act2.x = 150, act2.y = 600;

        var act3 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(cc.scaleBy(2,0.5,0.5));
            },
            this
        );
        act3.x = 200, act3.y = 600;

        var act4 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(cc.fadeIn(2));
            },
            this
        );

        act4.x = 250, act4.y = 600;

        var act5 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(cc.fadeOut(2));
            },
            this
        );
        act5.x = 300, act5.y = 600;

        var act6 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(cc.rotateBy(3, 360));
            },
            this
        );
        act6.x = 350, act6.y = 600;

        var act7 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(cc.blink(2, 10));
            },
            this
        );
        act7.x = 400, act7.y = 600;

        var act8 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(
                    cc.jumpTo(2, cc.p(0,0), 100, 4));
            },
            this
        );
        act8.x = 450, act8.y = 600;

        var act9 = new cc.MenuItemImage(
            res.btn, null, null,
            function(){
                this.sprite.runAction(
                    cc.moveTo(2, cc.p(cc.winSize.width/2, cc.winSize.height/2)));
            },
            this
        );
        act9.x = 500, act9.y = 600;


        var menu = new cc.Menu(act1, act2, act3, act4, act5, act6, act7, act8, act9);
        menu.x = 0,  menu.y = 0;
        this.addChild(menu);






        return true;
    }
});

var Brad06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad06Layer();
        this.addChild(layer);
    }
});

