controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animeNaruto()
    Rasen_Shuriken = sprites.createProjectileFromSprite(assets.image`rasen shuriken`, naruTo, 100, 0)
})
function animeNaruto () {
    animation.runImageAnimation(
    naruTo,
    assets.animation`naru throw`,
    200,
    false
    )
}
let Rasen_Shuriken: Sprite = null
let naruTo: Sprite = null
game.showLongText("Welcome to anime escape, In this game you will be teleported to three universes.", DialogLayout.Center)
tiles.setTilemap(tilemap`level2`)
naruTo = sprites.create(assets.image`Naruto`, SpriteKind.Player)
game.splash("Hi my name is Uzumaki Naruto", " Welcome to my universe")
controller.moveSprite(naruTo, 100, 100)
scene.cameraFollowSprite(naruTo)
