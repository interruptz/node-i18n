var path = require('path');

module.exports = function(_path){
    var locale = '';
    return {
        setLocale: function(l){
            locale = l;
        },
        getLocale: function(){ return locale; },
        string: function(str){
            var data = require(path.join(_path, 'locales', locale));
            return data[str] ? data[str] : str;
        }
    };
}
