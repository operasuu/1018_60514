input.onButtonPressed(Button.A, function () {
    if (Char.get(LedSpriteProperty.X) > 0) {
        Char.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Char.get(LedSpriteProperty.X) < 4) {
        Char.change(LedSpriteProperty.X, 1)
    }
})
let Obj: game.LedSprite = null
let Char: game.LedSprite = null
Char = game.createSprite(2, 4)
Obj.set(LedSpriteProperty.Brightness, 45)
Char.set(LedSpriteProperty.Brightness, 240)
basic.pause(1000)
Obj = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    basic.pause(200)
    Obj.change(LedSpriteProperty.Y, 1)
    if (Char.get(LedSpriteProperty.X) == Obj.get(LedSpriteProperty.X) && Char.get(LedSpriteProperty.Y) == Obj.get(LedSpriteProperty.Y)) {
        Obj.delete()
    }
})
