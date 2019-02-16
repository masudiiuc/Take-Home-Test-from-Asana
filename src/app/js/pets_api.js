function pets_api() {

    function call_api (url) {
        return fetch(url);
    }

    this.get_dogs = function () {
        return $.getJSON('/assets/data/dogs.json');
    };

    return this;
};