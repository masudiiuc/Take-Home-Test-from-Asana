(function() {
    'use strict';
    var app = {

        run : function () {

            var pet_gallary_obj = pets_gallary();


            pet_gallary_obj.init();

            var pets_api_obj = pets_api();
            pets_api_obj.get_dogs().then(function (dog_list){
                console.log('>>', dog_list);
                pet_gallary_obj.render('image_gallary', {data: dog_list});
            });

        }
    };

    app.run();
})();