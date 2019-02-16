var pets_gallary = function () {

    const gallary_container = document.querySelector('#image_gallary');

    this.init = function () {
        console.log('-- Pet Adoption gallary');
    };

    this.render = function (template_name, template_data) {
        template_data = _.isEmpty(template_data) ? {} : template_data;

        if (_.isEmpty(template_name)) {
            return false;
        }
        template_name = JST[template_name + '.html'];

        if (_.isUndefined(template_name)) {
            return false;
        }

        gallary_container.innerHTML = template_name(template_data);
    }


    return this;
};