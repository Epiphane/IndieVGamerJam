var UpgradeScreen = Juicy.State.extend({
    constructor: function(player) {
        this.player = player;

        var itemStartY = -100;
        var itemWidth = 200;
        var itemPadding = 50;

        // I'm sorry. It's just so small and pointless.
        var DropScroll = Juicy.Component.extend({
            name: 'DropScroll',
            constructor: function() {
                this.destination = 300;
                this.timeUntilDrop = 0;
                this.dropTime = 0;
                this.totalDropTime = 1;
            },
            update: function(dt) {
                if (this.timeUntilDrop > 0) {
                    this.timeUntilDrop -= dt;
                    return;
                }

                if (this.dropTime < this.totalDropTime) {
                    this.dropTime += dt;

                    this.entity.transform.position.y = this.destination - Math.abs(Math.sin(this.dropTime * PI) / (20 * this.totalDropTime));
                }
                else {
                    this.entity.transform.position.y = this.destination;
                }
            }
        });

        this.magic = new Juicy.Entity(this, ['Image', DropScroll]);
        this.magic.setImage('./img/upgrade_magic.png');
        this.magic.transform.position.x = itemPadding;
        this.magic.transform.position.y = itemStartY;

        this.agility = new Juicy.Entity(this, ['Image', DropScroll]);
        this.agility.setImage('./img/upgrade_agility.png');
        this.agility.transform.position.x = 2 * itemPadding + itemWidth;
        this.agility.transform.position.y = itemStartY;
        this.agility.getComponent('DropScroll').timeUntilDrop = 0.5;

        this.power = new Juicy.Entity(this, ['Image', DropScroll]);
        this.power.setImage('./img/upgrade_power.png');
        this.power.transform.position.x = 3 * itemPadding + 2 * itemWidth;
        this.power.transform.position.y = itemStartY;
        this.power.getComponent('DropScroll').timeUntilDrop = 1;
    },
    update: function(dt) {
        this.magic.update(dt);
        this.agility.update(dt);
        this.power.update(dt);
    },
    render: function(context) {
        this.magic.render(context);
        this.agility.render(context);
        this.power.render(context);
    }
});