﻿/**
 * @fileoverview LocalStorage와 관련된 함수.
 */
 
if ( !JsNamespace.exist("Eco.LocalStorage") )
{
	/**
	 * @namespace
	 * @name Eco.LocalStorage
	 * @memberof! <global>
	 */
	JsNamespace.declare("Eco.LocalStorage", {
	

	/**
	 * key/value 쌍으로 data를 저장한다.
	 * @param {string} key The key.
	 * @param {string} value The associated value for key.
	 * @param {boolean=} common Whether to bring data in common area(default:false). RUNTIME Only.
	 * @return {boolean} 성공시 true, 실패시 false를 반환한다.
	 * @memberOf Eco.LocalStorage
	 */		
	setItem: function(key, value, common)
   	{ 
		return nexacro.setPrivateProfile(key, value, common);
	},    
 
	
	/**
	 * key에 해당하는 data를 반환한다.
	 * @param {string} key The key.
	 * @param {boolean=} common Whether to bring data in common area(default:false). RUNTIME Only.
	 * @return {string|null} key에 해당하는 값.
	 * @memberOf Eco.LocalStorage
	 */		
	getItem: function(key, common)
   	{ 
		return nexacro.getPrivateProfile(key, common);
	}
	
	});
	
	var me = Eco.LocalStorage;
	//removeItem(), clear() 별도처리. 향후 엔진에 적용되면 없앨 것.
	if(nexacro._Browser.toUpperCase() == "RUNTIME") {
		//런타임 내부의 data 저장방식을 알 수 없어 처리 불가.
		me.removeItem = nexacro._emptyFn;
		me.clear = nexacro._emptyFn;
		
	//HTML5	
	} else {
	    if (nexacro.Browser == "IE" && nexacro.BrowserVersion == 6)
	    {
	    	me.removeItem = nexacro._emptyFn;
	    	me.clear = nexacro._emptyFn;
	    }
	    else if (nexacro.Browser == "IE" && nexacro.BrowserVersion == 7)
	    {    
	    	me.removeItem = function(key) {
	            var localstoragekey = nexacro._getLocalStorageKey(1); // user
	            var iframenode = nexacro._managerFrameNode;
	            if (iframenode)
	            {
	                iframenode.load(localstoragekey);
	                var attribute = iframenode.getAttribute(key);
	                if (attribute)
	                {
	                	iframenode.removeAttribute(key);
	                }            	
	            }
		    }
	    	
	    	me.clear = function() {
	            var localstoragekey = nexacro._getLocalStorageKey(1); // user
	            var iframenode = nexacro._managerFrameNode;
	            if (iframenode)
	            {
	                iframenode.load(localstoragekey);
	                var attribute = iframenode.getAttribute(key);
	                if (attribute)
	                {
	                	//http://msdn.microsoft.com/en-us/library/ms536350(v=vs.85).aspx
	                	iframenode.clearAttributes();
	                }            	
	            }
		    }	    	
	    }
	    else 
	    {
	    	/**
	    	 * localStorage에서 key에 해당하는 key/value를 제거한다(RUNTIME 미지원).
	    	 * @param {string} key The key.
	    	 * @memberOf Eco.LocalStorage
	    	 */			    	
	    	Eco.LocalStorage.removeItem = function(key) {
				nexacro._removeLocalStorage(key, 1); // user
				return;		
		    	
		    }
	    	
	    	
	    	/**
	    	 * localStorage에서 모든 key/value를 제거한다(RUNTIME 미지원).
	    	 * @memberOf Eco.LocalStorage
	    	 */			    	
	    	Eco.LocalStorage.clear = function() {
				var localstoragekey = nexacro._getLocalStorageKey(1); // user
	            var localstorage = window.localStorage;
	            if (localstorage)
	            {
	                if (localstoragekey)
	                {
	                	var jsondata = {};	
	                	localstorage.setItem(localstoragekey, JSON.stringify(jsondata));
	                }
	            }
		    	
		    }	 	    	
	    	
	    }
		
	}

}  
		 
		 


