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
    enemy1.follow(naruTo, randint(5, 50))
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
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animeNaruto()
    Rasen_Shuriken = sprites.createProjectileFromSprite(assets.image`Rasen Shuriken`, naruTo, 100, 0)
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
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, naruTo)
})
function startFight () {
    tiles.setTilemap(tilemap`level16`)
    painBoss = sprites.create(assets.image`Pain`, SpriteKind.Enemy)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru right`,
    200,
    true
    )
})
function animeNaruto () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru throw`,
    100,
    false
    )
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.powerDown.play()
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, naruTo)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru down`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    effects.confetti.startScreenEffect(500)
    if (true) {
        startLevel()
    }
})
function startLevel () {
    tiles.setTilemap(tilemap`level15`)
    enemYs()
}
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
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    effects.confetti.startScreenEffect(500)
    if (true) {
        startFight()
    }
})
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
naruTo = sprites.create(assets.image`Naruto`, SpriteKind.Player)
scene.cameraFollowSprite(naruTo)
music.playMelody("C5 B A G F E D C ", 120)
info.setScore(0)
info.setLife(3)
controller.moveSprite(naruTo)
game.showLongText("Welcome to anime escape, In this game you will be teleported to three universes.", DialogLayout.Center)
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
