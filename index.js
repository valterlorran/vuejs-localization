/*
 *	Defines the Plugin Class
 */
var Plugin = function(){ };
/*
 *	Defines the Lang Class
 */
var Lang = function(options){
	//This will hold the current lang
	this.current_lang = options.lang;
	//Holds the lag data
	this.lang_data = {};
	//Sets the current lang when first start the object
	this.setLang(this.current_lang);
};

//This static object will hold all lang files
Lang.files = {};

/*
 *	This method is used to set the current lang.
 */
Lang.prototype.setLang = function(lang){
	for(var i in Lang.files){
		if(i.indexOf('./'+this.current_lang+'/') === 0){
			var lang_name = i.replace('./'+this.current_lang+'/', '').replace('.js', '');
			this.lang_data[lang_name] = Lang.files[i];
		}
	}

	this.current_lang = lang;
	this.lang_data = {};

	for(var i in Lang.files){
		if(i.indexOf('./'+lang+'/') === 0){
			var lang_name = i.replace('./'+lang+'/', '').replace('.js', '');
			this[lang_name] = Lang.files[i];
		}
	}
};

/*
 *	Gets the current lang
 */
Lang.prototype.getLang = function(){
	return this.current_lang;
};

/*
 *	Requires all langs file
 */
Plugin.requireAll = function(r) { 
	r.keys().forEach(function(d){
		Lang.files[d] = r(d);
	});
};

/*
 *	Installs the plugin in the vuejs.
 */
Plugin.install = function(Vue, options){
	var o = options || {};

	var default_lang = o.default || 'en';

	Object.defineProperty(Vue.prototype, '$lang', {
		get:function () { return this.$root._lang }
	});

	if(typeof o != 'object'){
		console.error('[vue-lang] the options should be an object type.');
		return false;
	}

	Vue.mixin({
	    beforeCreate:function() {
	        Vue.util.defineReactive(this, '_lang',  new Lang({lang:default_lang}));
	    }
	});
};

module.exports = Plugin;
