var path = require('path');

module.exports = function(_path){
    var locale = '';
    return {
        setLocale: function(l){
            locale = l;
        },
        getLocale: function(){ return locale; },
        string: function(str, vars){
            var data = require(path.join(_path, 'locales', locale)); data = data[str] ? data[str] : str;
            if(typeof vars == 'object')
                for(var i in vars){
                    data = data.replace(new RegExp('\\$' + i, 'g'), vars[i]);
                }
            return data;
        }
    };
}
