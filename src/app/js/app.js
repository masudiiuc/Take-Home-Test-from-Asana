(function() {
    'use strict';
    var app = {
        run : function () {
            var pet_gallary_obj = pets_gallary();
            pet_gallary_obj.init();

            pet_gallary_obj.render('image_gallary', {});
        }
    };

    app.run();
})();