ajtxz_hcgame.level5_3 = function () {

    var pgame = this;
    var levelbase;
    var timer;

    this.preload = function() {
        levelbase = new ajtxz_hcgame.levelbase(pgame, [5,3]);
    }

    this.create = function() {
        levelbase.init();
        levelbase.initPool(520);
        levelbase.initWaterJet(370);
        levelbase.initBird(15, 2000, 180, 300);
        levelbase.initRing(270, 25);
        levelbase.initRing(435, 150);

        //Display level intro
        var lvl_intro = pgame.add.sprite(this.world.centerX, this.world.centerY-50, 'lvl_intro_5_3');
        lvl_intro.anchor.setTo(0.5, 0.5);

        //Initialize timer for level intro (kill it after 1 second)
        timer = pgame.time.create(true);
        timer.add(1000, function(){
            lvl_intro.destroy();
            pgame.add.sprite(10, 15, 'lvl_tag_5_3');
        }, this);
        timer.start();
    }

    this.update = function() {
        levelbase.defaultUpdate();
    }
};