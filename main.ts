controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        .........................
        ..............9899999899.
        9989.........989998999699
        96999.......9999699696896
        999999......9699999999699
        999699.....99998969689999
        6989999....699999699.....
        9999996...99969999.......
        .6989999..9888869........
        .99996999989999899998....
        ..9999969899889989899....
        ..999999989899898999999..
        ...869969898999986969999.
        ....999898998899899989989
        ......9999899998999999669
        .........9988889968999999
        ........99999999.99998969
        ..99999999996698..9699999
        .999698999699999...989989
        .989999999999969...999999
        ..9996999969999....999969
        ..999998999998......98999
        ...9999998999.......99999
        ....8.................99.
        .........................
        `, mySprite, 50, 50)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Naruto`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
let mySprite2 = sprites.create(assets.image`Tanjiro`, SpriteKind.Player)
let mySprite3 = sprites.create(assets.image`Pain`, SpriteKind.Projectile)
mySprite2.setPosition(128, 84)
