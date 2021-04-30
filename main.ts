controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animeNaruto()
    Rasen_Shuriken = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, naruTo, 100, 0)
})
function animeNaruto () {
    animation.runImageAnimation(
    naruTo,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
}
let Rasen_Shuriken: Sprite = null
let naruTo: Sprite = null
game.showLongText("Welcome to anime escape, In this game you will be teleported to three universes.", DialogLayout.Center)
game.splash("Hi my name is Uzumaki Naruto", " Welcome to my universe")
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666669999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666699999999966669999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666999999999996699999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6669999999999999999999999999999666666666666666666666666666666666666666666666666666666665565666666666666666666666666666666666666666666666666666666666666666666666
    6669999999999999911111111119999966666666666666666666666666666666666666666666666666666655555566666666666666666666666666666666666666666666666666666666666666666666
    6669999999999999999991111119999966666666666666666666666666666666666666666666666666666655555566666666666666666666666666666666666666666666666666666666666666666666
    6669999999999999999999991111999966666666666666666666666666666666666666666666666666666655555555555666666666666666666666666666666666666666666666666666666666666666
    6669999999999999999999991111999966666666666666666666666666666666666666666666666666666555555555555566666666666666666666666666666666666666666666666666666666666666
    6669999999999999999999999111999966666666666666666666666666666666666666666666666666666555555555555556666666666666666666666666666666666666666666666666666666666666
    666999999999999999999999991199996666666666666666666666666666666666666666666666666666655555dddd555556666666666666666666666666666666666666666666666666666666666666
    6666999999999999999999999999999966666666666666666666666666666666666666666666666666666555dddddddddd56666666666666666666666666666666666666666666666666666666666666
    666669999999999999999999999999966666666666666666666666666666666666666666666666666666655ddddddddddd56666666666666666666666666666666666666666666666666666666666666
    666666999999999999999999996666666666666666666666666666666666666666666666666666666666665dd44ddddd44d6666666666666666666666666666666666666666666666666666666666666
    66666669999999996666666666666666666666666666666666666666666666666666666666666666666666ddd444ddd444dd666666666666666666666666666666666666666666666666666666666666
    666666669999999666666666666666666166666666666666666666666666666666666666666666666666666dddd4ddd4dddd666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666611666666666666666666666666666666666666666666666666666666dddddddddddd666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666661166666666666666666666666666666666666666666666666666666ddddfdffddddd666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666661166666666666666666666666666666666666666666666666666666666dfffdddd66666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666671117666666666666666666666666666666666666666666666666666666ddddddddd6666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666666777111777666666666666666666666666666666666666666666666666666dddddddddd6666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666677777111777766666666666666666666666666666666666666666666666666dddddddddd6666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666667777777777777666666666666666666666666666666666666666666666666ddddddddddddd666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666111111177777777771111666666666666666666666666666666666666666666dddddddddddddddd6666666666666666666666666666666666666666666666666666666666
    66666666666666666666661111111117777111111111666666666666666666666666666666666666666666dd66ddddddddddddd666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666777711777117776666666666666666666666666666666666666666666666ddddddddddddd666dd66666666666666666666666666666666666666666666666666666666
    66666666666666666666666666a7777777777777a6666666666666666666666666666666666666666666666ddddddddddddddddd66666666666666666666666666666666666666666666666666666666
    66666666666666666666666666a7f4f77777f4f7a66666666666666666666666666666666666666666666666666dddddddddddd666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666a7f4f77777f4f7a66666666666666666666666666666666666666666666666666dddddddd6666666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666a7777777777777a66666666666666666666666666666666666666666668888888888888888886666666666666666666666666666666666666666666666666666666666
    66666666666666666666666666a7777777777777a66666666666666666666666666666666666666666668888888888888888888866666666666666666666666666666666666666666666666666666666
    6666666666666666666666666677777777777777766666666666666666666666666666666666666666668888888888888888888866666666666666666666666666666666666666666666666666666666
    6666666666666666666666666677777777777777766666666666666666666666666666666666666666668888888888888888888866666666666666666666666666666666666666666666666666666666
    666666666666666666666666667777fffffff777766666666666666666666666666666666666666666666888888888888888888666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666677777777777777766666666666666666666666666666666666666666666688888888888886666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666667777777177777776666666666666666666666666666666666666666666eeeeeeeeeeeeeeeeeeeeeeee6666666666666666666666666e66666666666666666666666666
    66666666666666666666666666b7777771777777b6666666666666666666666666666666666666666666666666666666ee6666666666666666666666666666666666eee6666666666666666666666666
    66666666666666666666666666bbb777717777bbb666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666eeee6666666666666666666666666
    66666666666666666666666666bbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666666eee666666666666666666666666666666666eeee666666ee66666666666666666
    66666666666666666666666666bbbbbbbbbbbbbbb66666666666666666666666666666666666666666666666666666eeee666666666666666666666666666666666eeeee66666eee6666666666666666
    6666666666666666666666666bbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666eeee666666666666666666666666666666666eeeee66666eeee666666666666666
    6666666666666666666666666bbbbbbbbbbbbbbbbb6666666666666666666666666666666666666666666666666666eeee6666666666666666666e6666666666666eeeee66666eeee666666666666666
    6666666666666666666666666bbbbbbbbbbbbbbbbb666666666666666666666666666666666666666666666666666eeeee6666666666666666666e6666666666666eeeeee6666eeeee66666666666666
    666666666666666666666eeebbbbbbbbbbbbbbbbbbbeee6666666666666666666666666666666666666666666666eeeeee6666666666666666666ee66666666666eeeeeee6666eeeeee6666666666666
    666666666e66666666666666666666666ee666666666666666666666666666666666666666666666666666666666eeeeee666666666666666666eee66666666666eeeeeeee666eeeeee6666666666666
    666666666e6666666666666666666666eee66666666666666666666666666666666666666666666666666666666eeeeeee666666666666666666eee66666666666eeeeeeee666eeeeeee666666666666
    666666666ee666666666666666666666eee66666666666666666666666666666666666666666666666666666666eeeeeee666666666666666666eeee6666666666eeeeeeee666eeeeeeee66666666666
    666666666ee666666666666666666666eee66666666666666666666666666666666666666666666666666666666eeeeeee66666666666666666eeeee666666666eeeeeeeee666eeeeeeee6666ee66666
    666666666ee666666666666666666666eee66666666666666666666666666666666666666666666666666666666eeeeeee66666666666666666eeeeee66666666eeeeeeeeee66eeeeeeeee666ee66666
    66666666eee666666666666666666666eeee666666666666666666666666666666666666666666666666666666eeeeeeee66666666666666666eeeeee66666666eeeeeeeeee66eeeeeeeee666eee6666
    66666666eeee66666666666666666666eeeee66666666666666666666666666666666666666666666666666666eeeeeeee66666666666666666eeeeeee6666666eeeeeeeeee66eeeeeeeee666eee6666
    66666666eeee66666666666666666666eeeee66666666666666666666666666666666666666666666666666666eeeeeeee66666666666666666eeeeeee6666666eeeeeeeeeee6eeeeeeeee666eee6666
    66666666eeee66666666666666666666eeeeee666666666666666666666666666666666666666666666666666eeeeeeeee6666666666666666eeeeeeeee66666eeeeeeeeeeee6eeeeeeeeee6eeeee666
    6666666eeeeee6666666666666666666eeeeee666666666666666666666666666666666666666666666666666eeeeeeeee6666666666666666eeeeeeeee66666eeeeeeeeeeee6eeeeeeeeee6eeeee666
    6666666eeeeee6666666666666666666eeeeee666666666666666666666666666666666666666666666666666eeeeeeeee6666666666666666eeeeeeeee66666eeeeeeeeeeee6eeeeeeeeee6eeeee666
    6666666eeeeeee666666666666666666eeeeee666666666666666666666666666666666666666666666666666eeeeeeeee6666666666666666eeeeeeeee66666eeeeeeeeeeee6eeeeeeeeeeeeeeeee66
    6666666eeeeeee666666666666666666eeeeeee6666666666666666666666666666666666666666666666666eeeeeeeeee6666666666666666eeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66
    6666666eeeeeee666666666666666666eeeeeee6666666666666666666666666666666666666666666666666eeeeeeeeee6666666666666666eeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666eeeeeee666666666666666666eeeeeeee666666666666666666666666666666666666666666666666eeeeeeeeee666666666666666eeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666666eeeeeee66666666666666666eeeeeeeee66666666666666666666666666666666666666666666666eeeeeeeeeee666666666666666eeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666eeeeeeeee666666666666666eeeeeeeeeee6666666666666666666666666666666666666666666666eeeeeeeeeeee66666666666666eeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666eeeeeeeee666666666666666eeeeeeeeeee6666666666666666666666666666666666666666666666eeeeeeeeeeee66666666666666eeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666666eeeeeeeeee66666666666666eeeeeeeeeee6666666666666666666666666666666666666666666666eeeeeeeeeeee6666666666666eeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeeee66666666666666eeeeeeeeeee666666666666666666666666666666666666666666666eeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeeee66666666666666eeeeeeeeeee666666666666666666666666666666666666666666666eeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeeee66666666666666eeeeeeeeeee66666666666666666666666ee6666666666666666666eeeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeeeee6666666666666eeeeeeeeeee66666666666666666666666ee6666666666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66666eeeeeeeeeeee6666666666666eeeeeeeeeee66666666666666666666666ee6666666666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666eeeeeeeeeeeee666666666666eeeeeeeeeeee66666666666666666666666ee6666666666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666eeeeeeeeeeeee666666666666eeeeeeeeeeee6666666666666666666666eeee666666666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666eeeeeeeeeeeee666666666666eeeeeeeeeeee6666666666666666666666eeee666666666666666666eeeeeeeeeeeeee66666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6666eeeeeeeeeeeee666666666666eeeeeeeeeeee6666666666666666666666eeeee66666666666666666eeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeeeee666666666666eeeeeeeeeeee666666666666666666666eeeeee66666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeeeee666666666666eeeeeeeeeeee666666666666666666666eeeeee66666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeeeee666666666666eeeeeeeeeeee666666666666666666666eeeeee66666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeeeeee66666666666eeeeeeeeeeeee6666666666666666666eeeeeee66666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    666eeeeeeeeeeeeeee66666666666eeeeeeeeeeeee6666666666666666666eeeeeee66666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeee666666666666666666eeeeeeeee6666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeee666666666666666666eeeeeeeee6666666666666666eeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeee666666666666666666eeeeeeeee666666666666666eeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    66eeeeeeeeeeeeeeee6f666666666eeeeeeeeeeeeee66666666666666666eeeeeeeee666666666666666eeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    6eeeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeee6666666666666666eeeeeeeeeee66666666666666eeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeee6666666666666666eeeeeeeeeee66666666666666eeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeee666666666666666eeeeeeeeeeee66666666666666eeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeee666666666eeeeeeeeeeeeee666666666666666eeeeeeeeeeee66666666666666eeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeee666666666666666eeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeee66666666666666eeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee6666666666666eeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeee6666666666666eeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee666666666666eeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeee666666666666eeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeee66666eeeeeeeeeeeeeeee6666666666eeeeeeeeeeeeeeee66666666666eeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeee666666666eeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeee666eeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeee66666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeee6666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeee666666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeeee6666eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeee66eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
game.showLongText("I am at mount Myaboku training for sage mode, will geezer sage ", DialogLayout.Center)
naruTo = sprites.create(assets.image`Naruto`, SpriteKind.Player)
controller.moveSprite(naruTo)
scene.cameraFollowSprite(naruTo)
