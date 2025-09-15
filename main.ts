let Creator: Sprite = null
tiles.placeOnTile(Creator, tiles.getTileLocation(50, 25))
Creator = sprites.create(img`
    . . . e e e e e e e e . . . . . 
    . . e e e e e e e e d . . . . . 
    . . e e e e e e . . d . . . . . 
    . . . e e . . . . . d . . . . . 
    . . . e . . 8 . 8 . d . . . . . 
    . . . e . . . . . . d . . . . . 
    . . e e d d d d d d d . . . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    9 9 . . 9 9 9 9 9 9 . . 9 9 . . 
    9 9 . . 9 9 9 9 9 9 . . 9 9 . . 
    9 9 . . 9 9 9 9 9 9 . . 9 9 . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . 9 9 9 9 9 9 . . . . . . 
    . . . . . 6 . . 6 . . . . . . . 
    . . . . . 6 . . 6 . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Creator)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(Creator)
