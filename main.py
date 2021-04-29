def on_a_pressed():
    global Rasen_Shuriken
    animeNaruto()
    Rasen_Shuriken = sprites.create_projectile_from_sprite(assets.image("""
        rasen shuriken
    """), naruTo, 100, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def animeNaruto():
    animation.run_image_animation(naruTo, assets.animation("""
        naru throw
    """), 200, False)
Rasen_Shuriken: Sprite = None
naruTo: Sprite = None
game.show_long_text("Welcome to anime escape, In this game you will be teleported to three universes.",
    DialogLayout.CENTER)
tiles.set_tilemap(tilemap("""
    level2
"""))
naruTo = sprites.create(assets.image("""
    Naruto
"""), SpriteKind.player)
game.splash("Hi my name is Uzumaki Naruto", " Welcome to my universe")
controller.move_sprite(naruTo, 100, 100)
scene.camera_follow_sprite(naruTo)