$(function() {
    $("form#cal").jAutoCalc("destroy"), $("form#cal tr.line_items").jAutoCalc({
        keyEventsFire: !0,
        decimalPlaces: 2,
        emptyAsZero: !0
    }), $("form#cal").jAutoCalc({
        decimalPlaces: 2
    });
});
