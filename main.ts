namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const dummy = SpriteKind.create()
    export const bossss = SpriteKind.create()
}
namespace StatusBarKind {
    export const MadaraHealt = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`naru up`,
    200,
    true
    )
})
function enemYs () {
    enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    enemy1.follow(naruTo, randint(25, 50))
    enemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    enemy2.follow(naruTo, randint(25, 50))
    Enemy3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    Enemy3.follow(naruTo, randint(25, 50))
    enemy4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    enemy4.follow(naruTo, randint(25, 50))
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    myEnemy.follow(naruTo, randint(25, 50))
    enemy6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    enemy6.follow(naruTo, randint(25, 50))
    enemy7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 7 7 7 . 7 7 7 7 7 7 . . . 
        . . 7 7 1 7 7 1 1 7 7 1 7 7 . . 
        . . 7 7 1 1 1 1 1 1 1 1 7 7 . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 5 5 5 1 1 5 5 5 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . b . 1 1 f 1 1 1 1 f 1 1 . . . 
        . b . 1 1 1 f f f f 1 1 1 . . . 
        . b . 1 1 1 1 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . b 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Enemy)
    enemy7.follow(naruTo, randint(25, 50))
    enemy1.setPosition(randint(10, 150), randint(10, 150))
    enemy2.setPosition(randint(10, 150), randint(10, 150))
    Enemy3.setPosition(randint(10, 150), randint(10, 150))
    enemy4.setPosition(randint(10, 150), randint(10, 150))
    enemy6.setPosition(randint(10, 150), randint(10, 150))
    enemy7.setPosition(randint(10, 150), randint(10, 150))
    myEnemy.setPosition(randint(10, 150), randint(10, 150))
}
function thanksEnding () {
    game.showLongText("Good job you made it to the final level your amazing Give us an A Mr. Hutter", DialogLayout.Full)
    tiles.setTilemap(tilemap`level34`)
    game.showLongText("When you wanna end the game go to the bottom right of this level.", DialogLayout.Bottom)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    level23()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animeNaruto()
    if (controller.down.isPressed()) {
        Rasen_Shuriken = sprites.createProjectileFromSprite(assets.image`Rasen Shuriken`, naruTo, 0, 100)
    }
    if (controller.up.isPressed()) {
        Rasen_Shuriken = sprites.createProjectileFromSprite(assets.image`Rasen Shuriken`, naruTo, 0, -100)
    }
    if (controller.left.isPressed()) {
        Rasen_Shuriken = sprites.createProjectileFromSprite(assets.image`Rasen Shuriken`, naruTo, -100, 0)
    }
    if (controller.right.isPressed()) {
        Rasen_Shuriken = sprites.createProjectileFromSprite(assets.image`Rasen Shuriken`, naruTo, 100, 0)
    }
    naruTo.say("RasenShuriken", 100)
    animation.runImageAnimation(
    Rasen_Shuriken,
    assets.animation`rasen move`,
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, naruTo)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru left`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, naruTo)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Player, function (sprite, otherSprite) {
    if (painBoss.overlapsWith(naruTo)) {
        info.changeLifeBy(-1)
        deathEnding1()
    }
    if (madaraBoss.overlapsWith(naruTo)) {
        info.changeLifeBy(-1)
        deathEnding1()
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, naruTo)
})
function level21 () {
    game.showLongText("An invisible maze follow the globes to beat it", DialogLayout.Bottom)
    tiles.setTilemap(tilemap`level31`)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.dummy, function (sprite, otherSprite) {
    if (Rasen_Shuriken.overlapsWith(extraPoints)) {
        extraPoints.destroy()
        info.changeScoreBy(20)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    painBoss.destroy(effects.clouds, 500)
    narutoLvl2()
})
function startFight () {
    tiles.setTilemap(tilemap`level16`)
    painBoss = sprites.create(assets.image`Pain`, SpriteKind.boss)
    statusbar = statusbars.create(15, 4, StatusBarKind.EnemyHealth)
    music.playMelody("A F E F D G E F ", 120)
    extraPoints = sprites.create(img`
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . 1 1 1 1 1 1 . . . . . 
        . . . . . 1 f 1 1 f 1 . . . . . 
        . . . . . 1 1 f f 1 1 . . . . . 
        . . . . . a a 2 2 a a . . . . . 
        . . . a a a 2 2 2 2 a a a . . . 
        . . a a . . 2 2 2 2 . . a a . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . 8 8 8 8 8 8 . . . . . 
        `, SpriteKind.dummy)
    painBoss.follow(naruTo, 40)
    statusbar.value = 5
    statusbar.attachToSprite(painBoss, 0, 0)
}
function level23 () {
    tiles.setTilemap(tilemap`level33`)
    music.playMelody("E D G F B A C5 B ", 120)
    madaraBoss = sprites.create(assets.image`madara`, SpriteKind.bossss)
    madHealth = statusbars.create(20, 4, StatusBarKind.MadaraHealt)
    madaraBoss.follow(naruTo, 40)
    madHealth.value = 5
    madHealth.attachToSprite(madaraBoss, 0, 0)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.bossss, function (sprite, otherSprite) {
    if (Rasen_Shuriken.overlapsWith(madaraBoss)) {
        madHealth.value += -1
        info.changeScoreBy(20)
    }
    Rasen_Shuriken.destroy()
})
function deathEnding1 () {
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222222222ff2222222222222222222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222f2f2222222222222222222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222ff2222222222222222222222222222222222222ff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222ff222222222222222fff2222222222222222222ff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222f2222222222222f2f22222222222ffff222f222222222222222222f2f222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222f222222222222ff222222222222222222f2f22222222222222222f22f22222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222f22222222222ff22222222222222222f222f2222222222222222f22f22222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222f2222222222f2222222222222222ff2222f2222222222222222f222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222ff2222222ff222222222222222f222222f2222222222222222f2222f222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222f22222ff222222222222222f2222222f2222222222222222f22222f22222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222f222f2f2222222222222ff22222222f2222222222222222f222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222f2f22f222222222222f2222222222f2222f22222222222f2222222f222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222f22f222222222222f22222222222f2222f22222222222f22222222f22222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222f222222222222f22222222222f22222f2222222222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222f222222222222f22222222222f22222f222222222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222f2222222222222f22222222222f222222f22222222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222f22222222222222f2222222222f2222222f222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222f22222222222222f2222222222f2222222f22222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222f222222222222222f2222222222f22222222f2222f22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222f2222222222222222f22222222f222222222f222f222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        22222222222222222222222222222f2222222222222222f2222222f22222222222f2f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222f22222222222222222f2222222f222222222222ff2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222f22222222222222222f222222f2222222222222222222222222222222222222222222222222222222222222f22222222222222222222222222222222222222222222
        2222222222222222222222222222f222222222222222222f2222f22222222222222222222222222222222222222222222222222222222222222f22222222222222222222222222222222222222222222
        222222222222222222222222222f22222222222222222222ff22f22222222222222222222222222222222222222222222222222222ff2222222f22222222222222222222222222222222222222222222
        222222222222222222222222222f2222222222222222222222ff22222222222222222222222222222222222222222222222222ffff222222222f22222222222222222222222222222222222222222222
        222222222222222222222222222f22222222222222222222222222222222222222222222222222222222222ffff222222222ff2222222222222f22222222222222222222222222222222222222222222
        22222222222222222222222222f222222222222222222222222222222222222222222222222222222222222222f22222222f2222222222222222f2222222222222222222222222222222222222222222
        22222222222222222222222222f2222222222222222222222222222222222222222222222222222222222222222f222222f22222222222222222f2222222222222222222222222222222222222222222
        22222222222222222222222222f2222222222222222222222222222222222222222222f222222222222222222f2f22222f222222222222222222f222222222222222ffff222222222222222222222222
        22222222222222222222222222f2222222222222222222222222222222222222222222f22222222222222222f222f222f222222f222222222222fffffff2ffffffff2222222222222222222222222222
        2222222222222222222222222f22222222222222222222222222222222222222222222f22222222222222222f222f22f22222222ffffffffffffff22ffff222222222222222222222222222222222222
        2222222222222222222222222f222222222222222222222222222222222222222222222f2222222222222222f222f2f2222222222222222222222f222222222222222222222222222222222222222222
        2222222222222222222222222f222222222222222222222222222222222222222222222f2222222222222222f222f22ff22222222222222222222f222222222222222222222222222222222222222222
        2222222222222222222222222f222222222222222222222222222222222222222222222f222222222222222f2222f2222ffff2222222222222222f222222222222222222222222222222222222222222
        222222222222222222222222f22222222222222222222222222222222222222222222222f22222222222222f2222f22222222fffff22222222222f222222222222222222222222222222222222222222
        22222222222222222222222f222222222222222222222222222222222222222222222222f222222222222222f22f2222222222222f222222222222f22222222222222222222222222222222222222222
        22222222222222222222222f2222222222222222222222222222222222222222222222222f22222222222222f2ff2f22222222222f222222222222f22222222222222222222222222222222222222222
        2222222222222222222222f22222222222222222222222222222222222222222222222222f22222222f222222f222f22222222222f222222222222f22222222222222222222222222222222222222222
        222222222222222222222f222222222222222222222222222222222222222222222222222f2222222f222222222222ff222222222f222222222222f22222222222222222222222222222222222222222
        222222222222222222222f2222222222222222222222222222222222222222222222222222f2222ff222222222222222ffffffffff2222222222222f2222222222222222222222222222222222222222
        22222222222222222222f22222222222222222222222222222222222222222222222222222f222f2222222222222222222222222222222222222222f2222222222222222222222222222222222222222
        2222222222222222222f222222222222222222222222222222222222222222222222222222f22f22222222222222222222222222222222222222222f2222222222222222222222222222222222222222
        2222222222222222222f2222222222222222222222222222222222222222222222222222222ff222222222222222222222222222222222222222222f2222222222222222222222222222222222222222
        222222222222222222f2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f2222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222f222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffff2222222222222222222222222222222222222222222222222222222
        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffff2222222222222222222222222222222222222222222222222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffff22222222222222222222222222222222222222ffff22222222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffff2222222222222222222222222222222222222fffffff22222
        2222222222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffff2222222222222222222222222222222222fffffffffff222
        222222222222222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffff2222222222222222222222222222222ffffffffffffffff
        222222222222222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffff222222222222222222222222222ffffffffffffffffff
        2222222222222fffff2222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222ffffffffffffffffffff
        22222222ffffffffffffffffff2222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222ffffffffffffffffffffff
        2222222fffffffffffffffffffffff22222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffff
        22222ffffffffffffffffffffffffffff22222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222fffffffffffffffffffffffff
        2222fffffffffffffffffffffffffffffff222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff2222fffffffffffffffffffffffffffffff
        222ffffffffffffffffffffffffffffffffff222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        2ffffffffffffffffffffffffffffffffffffff222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru right`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.reset()
})
function animeNaruto () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru throw`,
    100,
    false
    )
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, naruTo)
})
statusbars.onZero(StatusBarKind.MadaraHealt, function (status) {
    madaraBoss.destroy(effects.fire, 500)
    thanksEnding()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru down`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    level21()
})
function narutoLvl2 () {
    tiles.setTilemap(tilemap`level30`)
    game.showLongText("Good Job now its time for the second fight", DialogLayout.Bottom)
    game.showLongText("You are fighting in the great ninja war against madara uchiha beat him to win", DialogLayout.Full)
    game.showLongText("Go into the purple portal for the second level", DialogLayout.Bottom)
    music.playMelody("C5 E G C5 D B C E ", 120)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    if (Rasen_Shuriken.overlapsWith(painBoss)) {
        statusbar.value += -1
        info.changeScoreBy(3)
    }
    Rasen_Shuriken.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    effects.confetti.startScreenEffect(500)
    startLevel()
})
sprites.onOverlap(SpriteKind.bossss, SpriteKind.Player, function (sprite, otherSprite) {
    if (madaraBoss.overlapsWith(naruTo)) {
        info.changeLifeBy(-1)
        deathEnding1()
    }
})
function startLevel () {
    tiles.setTilemap(tilemap`level15`)
    music.spooky.loop()
    enemYs()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    level22()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.baDing.play()
    if (Rasen_Shuriken.overlapsWith(myEnemy)) {
        myEnemy.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
    if (Rasen_Shuriken.overlapsWith(enemy1)) {
        enemy1.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
    if (Rasen_Shuriken.overlapsWith(enemy6)) {
        enemy6.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
    if (Rasen_Shuriken.overlapsWith(enemy2)) {
        enemy2.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
    if (Rasen_Shuriken.overlapsWith(Enemy3)) {
        Enemy3.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
    if (Rasen_Shuriken.overlapsWith(enemy4)) {
        enemy4.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
    if (Rasen_Shuriken.overlapsWith(enemy7)) {
        enemy7.destroy(effects.confetti, 500)
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    effects.confetti.startScreenEffect(500)
    startFight()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    deathEnding1()
    music.powerDown.play()
})
function level22 () {
    tiles.setTilemap(tilemap`level32`)
    enemYs()
}
let madHealth: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let extraPoints: Sprite = null
let madaraBoss: Sprite = null
let painBoss: Sprite = null
let Rasen_Shuriken: Sprite = null
let enemy7: Sprite = null
let enemy6: Sprite = null
let myEnemy: Sprite = null
let enemy4: Sprite = null
let Enemy3: Sprite = null
let enemy2: Sprite = null
let enemy1: Sprite = null
let naruTo: Sprite = null
game.showLongText("Welcome to anime escape, In this game you will be teleported to three universes.", DialogLayout.Center)
naruTo = sprites.create(assets.image`Naruto`, SpriteKind.Player)
scene.cameraFollowSprite(naruTo)
game.showLongText("Please wait game is loading: Also When you attack please choose the direction your going and then press A", DialogLayout.Center)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddddd55555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddddddddddddddd5555555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddddddddddddddd555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddddddddddddd555555555555555dd5555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddddd555555ddd55555ddd5555555dd555dd5555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454ddddddddddddddd555555555d5555dd5dd555555d555dddd5555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddd555555555dd555d5555dd55555d55dd55d55555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddddddddddd454dddddddddddddd5555d5555dd555dd555dd55555d555555d555555ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddddddddddd4444dddddddddddddd55dddd555dd55555555dd55555d555555d5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddddddddd44555544dddddddddddd55555dd555dd5555555d555555ddd555dd5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddddd4444444dd4444444dddd555dd5555d55555ddddddddd5555555dddddd55555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddddd455555d4444d555554dd55555ddd5dd55555555ddddd5555555555555555555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddddcc4d55555555555555d4cc555555dddd55555555555555555555555555555555555555d5555ddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddddcc22445555555555554422cc55555555555555555555555555555555555555555555555555555555ddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddddcc2222222222222222222222cc555555555555555555555555555555555555555555555555555555dddddddddddddd55555ddddddddddddddddddddddddddddd
    ddddddddddddddddddd454dddddddddcc222442222222242222224422cc555555555555555555555555555555555555555555555555555555555555555ddd5555555dddddddddddddddddddddddddddd
    ddddddddddddddddddd454ddddddddac22244222242222422222224222ca55555555555555555555555555555555555555555555555555555ddddddddddd55555555dddddddddddddddddddddddddddd
    dddddddddddddddddd4444dddddddda2224422224422224222242224222adddddd5555ddddd555555555555555ddddddddddddddddddddddddddddddddd5555ddd55dd555ddddddddddddddddddddddd
    dddddddddddddddd44555544dddddaa2244222224222224222244222422aadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dd5d55d555555ddddddddddddddddddddd
    dddddddddddd4444444dd4444444da222442222442222242222242224222ad99999999999999999999999999999999999999999999999ddddddddddd55dd5555dd55dd555d55dddddddddddddddddddd
    ddddddddddd455555d4444d555554a224422222442222242222242224222a9999999999999999999999999999999999999999999999999999ddddd55555dddddd5555ddddd555ddddddddddddddddddd
    dddddddddcc4d55555555555555d4cc24422222422222242222244224422a999999999999999999999999999999999999999999999dddddddddddd5555555ddd55555555555555dddddddddddddddddd
    ddddddddcc22445555555555554422cc4422222422222242222244224422a99999999999999999999999999999999999999999ddddddddd5555555555555555555555555555555555555555ddddddddd
    dddddddcc2222222222222222222222cc422224422222242222244224422a99999999999999999999999999999999999999999999999dddddddd5555555555555555555555555555555555555ddddddd
    ddddddcc222442222222242222224422cc22224422222242222244224422a9999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddddddddddddddddddddd
    dddddac22244222242222522222225422ca2224422222242222244224422a99999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddddddddddd
    ddddda2224522224422225222242245222a2224422222242222244224422a9999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddddd
    ddddaa2245422224222225222244225422aa22442222224222224422422a9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddddd
    dddda222552222442222252222242255222a22442222224222224424422a99999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    dddda224542222442222252222242245222a2224222224422222422422c9999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddddd
    dddda224522222422222252222244225422a222422222442222442422c999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddddd
    dddda224522222422222252222244225422a4422422224222224444cc99999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddddd
    dddda224422224422222252222244224422acc22242244222244cccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddd
    dddda224422224422222242222244224422ac9cccccccccccccc99999229999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddddd
    dddda224422224422222242222244224422a99994444555d4999999999922229999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddd
    dddda224422224422222242222244224422a9999944444449999999999992992222999999999999999999999999999999999999999999999999999999999999999999999999999dddddddddddddddddd
    ddddda2244222442222224222224422422a999999944444999999999999992999992222229999999999999999999999999999999999999999999999999999999999999999999999ddddddddddddddddd
    ddddda2244222442222224222224424422a99999994d5d4999999999999999299999999992222222299999999999999999999999999999999999999999999999999999999999999ddddddddddddddddd
    ddddddc22442224222224422222422422c9999999945554999999999999999929999999999999999922222999999999999999999999999999999999999999999999999999999999ddddddddddddddddd
    dddddddc244222422222442222442422c9999999994d5d49999999999999999929999999999229999999929999999999999999999999999999999999999999999999999999999999dddddddddddddddd
    ddddddddcc44422422224222224444cc9999999999433349999999999999999992999999999292229999929999999999999999999999999999999999999999999999999999999999dddddddddddddddd
    dddddddddcccc22242244222244cccc999999999994d4d49999999999999999999299999999299992222929999999999999999999999999999999999999999999999999999999999dddddddddddddddd
    dddddddddddd9cccccccccccccc9999999999999994d4d499999999999999999999299999999299999992229999999999999999999999999999999999999999999999999999999999ddddddddddddddd
    dddddddddddd9994444555d49999999999999999994d3d499999999999999999999929999999299999999922229999999999999999999999999999999999999999999999999999999ddddddddddddddd
    dddddddddddd9999444444499999999999999999994ddd499999999999999999999299999999929999999929992229999999999999999999999999999999999999999999999999999ddddddddddddddd
    dddddddddddd9999944444999999999999999999994555499999999999999999999299999999929999999929999992299999999999999999999999999999999999999999999999999ddddddddddddddd
    dddddddddddd999994d5d49999999999999999999945554999999999999999999929999999999299999999929999999229999999999999999999999999999999999999999999999999dddddddddddddd
    ddddddddddd999999455549999999999999999999945d54999999999999999999929999999999929999999929999999992229222999999999999999999999999999999999999999999dddddddddddddd
    ddddddddddd9999994d5d49999999999999999999945d54999999999999999999299999999999929999999929999999922222299299999999999999999999999999999999999999999dddddddddddddd
    ddddddddddd999999933349999999999999999999945d54999999999999999999299999999999992999999992999222299999922929999999999999999999999999999999999999999dddddddddddddd
    ddddddddddd9999999d4d49999999999999999999945d549999999999999999929999999999999929999999222229999999999992229999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd9999999d4d499999999999999999999454549999999999999999929999999999999929999222929999999999999999922999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd9999994d3d499999999999999999999454549999999999999999299999999999999992999299929999999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd9999994ddd499999999999999999999454549999999999999999299999999999999992999299992999999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd9999994555499999999999999999999454d49999999999999992999999999999999999299299992999999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd9999994555499999999999999999999444d49999999999999929999999999999999999299299992999999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd99999945d5499999999999999999999999449999999999999929999999999999999999299299992999999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddddddddd99999945d54999999999999999999999999999999999999992999999999999999999999292229929999999999999999999999999999999999999999999999999999999999dddddddddddd
    ddddddddddd99999945d54999999999999999999999999999999999999992999999999999999999999299992229999999999999999999999999999999999992999999999999999999999dddddddddddd
    ddddddddddd99999945d54999999999999999999999999999999999999929999999999999999999999929999999999999999999999999999999999999999999299999999999999999999dddddddddddd
    ddddddddddd99999945454999999999999999999999999999999999999929999999999999999999999929999999999999999999999999999999999999999999299999999999999999999dddddddddddd
    ddddddddddd99999945454999999999999999999999999999999999999299999999999999999999999929999999999999999999999999999999999999999992299999999999999999999dddddddddddd
    ddddddddddd99999945454999999999999999999999999999999999999299999999999999999999999929999999999999999999999999999999999999992229999999999999999999999dddddddddddd
    ddddddddddd999999454d4999999999999999999999999999999999922999999999999999999999999929999999999999999999999999999999999922229999999999999999999999999dddddddddddd
    ddddddddddd999999444d4999999999999999999999999999999992299999999999999999999999999929999999999999999999999999999999922299999999999999999999999999999dddddddddddd
    ddddddddddd99999999944999999999999999999999999999999229999999999999999999999999999929999999999999999999999999999222299999999999999999999999999999999dddddddddddd
    dddddddddddd9999999999999999999999999999999999999992999999999999999999999999999999929999999999999999999999992222999999999999999999999999999999999999dddddddddddd
    dddddddddddd9999999999999999999999999999999999999229999999999999999999999999999999929999999999999999999922229999999999999999999999999999999999999999dddddddddddd
    dddddddddddd9999999999999999999999999999999999922999999999999999999999999999999999929999999999999999222299999999999999999999999999999999999999999999dddddddddddd
    dddddddddddd9999999999999999999999999999999992299999999999999999999999999999999999929999999999999222999999999999999999999999999999999999999999999999dddddddddddd
    dddddddddddd9999999999999999999999999999999929999999999999999999999999999999999999929999999992222999999999999999999999999999999999999999999999999999dddddddddddd
    ddddddddddddd999999999999999999999999999999999999999999999992222999999999999999999929999922229999999999999999999999999999999999999999999999999999999dddddddddddd
    ddddddddddddd999999999999999999999999999999999999999999922229999229999999999999999929222299999999999999999999999999999999999999999999999999999999999dddddddddddd
    ddddddddddddd999999999999999999999999999999999999999999929999999992299999999999922222999999999999999999999999999999999999999999999999999999999999999dddddddddddd
    ddddddddddddd999999999999999999999999999999999999999999929999999999922999922222299929999999999999999999999999999999999999999999999999999999999999999dddddddddddd
    ddddddddddddd999999999999999999999999999999999999999999992999999999922222299999999929999999999999999999999999999999999999999999999999999999999999999dddddddddddd
    dddddddddddddd99999999999999999999999999999999999999999992999922222299992299999999929999999999999999999999999999999999999999999999999999999999999999dddddddddddd
    dddddddddddddd9999999999999999999999999999999999999999999922229999999999992999999992999999999999999999999999999999999999999999999999999999999999999ddddddddddddd
    dddddddddddddd9999999999999999999999999999999999999999999999999999999999999229999992999999999999999999999999999999999999999999999999999999999999999ddddddddddddd
    dddddddddddddd9999999999999999999999999999999999999999999999999999999999999992299992999999999999999999999999999999999999999999999999999999999999999ddddddddddddd
    dddddddddddddd9999999999999999999999999999999999999999999999999999999999999999922992999999999999999999999999999999999999999999999999999999999999999ddddddddddddd
    ddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999222999999999999999999999999999999933333333339999999999999999999999ddddddddddddd
    ddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999299999999999999999999999999993333d5555555d4449999999999999999999ddddddddddddd
    ddddddddddddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993335555dddddd555553399999999999999999ddddddddddddd
    ddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993555ddddd55555dddd55549999999999999999ddddddddddddd
    dddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999355dd555d5555555d55dd5d4999999999999999ddddddddddddd
    dddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999993d5d55555d555ddddd555dd5499999999999999dddddddddddddd
    dddddddddddddddd99999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999935dd55555d3dddd3dd5555d5549999999999999dddddddddddddd
    ddddddddddddddddd99999999999999999999999999999999999999999ddd5555555dd9999999999999999999999999999999999993d5dd5555d3dddddd3d5555d5549999999999999dddddddddddddd
    dddddddddddddddddd999999999999999999999999999999999999999dd5555555555dd99999999999999999999999999999999999455ddddddd33dddd33d555dd5549999999999999dddddddddddddd
    dddddddddddddddddd99999999999999999999999999999999999999dd555555555555dd9999999999999999999999999999999999455dd555555333333ddddddd55b9999999999999dddddddddddddd
    ddddddddddddddddddd9999ddddddd99999999999999999999999999dd55555555555ddddd99999999999999999999999999999999455dd55555555d55555555dd5bb993333333333ddddddddddddddd
    ddddddddddddddddddddddddddddddddd9999999999999999999999ddd555ddd5555dd555ddd9999999999999999999999999999994d55ddd5555ddd5555555dd55b3333d5555555d444dddddddddddd
    ddddddddddddddddddddddd55555555ddd99999999999999999999dddd555d5dd555d555555dd999999999999999999999999999994455555dddddddd55555dd553335555dddddd5555533dddddddddd
    dddddddddddddddddddd5555555555555dd999999999999999ddddddddd555ddd555d5555555dd99999999999999999999999999999b4d555555555ddddddd5553555ddddd55555dddd5554ddddddddd
    ddddddddddddddddddd555555555555555dd99ddddddd99dddd5555555dddddd5555d5555555ddd9999999999999999999999999999b34dddd5555555555555d355dd555d5555555d55dd5d4dddddddd
    dddddddddddddddddd555555dd555555555ddd555555ddddd5555555555555555555d555d555ddddd999999999999999999999999993333333333ddddddddd53d5d55555d555ddddd555dd54dddddddd
    ddddddddddddddddd555555ddddd555555ddd555555555ddddddddddd55555555555dd55dd55d5555ddd999999999999999999993333d5555555d444555d55535dd55555d3dddd3dd5555d554ddddddd
    ddddddddddddddddd55555dd55ddd55555ddd5555555555ddddddddddd55555555555dddd555555555ddd999999999999999993335555dddddd5555533d5553d5dd5555d3dddddd3d5555d554ddddddd
    dddddddddddddddd555555dd555dd55555dd5555ddd5555dddddddddddd555555555555555555555555dddd999999999999993555ddddd55555dddd5554ddd455ddddddd33dddd33d555dd554ddddddd
    dddddddddddddddd555555dddd5dd55555dd555ddddd555dd5555dddddd55555555555555555555555ddd55ddddddddddddd355dd555d5555555d55dd5d4dd455dd555555333333ddddddd55bddddddd
    ddddddddd55555dd5555555dd55dd55555dd555555dd5555555555ddddd555555555555555555555555555555dddddddddd3d5d55555d555ddddd555dd54d3455dd55555555d55555555dd5bbddddddd
    dddddddd5555555dd555555555dd5555555dd55555dd55555555555dddd555555555555555555555555555555dddddddddd35dd55555d3dddd3dd5555d554e4d55ddd5555ddd5555555dd55bbddddddd
    ddddddd55555555dddd55555ddd555555555ddddddd555555d55555dddd555555555555555555555555555555555555ddd3d5dd5555d3dddddd3d5555d554d4455555dddddddd55555dd55d3bddddddd
    ddddddd5555ddd555ddddddddd555555555555dddd55555555d5555ddddddddddddddddddddddddddddddddddddddddddd455ddddddd33dddd33d555dd554ddb4d555555555ddddddd555d33bddddddd
    ddddddd555ddddd55555ddd555555555555555555555555555dd55dddddddddddddddddddddddddddddddddddddddddddd455dd555555333333ddddddd55bddb34dddd5555555555555dd533bddddddd
    ddddddd555d55dd555555555555555ddd555555555555555555dddd55555dddddddddddddddddddddddddddddddddddddd455dd55555555d55555555dd5bbdde3355dddddddddddddd5d55b3bddddddd
    dddddddd55555dd5555555555555dddddd555555555555555555dd555555dddddddddddddddddddddddddddddddddddddd4d55ddd5555ddd5555555dd55bbdde33d55d5555dd555d555333b3bddddddd
    dddddd5dd555dd5555555555555dd555ddd55555555555555555555555555555dddddddddddddddddddddddddddddddddd4455555dddddddd55555dd55d3bddde3ddd3d553d555d555d333bb3ddddddd
    dddddd55ddddd55555555555555d55555555555555555555555555555555555555dddddddddddddddddddddddddddddddddb4d555555555ddddddd555d33bddde43dd3ddd3dddd3ddddb3bbddddddddd
    dddddd555555555555555555555d55555555555555555555555555555555555555555555555ddddddddddddddddddddddddb34dddd5555555555555dd533bddde444b3ddd44ddd3ddd3bbb3ddddddddd
    ddddddd55555555555555555555ddddd55555555555555555555555555555555555555ddddddddddddddddddddddddddddde3355dddddddddddddd5d55b3bdddd444bbdddb4ddd4dd3ee3ddddddddddd
    ddddddddd55555555555555555555ddddddddddddddddddddd555555ddddddddddddddddddddddddddddddddddddddddddde33d55d5555dd555d555333b3bddddddd4e33dbbdd4444eeddddddddddddd
    `)
music.playMelody("B A G A G F A C5 ", 120)
game.showLongText("In Each level there is a secret object you have to hit, Hit that object with your attack and get bonus points", DialogLayout.Center)
info.setScore(0)
info.setLife(1)
controller.moveSprite(naruTo)
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666656666666665666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666656656665565566666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666655555555555555666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666655555555555555666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666655dd5555555555666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666665ddddddddddd55666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddd556666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666dd444ddd444dd6666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ddd444d444ddd6666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666ddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666dddfffffddd66666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666ddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddd666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666dddddddddd666666666666666666666666666666666636666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666dddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666dddddddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666dddd6ddddddddddd6dddd666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666ddd66ddddddddddd66ddd666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666ddd66ddddddddddd66ddd666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666616666666666666666666666666666666666666666ddddddddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666661116666666666666666666666666666666666666666dddddddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666611166666666666666666666666666666666666666666ddddddddddddddddd66666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666667711177666666666666666666666666666666666666666ddddddddddddddddd66666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666777717777666666666666666666666666666666666666666ddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666611177777111666666666666666666666666666666666666dddd88888888888dddd6666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666661117771116666666666666666666666666666666666666dddd88888888888dddd6666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666667ff777ff76666666666666666666666666666666666666ddddddddddddddddddd6666666666666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666667f47774f7666666666666666666666666666666666666666ddddddddddddddd666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666677777777766666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666677711177766666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeee66666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666677717776666666666666666666666666666666666666666666666eeee66666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666ccccccccc666666666666666666666666666666666666666666666eeee66666666666666666666666666666666666666666666666666666666e666666666ee666666666
    6666666666666666666666666cccccccccc66666666666666666666666666666666666666666666eeeee666666666666666666666666666666666666666666666666666666eee66666666eee66666666
    666666666666666666666666ccccccccccc66666666666666666666666666666666666666666666eeeee666666666666666666666666666666666666666666666666666666eee6666666eeeee6666666
    666666666666666666666666cccccccccccc6666666666666666666666666666666666666666666eeeeee66666666666666666666666666666666666666666666666666666eeee666666eeeee6666666
    666666666666666666666666cccccccccccc6666666666666666666666666666666666666666666eeeeee66666666666666666666666666666666666666666666666666666eeee666666eeeee6666666
    66666666666666666666666cccccccccccccc66666666666666666666666666666666666666666eeeeeeee6666666666666666666666666666666666666666666666666666eeeee66666eeeeee666666
    66666666666666666666666cccccccccccccc66666666666666666666666666666666666666666eeeeeeee666666666666666666666666666666666666666666666666ee66eeeee66666eeeeee666666
    66666666666666666666666cccccccccccccc66666666666666666666666666666666666666666eeeeeeee66666666666666666666666666666666666666666666666eee66eeeeee666eeeeeeee66666
    66666666666666666666666cccccccccccccc66666666666666666666666666666666666666666eeeeeeee66666666666666666666666666666666666666666666666eee66eeeeeee66eeeeeeee66666
    66666666666666666666666cccccccccccccc6666666666666666666666666666666666666666eeeeeeeeee666666666666666666666666666666666666666666666eeeee6eeeeeee66eeeeeeee66666
    6666666666666666666666eeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666666666eeeeeeeeee66666666666666666666666666666666666666666666eeeeee6eeeeeeee6eeeeeeee66666
    6666666666666666666666eeeeeeeeeeeeeeeeeeeeee6e6666666666666666666666666666666eeeeeeeeee66666666666666666666666666666666666666666666eeeeee6eeeeeeee6eeeeeeeee6666
    66666666666666666666666666666666666ee6666666666666666666666666666666666666666eeeeeeeeee6666666666666666666666666666666666666666666eeeeeee6eeeeeeeeeeeeeeeeee6666
    66666666666666666666666666666666666ee6666666666666666666666666666666666666666eeeeeeeeee6666666666666666666666666666666666666666666eeeeeee6eeeeeeeeeeeeeeeeee6666
    6666666666666666666666666666666666eee6666666666666666666666666666666666666666eeeeeeeeee6666666666666666666666666666666666666666666eeeeeee6eeeeeeeeeeeeeeeeee6666
    6666666666666666666666666666666666eee6666666666666666666666666666666666666666eeeeeeeeeee666666666666666666666666666666666666666666eeeeeee6eeeeeeeeeeeeeeeeeee666
    6666666666666666666666666666666666eee66666666666666666666666e6666666666666666eeeeeeeeeee6666666666666666666666666666e666666666666eeeeeeee6eeeeeeeeeeeeeeeeeee666
    66666666666ee66666666666666666666eeee6666666666666666666666eee666666666666666eeeeeeeeeee6666666666666666666666666666e666666666666eeeeeeee6eeeeeeeeeeeeeeeeeee666
    66666666666ee66666666666666666666eeee6666666666666666666666eee666666666666666eeeeeeeeeee6666666666666666666666666666e666666666666eeeeeeee6eeeeeeeeeeeeeeeeeeee66
    66666666666ee66666666666666666666eeee666666666666666666666eeee666666666666666eeeeeeeeeee6666666666666666666666666666ee6666666666eeeeeeeee6eeeeeeeeeeeeeeeeeeee66
    6666666666eeee6666666666666666666eeee666666666666666666666eeeee66666666666666eeeeeeeeeee6666666666666666666666666666ee6666666666eeeeeeeee6eeeeeeeeeeeeeeeeeeee66
    6666666666eeee666666666666666666eeeeee66666666666666666666eeeeee6666666666666eeeeeeeeeeee66666666666666666666666666eeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666666eeee666666666666666666eeeeee66666666666666666666eeeeee6666666666666eeeeeeeeeeee66666666666666666666666666eeee666666666eeeeeeeeee.eeeeeeeeeeeeeeeeeeeee
    666666666eeeee666666666666666666eeeeee66666666666666666666eeeeee6666666666666eeeeeeeeeeee6666666666666666666666666eeeee66666666eeeeeeeeeee.eeeeeeeeeeeeeeeeeeeee
    66666666eeeeee666666666666666666eeeeee66666666666666666666eeeeee6666666666666eeeeeeeeeeee6666666666666666666666666eeeee66666666eeeeeeeeeee.eeeeeeeeeeeeeeeeeeeee
    66666666eeeeeee66666666666666666eeeeee6666666666666666666eeeeeeee666666666666eeeeeeeeeeee6666666666666666666666666eeeee66666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666eeeeeeee6666666666666666eeeeeee6666666666666666666eeeeeeeee66666666666eeeeeeeeeeee6666666666666666666666666eeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666eeeeeeee6666666666666666eeeeeee6666666666666666666eeeeeeeee66666666666eeeeeeeeeeeee666666666666666666666666eeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666eeeeeeee6666666666666666eeeeeee666666666666666666eeeeeeeeee66666666666eeeeeeeeeeeee666666666666666666666666eeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666eeeeeeee6666666666666666eeeeeee666666666666666666eeeeeeeeeee6666666666eeeeeeeeeeeee666666666666666666666666eeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666eeeeeeee666666666666666eeeeeeee666666666666666666eeeeeeeeeee6666666666eeeeeeeeeeeee666666666666666666666666eeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666eeeeeeeee66666666666666eeeeeeeee666666666666666666eeeeeeeeeee666666666eeeeeeeeeeeeeee6666666666666666666666eeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666eeeeeeeee66666666666666eeeeeeeeee6666666666666666eeeeeeeeeeeee66666666eeeeeeeeeeeeeee6666666666666666666666eeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeee66666666666666eeeeeeeeee6666666666666666eeeeeeeeeeeee66666666eeeeeeeeeeeeeee6666666666666666666666eeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeee66666666666666eeeeeeeeee6666666666666666eeeeeeeeeeeee66666666eeeeeeeeeeeeeeee66666666666666666666eeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeee6666666666666eeeeeeeeeee6666666666666666eeeeeeeeeeeeee6666666eeeeeeeeeeeeeeee6666666666666666666eeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666eeeeeeeeeee6666666666666eeeeeeeeeee6666666666666666eeeeeeeeeeeeee666666eeeeeeeeeeeeeeeee6666666666666666666eeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeee666666666666eeeeeeeeeeeee66666666666666eeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeee6666666666666666666eeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeee666666666666eeeeeeeeeeeee66666666666666eeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeee666666666666666666eeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeee66666666666eeeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeee66666666666666666eeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeee66666666666eeeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeee66666666666666666eeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeee6666666666eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeee66666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6eeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeee666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6eeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeee666666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6eeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeee66666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeee66666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
game.splash("Hi my name is Uzumaki Naruto", " Welcome to my universe")
game.showLongText("I am at mount Myaboku training for sage mode, will geezer sage ", DialogLayout.Center)
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeee77777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeee7777777777777777777777b777bbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeee7777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeee7777e7777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeee777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeee77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeee77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeee77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ee777777ee777777777777777777eeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ee7777777777777777777777777eeeeeebbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    77777777777777777777777777eeeeeeebbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    77777777777777777777777888eeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    777777777777777777777888888eeeeeeebbbbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    777777777777777777777888888eeeeeeebbbbbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    777777777777777777888888888eeeeeeeebbbbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffbbbbbbbbbbbbbbbbbbbbbbbb
    7777777777777777788888888888eeeeeeebbbbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbb
    7777777777777777788888888888eeeeeeebbbeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44bbb44444bbbb444bbbbbbbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbb
    77777777777777777888888888888eeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444b4444444444444bbbbbbbbbbbbbbbbbbbbbbfffffdddddbbbbbbbbbbbbbbbbbbb
    77777777777777777888888888888eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4b4444444444444444444bbbbbbbbbbbbbbbbbbbfffffdddddddbbbbbbbbbbbbbbbbbb
    7777777777777b777888888888888eeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbbbbbbbbbbbfffffffddddddbbbbbbbbbbbbbbbbbb
    777777777777bbf88888888888888eeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbbbbbbbbbfffffffffddddddbbbbbbbbbbbbbbbbbb
    777777777777bbf888888888888888eeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbbbbbbbbfffffffffffdddddbbbbbbbbbbbbbbbbbb
    77777777bbbbbbf8888888888888888eeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44444444444444444444444bbbbbbbbbbbbbffffffffffffdddddbbbbbbbbbbbbbbbbbb
    77777777bbbbbbbf888888888888888eeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbbbbbfffffffffffffdddddbbbbbbbbbbbbbbbbbb
    77777777bbbbbbbf888888888888888eeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbbbbbffffffffffffdddbbbbbbbbbbbbbbbbbbbbb
    bb777777bbbbbbbbf888888888888888eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44444444444444444444444bbbbbbbbbbffffffffffffffbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbf888888888888888eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44444444444444444444444bbbbbbbbbfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbf8888888888888888eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb44444444444444444444444bbbbbbbbbfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbf888888888888888eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbbffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbf88888888888888ffeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbbff2ffffffffffffffbbbbbbbbbbbbbbbbbbbbbee
    bbbbbbbbbbbbbbbbbbf88888888888ff66eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444444bbbbbbbff22ffffffffffffffbbbbbbbbbbbbbbbbbbbeeee
    bbbbbbbbbbbbbbbbbbf888888888ff6666eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444444bbbbbbbbf222ffffffffffffffbbbbbbbbbbbbbbbbbeeeeee
    bbbbbbbbbbbbbbbbbbf8888888ff6666666eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444444bbbbbbbff22ffffffffffffffbbbbbbbbbbbbbbbbeeeeeeee
    bbbbbbbbbbbbbbbbbbbf8888ff666666666eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444444fbbbbbbff222ffffffffffffffbbbbbbbbbbbbbbeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbfffff66666666666eeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444444444ffffbbbff222ffffffffffffffbbbbbbbbbbbbbeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbf666666666666666eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4444444444444444ffffffffff22ffffffffffffffbbbbbbbbbbbeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbf666666666666666eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444444444444ffffffffffff222fffffffffffffbbbbbbbbbbeeeeeeeeeeeeeeeee
    bbbbbbbbbbbbbbbbbbbbf6666666666666666eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffff222fffffffffffbbbbbbbbbbbeeeeeeeeeeeeeeeeebb
    bbbbbbbbbbbbbbbbbbbbbf666666666666666eeeeeeebbbbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffff2222fffffffffbbbbbbbbbbbbeeeeeeeeeeeeeeeeebbbb
    bbbbbbbbbbbbbbbbbbbbbf666666666666666eeeeeeeebbbbbbbbbbbbbbbbbbffffffffffffffffffbbbbbbbbbbbbffffffffffffffffffff22222ffffffbbbbbbbbbbbbbeeeeeeeeeeeeeeeeebbbbbb
    bbbbbbbbbbbbbbbbbbbbbbf666666666666666eeeeeeebbbbbbbbbbbbbbbbbbfffffffffffffffffffffffbbbbbffffffffffffffffffffff2222ffffbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeebbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbf66666666666666feeeeeeebbbbbbbbbbbbbbddddffffffffffffffffffffffffffffffffffffffffffffffffff2222ffffbbbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbf666666666666ffaaeeeeeeebbbbbbbbbbbbdddddffffffffffffffffffffffffffffffffffffffffffffffffff222fffffbbbbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbf666666666ffaaaaeeeeeeebbbbbbbbbbbbdddddffffffffffffffffffffffffffffffffffffffffffffffffff22fffffffbbbbbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbf66666666faaaaaaeeeeeeeebbbbbbbbbbbddddddffffffffffffffffffff222222222222222fffffffffffffffffffffffffbbeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbf66666ffaaaaaaaaeeeeeeebbbbbbbbbbbddddddffffffffffffffffffff2222222222222222222ffffffffffffffffffffffeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbf666ffaaaaaaaaaaeeeeeeebbbbbbbbbbbbddddddffffffffffffffffff2222222222222222222222fffffffffffffffffffffeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbf6ffaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbfffffffffffffffffff22222222222222222222222fffffffffffffffffffffeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbffffffffffffffffffff2222222222222222222222fffffffffffffffffffffeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeeebbbbbbbbbbbbbbbffffffffffffffffffffffffff2222222222222222ffffffffffffffffffffffeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbbffffffffffffffffffffffffff22222222222ffffffffffffffffffffffffffeebbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffff22222ffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaaaeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffff222ffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaaafeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffff222222222ffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaaaaff22eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffff22222222222ffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaaaff2222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffff2222222222222fffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaaaaff222222eeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffff2222222222222222ffffffffbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaaaff222222222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffff22222222222222222fffffffffbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfaaff22222222222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeffffffffffffffffff222222222222222222fffffffffbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfaf22222222222222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeefffffffffffffffff22222222222222222222ffffffffbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222222222222222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeffffffffffffffffff222222222222222222ffffffffbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222222222222222eeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeefffffffffffffffffff222222222222222222ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222222222222222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeffffffffffffffffffff222222222222fffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222222222222222eeeeeeebbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeefffffffffffffffffffff22222fffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222222222222222feeeeeeebbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222222222222ffceeeeeeebbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf22222222222fccceeeeeeeebbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf22222222ffccccceeeeeeebbbbbbbbbbbbbeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf2222222fccccccceeeeeeebbbbbbbbbbbeeeeeeeeeeeeeeeeeebbfffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf22222ffccccccccceeeeeeebbbbbbbeeeeeeeeeeeeeeeeeeebbbbffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf222fccccccccccceeeeeeebbbbbeeeeeeeeeeeeeeeeeeebbbbbfffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf2ffcccccccccccceeeeeeeebbeeeeeeeeeeeeeeeeeeebbbbbbbfffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccceeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccccccccceeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccccceeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbfffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccccceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbfffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcccccccccccceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbfffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccccceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccccceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfccccceeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfcceeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbdbbbbbbbddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
game.splash("I am Pain, I am God: I am looking for ", "The Nine tails")
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeee7777777111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeee777777777711111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeee7777777777777711111111111111177777777777777777777777777777777777777777eeeeee7777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeee7777777777777777771111111111111111177777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777
    eeeeeeee77777777777777777777711111111111111111117777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777
    eee777777777777777777777777711111111111111111111177777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777
    7777777777777777777711111111111111111111111111111777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777
    77777777777777777711111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777
    77777777777777777111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777
    77777777777777771111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777
    77777777777777711111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777
    77777777777777111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777
    77777777777777111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777
    77777777777771111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777
    77777777777771111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777
    777777777777711111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777
    7777777777777111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777
    77777777777771111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777
    777777777777711111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777
    7777777777777111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777
    7777777777777111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777
    77777777777771111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777
    77777777777777111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777
    77777777777777111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777
    77777777777777711111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2f2ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777
    77777777777777771111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff2feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777
    77777777777777711111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777
    77777777777777111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777
    77777777777771111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeee44444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777
    77777777777771111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777
    7777777777771111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777
    7777777777711111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeee4444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777
    777777777771111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeee444444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777
    77777777777111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777
    777777777771111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeee2f2ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777
    7777777777711111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeffff2feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777
    77777777777111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777
    77777777777111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777
    777777777771111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777
    777777777771111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777
    7777777777711111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777
    7777777777711111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777
    7777777777771111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777
    7777777777777111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777
    7777777777777111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777
    7777777777777711111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777
    7777777777777771111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777
    7777777777777777711111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777
    7777777777777777771111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777
    7777777777777777777777777777711111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777
    7777777777777777777777777777777717111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777
    777777777777777777777777777777777111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777
    777777777777777777777777777777777111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777
    77777777777777777777777777777777771111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777
    77777777777777777777777777777777771111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777111111111111111111111117eeee77eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777771111111111111111111117777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777111111111111111111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777771111111111111117777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777711111111111777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.splash("Are you Looking for Me!")
tiles.setTilemap(tilemap`level3`)
