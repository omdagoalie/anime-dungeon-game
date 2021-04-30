controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animeNaruto()
    Rasen_Shuriken = sprites.createProjectileFromSprite(img`
        ................999......
        ..............999899.....
        ............99996969.....
        ...........899989999.....
        ..........999999999......
        .999.....99969899........
        99999...999999999........
        99899..99899969998.......
        9999999999999999999......
        .9999999998888899999.....
        .96999969899999899999....
        ..99989998989898998999...
        ..999999989999989999969..
        ...96999989898989998999..
        ....99999899999899989999.
        .....9999988888996999999.
        ......9989999999999999989
        .......99999999999..99999
        ........999998969...99699
        ........99699999.....999.
        ......999999999..........
        .....999999999...........
        .....69989989............
        .....999999..............
        ......999................
        `, naruTo, 100, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Left naru run`,
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
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Right naru run`,
    200,
    true
    )
})
function animeNaruto () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`Naru throw`,
    200,
    false
    )
}
let Rasen_Shuriken: Sprite = null
let naruTo: Sprite = null
game.showLongText("Welcome to anime escape, In this game you will be teleported to three universes.", DialogLayout.Center)
scene.setBackgroundImage(assets.image`Naruto training`)
game.splash("Hi my name is Uzumaki Naruto", " Welcome to my universe")
game.showLongText("I am at mount Myaboku training for sage mode, will geezer sage ", DialogLayout.Center)
tiles.setTilemap(tilemap`level1`)
naruTo = sprites.create(assets.image`Naruto`, SpriteKind.Player)
controller.moveSprite(naruTo)
scene.cameraFollowSprite(naruTo)
