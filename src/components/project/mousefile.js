import $ from "jquery";
export function mousefile(params) {
    var $gal = $("#propertyThumbnails"),
        galW = $gal.outerWidth(true),
        galSW = $gal[0].scrollWidth,
        wDiff = (galSW / galW) - 1, // widths difference ratio
        mPadd = 60, // mousemove Padding
        damp = 20, // Mmusemove response softness
        mX = 0, // real mouse position
        mX2 = 0, // modified mouse position
        posX = 0,
        mmAA = galW - (mPadd * 2), // the mousemove available area
        mmAAr = (galW / mmAA); // get available mousemove didderence ratio
    $gal.mousemove(function (e) {
        mX = e.pageX - $(this).parent().offset().left - this.offsetLeft;
        mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
    });
    setInterval(function () {
        posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"	
        $gal.scrollLeft(posX * wDiff);
    }, 10);
}
