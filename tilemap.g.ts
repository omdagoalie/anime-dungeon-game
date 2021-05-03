// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [], -Infinity);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`100010000b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b080a09090a0a09090b0b0b0b0b0b0b0b01010101010102090b0b0b0b0b0b0b0b0c040404040405090b0b0b0b0b0b0b0b03030303030405090b0b0b0b0b0b0b0b080a09090a0605090b0b0b0b0b0b0b0b0b0b0b09090605090b0b0b0b0b0b0b0b0b0b0b0b0906050a0b0b0b0b0b0b0b0b0b0b0b0b0906050a0b0b0b0b0b0b0b0b0b0b0b0b090605080b0b0b0b0b0b0b0b0b0b0b0b090605080b0b0b0b0b0b0b0b0b0b0b0b0a06050808080a090909090a0b0b0b0b0a06040101010101010101010b0b0b0b08060404040404040404040d0b0b0b0b0807030303030303030303030b0b0b0b0809090a08080a090909090a`, img`
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
2 2 2 2 2 . . 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . . 2 . . 2 . . . . . . . . 
. . . . 2 . . 2 2 2 2 2 2 2 2 2 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath7,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.builtin.forestTiles0,sprites.dungeon.buttonTealDepressed,sprites.dungeon.buttonOrange], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
