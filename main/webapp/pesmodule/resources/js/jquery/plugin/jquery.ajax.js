(function($) {
	$.fn.extend(jQuery,	{
						postXmlAjax : function(requestUrl, requestXml, callback) {
							try {
								$.ajax({
									type : "POST",
									dataType : 'xml',
									url : requestUrl,
									data : requestXml,
									async : true,
									success : function(responseXml) {
										callback(responseXml);
									}
								});
							} catch (e) {
								alert("[AJAX ERROR] " + e.message);
							}
						},

						postSyncXmlAjax : function(requestUrl, requestXml,	callback) {
							try {
								$.ajax({
									type : "POST",
									dataType : 'xml',
									url : requestUrl,
									data : requestXml,
									async : false,
									success : function(responseXml) {
										callback(responseXml);
									}
								});
							} catch (e) {
								alert("[AJAX ERROR] " + e.message);
							}
						},
                        postAjax : function(requestUrl, requestData, callback, errorCallback) {
                            try {
                                var sendDate = requestData;
                                // 송신할 데이터 통합 작업
                                $.ajax({
                                    beforeSend : function(xhr){
                                        xhr.setRequestHeader("user_data_type", "json");
                                        xhr.setRequestHeader("user_data_enc","n");
                                        xhr.setRequestHeader("user_com_code",requestUrl);
                                    },
                                    type : 'POST',
                                    dataType : 'json',
                                    url : requestUrl,	// 실서버 접속
                                    data : "reqData="+sendDate,
                                    contentType : "application/x-www-form-urlencoded",
                                    async : true,
                                    error:function(xhrCode,xhrMsg){
                                        alert('통신에러['+xhrCode.status+"]: "+xhrMsg);
                                        errorCallback();
                                    },
                                    success : function(xhrMsg) {
                                        callback(xhrMsg);
                                    },
                                    beforeSend:function(){
                //                                        alert('start');
                                    },
                                    complete:function(){
                //                                        alert('complete');
                                    }
                                });
                            } catch (e) {
                                alert("[AJAX ERROR] " + e.message);
                            }
                        },
                        v2_postAjax : function(requestUrl, requestData, callback, errorCallback) {
                            try {
                                var sendDate = requestData;
                                // 송신할 데이터 통합 작업
                                $.ajax({
                                    beforeSend : function(xhr){
                                        xhr.setRequestHeader("user_data_type", "json");
                                        xhr.setRequestHeader("user_data_enc","n");
                                        xhr.setRequestHeader("user_com_code",requestUrl);
                                    },
                                    type : 'POST',
                                    dataType : 'json',
                                    url : requestUrl,	// 실서버 접속
                                    data : sendDate,
                                    contentType : "application/x-www-form-urlencoded",
                                    async : true,
                                    error:function(xhrCode,xhrMsg){
                                        alert('통신에러['+xhrCode.status+"]: "+xhrMsg);
                                        errorCallback();
                                    },
                                    success : function(xhrMsg) {
                                        callback(xhrMsg);
                                    },
                                    beforeSend:function(){
                                        //                                        alert('start');
                                    },
                                    complete:function(){
                                        //                                        alert('complete');
                                    }
                                });
                            } catch (e) {
                                alert("[AJAX ERROR] " + e.message);
                            }
                        },
						postJsonAjax : function(requestUrl, requestData, callback, errorCallback) {
							try {
								var sendDate;
								// 송신할 데이터 통합 작업
								sendDate = addBody(requestUrl, requestData);
//                                sendDate = JSON.stringify(requestData);
								$.ajax({
									beforeSend : function(xhr){
										xhr.setRequestHeader("user_data_type", "json");
										xhr.setRequestHeader("user_data_enc","n");
										xhr.setRequestHeader("user_com_code",requestUrl);
									},
									type : 'POST',
									dataType : 'json',
									url : requestUrl,	// 실서버 접속
									data : "reqJson="+sendDate,
									contentType : "application/x-www-form-urlencoded",
									async : true,
                                    error:function(xhrCode,xhrMsg){
                                        alert('통신에러['+xhrCode.status+"]: "+xhrMsg);
                                        errorCallback();
                                    },
									success : function(xhrMsg) {
                                        callback(xhrMsg);
                                    },
                                    beforeSend:function(){
//                                        alert('start');
                                    },
                                    complete:function(){
//                                        alert('complete');
                                    }
                                });
							} catch (e) {
								alert("[AJAX ERROR] " + e.message);
							}
						},
                        ajaxFileUpload : function(requestUrl, requestData, callback, errorCallback) {
                            try {
                                var sendDate = requestData;
                                // 송신할 데이터 통합 작업
                                $.ajax({
                                    beforeSend : function(xhr){
                                        xhr.setRequestHeader("user_data_type", "json");
                                        xhr.setRequestHeader("user_data_enc","n");
                                        xhr.setRequestHeader("user_com_code",requestUrl);
                                    },
                                    url : requestUrl,	// 실서버 접속
                                    data : sendDate,
                                    cache: false,
                                    contentType: 'multipart/form-data',
                                    processData: false,
                                    type : 'POST',
                                    dataType : 'json',
                                    async : true,
                                    error:function(xhrCode,xhrMsg){
                                        alert('통신에러['+xhrCode.status+"]: "+xhrMsg);
                                        errorCallback();
                                    },
                                    success : function(xhrMsg) {
                                        callback(xhrMsg);
                                    },
                                    beforeSend:function(){
                                        //                                        alert('start');
                                    },
                                    complete:function(){
                                        //                                        alert('complete');
                                    }
                                });
                            } catch (e) {
                                alert("[AJAX ERROR] " + e.message);
                            }
                        }

					});
	
	// 송신할 데이터 통합 작업
	function addBody(requestUrl, requestData) {
		var sendBody = new Object();
		var tempHead = new Object();
		var resultData ="";
		
		// head 데이터 생성
/*		tempHead.callback_function = "";
		tempHead.phone_no = "";
		tempHead.system_name = "PC";
		tempHead.screen_id = requestUrl;
		tempHead.device_md = "PC";
		tempHead.appid = "";
		tempHead.app_version = "";
		tempHead.device_id = "";
		tempHead.app_name = "";
		tempHead.callback_request_data_flag = "n";
		tempHead.system_version = "";*/
		
		// head, body 데이터 통합
		sendBody.head = tempHead;
		sendBody.body = requestData;
		
		// JSON => String형으로 변경
		resultData = JSON.stringify(sendBody);
		
		return resultData;	
	}
	
})(jQuery);