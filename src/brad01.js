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


var Brad01Layer = cc.Layer.extend({
    sprite1:null,
    sprite1Rect: null,
    sprite2:null,
    isDrag : false,
    ctor:function () {
        this._super();


        this.sprite2 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2.attr({
            x: cc.winSize.width *3 /4,
            y: cc.winSize.height/2
        });
        this.addChild(this.sprite2, 1);


        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite1.attr({
            x: cc.winSize.width *1 /4,
            y: cc.winSize.height/2
        });
        this.addChild(this.sprite1, 5);
        this.sprite1Rect = cc.rect(
            this.sprite1.x - this.sprite1.width/2,
            this.sprite1.y - this.sprite1.height/2,
            this.sprite1.width,
            this.sprite1.height
        );



        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                cc.log("debug1");
                var target = e.getCurrentTarget();
                var parent = target.getParent();

                var ex = e.getLocationX(), ey = e.getLocationY();
                var p = new cc.Point(ex, ey);

                if (!cc.rectContainsPoint(parent.sprite1Rect, p)) {
                    target.x = e.getLocationX();
                    target.y = e.getLocationY();

                    parent.sprite1Rect = cc.rect(
                        target.x - target.width/2,
                        target.y - target.height/2,
                        target.width,
                        target.height
                    );


                }
            }
        }, this.sprite1);



        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                cc.log("debug2");
            }
        }, this.sprite2);



        this.setupMouse();



        return true;
    },

    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                cc.log("debug3");

                var target = e.getCurrentTarget();
                var ex = e.getLocationX(), ey = e.getLocationY();
                var p = new cc.Point(ex, ey);


                if ( cc.rectContainsPoint(target.sprite1Rect, p)){
                    target.isDrag = true;
                }

            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if (target.isDrag){

                    target.sprite1.x = e.getLocationX();
                    target.sprite1.y = e.getLocationY();

                    target.sprite1Rect = cc.rect(
                        target.sprite1.x - target.sprite1.width/2,
                        target.sprite1.y - target.sprite1.height/2,
                        target.sprite1.width,
                        target.sprite1.height
                    );
                }

            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();

                target.isDrag = false;


            },
        }, this);
    },


});

var Brad01Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Brad01Layer();
        this.addChild(layer);
    }
});

