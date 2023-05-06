'use strict';


var visdist = 5;

function visibleAround(plr) {

    const px = plr.cell.x
    const py = plr.cell.y
    let minx = px - visdist;
    minx = minx < 0 ? 0 : minx;
    let maxx = px + visdist;
    maxx = maxx > l - 1 ? l - 1 : maxx;
    let miny = py - visdist;
    miny = miny < 0 ? 0 : miny;
    let maxy = py + visdist;
    maxy = maxy > l - 1 ? l - 1 : maxy;
    // console.log({
    //     minx,
    //     maxx,
    //     miny,
    //     maxy
    // })
    for (let ix = minx; ix < maxx; ++ix) {
        for (let iy = miny; iy < maxy; ++iy) {
            grid[ix][iy].draw() //'rgba(255,0,255,0.01)')
            // console.log({
            //     ix,
            //     iy
            // })
            if (iy > 20) throw Error("!")
        }
    }
}