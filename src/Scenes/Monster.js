class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.Skey=null;
        this.Fkey=null;
        this.Akey=null;
        this.Dkey=null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right<br> Daddys Home! with the milk???</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.hair = this.add.sprite(this.bodyX, this.bodyY-160, "monsterParts", "body_whiteF.png");
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY-150, "monsterParts", "body_yellowA.png");
        my.sprite.head.scaleX =  .8;
        my.sprite.head.scaleY =  .8;
        //my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenF.png");
        my.sprite.belly = this.add.sprite(this.bodyX, this.bodyY+10, "monsterParts", "body_yellowC.png");
        my.sprite.belly.scaleX =  .7;
        my.sprite.belly.scaleY =  .7;
        my.sprite.armR = this.add.sprite(this.bodyX+110, this.bodyY, "monsterParts", "arm_greenD.png");
        my.sprite.armL = this.add.sprite(this.bodyX-110, this.bodyY, "monsterParts", "arm_greenD.png");
        my.sprite.armL.flipX = true;
        my.sprite.bell2 = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.bell3 = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "eye_dead.png");
        my.sprite.eyeL = this.add.sprite(this.bodyX-35, this.bodyY-165, "monsterParts", "eye_cute_light.png");
        my.sprite.eyeL.scaleX =  .75;
        my.sprite.eyeL.scaleY =  .8;
        my.sprite.eyeR = this.add.sprite(this.bodyX+35, this.bodyY-155, "monsterParts", "eye_psycho_light.png");
        my.sprite.eyeR.scaleX =  .80;
        my.sprite.eyeR.scaleY =  .40;
        my.sprite.LegR = this.add.sprite(this.bodyX+50, this.bodyY+150, "monsterParts", "leg_redD.png");
        my.sprite.LegL = this.add.sprite(this.bodyX-50, this.bodyY+150, "monsterParts", "leg_redD.png");
        my.sprite.LegL.flipX = true;
        my.sprite.Smile = this.add.sprite(this.bodyX, this.bodyY-135, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY-135, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.Ant = this.add.sprite(this.bodyX, this.bodyY-280, "monsterParts", "detail_red_antenna_small.png");
        this.Skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.Fkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.Dkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.Akey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.sprite.fang.visible = false;
        this.Skey.on('down',(key, event)=>{my.sprite.fang.visible = false;my.sprite.Smile.visible = true;});
        this.Fkey.on('down',(key, event)=>{my.sprite.Smile.visible = false;my.sprite.fang.visible = true});
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //console.log(this.bodyX);
        if(this.Dkey.isDown){
            console.log("key is down");
            my.sprite.hair.x++;
            my.sprite.body.x++;
            my.sprite.eyeL.x++;
            my.sprite.eyeR.x++;
            my.sprite.head.x++;
            my.sprite.Smile.x++;
            my.sprite.fang.x++;
            my.sprite.LegL.x++;
            my.sprite.LegR.x++;
            my.sprite.belly.x++;
            my.sprite.bell2.x++;
            my.sprite.bell3.x++;
            my.sprite.armL.x++;
            my.sprite.armR.x++;
            my.sprite.Ant.x++;
        }
        if(this.Akey.isDown){
            console.log("key is down");
            my.sprite.hair.x--;
            my.sprite.body.x--;
            my.sprite.eyeL.x--;
            my.sprite.eyeR.x--;
            my.sprite.head.x--;
            my.sprite.Smile.x--;
            my.sprite.fang.x--;
            my.sprite.LegL.x--;
            my.sprite.LegR.x--;
            my.sprite.belly.x--;
            my.sprite.bell2.x--;
            my.sprite.bell3.x--;
            my.sprite.armL.x--;
            my.sprite.armR.x--;
            my.sprite.Ant.x--;
        }

    }

}