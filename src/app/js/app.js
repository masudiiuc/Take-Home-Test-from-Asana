(function() {
    'use strict';
    var app = {
        run : function () {
            var pet_gallary_obj = pets_gallary();
            pet_gallary_obj.init();
        }
    };

    app.run();
})();