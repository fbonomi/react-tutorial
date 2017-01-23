import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8080';
axios.defaults.headers.aaa = 'aaa';
axios.defaults.headers.bbb = 'bbb';

import _ from 'underscore';
import $ from 'jquery';

const _parseException = (response) => {
	switch (response.error_type) {
		case 'EX':
			//$alert_manager.clear_alerts();
			//sk_log_error('Error on Invoke remote app : ' + dstUrl, true, response);
			if(_.has(response,'session_expired') && !_.isUndefined(response.session_expired) && response.session_expired) {
			//if (response.error_message == 'Session Expired !') {
				//if (!container || container.showMessagesSystemError()) {
					alert("Session Expired !");
					/*$alert_manager.insert_alert_error({
						layout: 'topRight',
						text: 'Session Expired !',
						timeout: 10000,
						target: parent.window,
						session_expired: true,
					});
					AppUtils.logout();*/
				//}
			} else {
				var error_message = response.error_message + (response.error_message_detail ? '<hr /><small>' + response.error_message_detail + '</small>' : '');
				//var Mixins = require('wp_mixins.js');
				//Mixins.openDialogMessage('Error', error_message);
				//alert(error_message);

				/*if (!_.isUndefined(callBackFunction) && _.isFunction(callBackFunction)) {
					try {
						callBackFunction(response, true);
					} catch (e) {
						console.error(e.stack)
					}
				}*/
			}
			break;
		case 'E':
			//sk_log_error('Error on Invoke remote app service : ' + dstUrl, true, response);
			if (response.error_class == 'HostResponseException' && response.error_field != '') {
				var text = (response.error_message + ' (' + response.error_code + ') ').replace('{0}', response.error_field);
				//sk_log_debug('Successfully Invoke remote app : ' + dstUrl, true);
				/*if (!_.isUndefined(callBackFunction) && _.isFunction(callBackFunction)) {
					try {
						callBackFunction(response, true);
					} catch (e) {
						console.error(e.stack)
					}
				}*/
			} else {
				var text = response.error_message + ' (' + response.error_code + ')';
			}
			//if (!container || container.showMessagesError()) {
				//alert(text);
				/*$alert_manager.insert_alert_error({
					layout: 'topRight',
					text: text,
					timeout: 10000,
					target: parent.window,
				});*/
			//}
			//$sk_authorization.init_authorizations();
			break;
		/*case SERVER_MESSAGE_WARNING_TYPE:
			sk_log_debug('Successfully Invoke remote app : ' + dstUrl, true, response);

			if (!_.isUndefined(callBackFunction) && _.isFunction(callBackFunction)) {
				try {
					callBackFunction(response);
				} catch (e) {
					console.error(e.stack)
				}
			}

			if (!container || container.showMessagesWarning()) {
				$alert_manager.insert_alert_warning({
					layout: 'topRight',
					text: response.warning_message,
					timeout: 10000,
					target: parent.window,
				});
			}
			break;
		case SERVER_MESSAGE_INFO_TYPE:
			sk_log_debug('Successfully Invoke remote app : ' + dstUrl, true, response);

			if (!_.isUndefined(callBackFunction) && _.isFunction(callBackFunction)) {
				try {
					callBackFunction(response);
				} catch (e) {
					console.error(e.stack)
				}
			}

			if (!container || container.showMessagesInfo()) {
				$alert_manager.insert_alert_information({
					layout: 'topRight',
					text: response.info_message,
					timeout: 10000,
					target: parent.window,
				});
			}
			break;
		}*/
	}
}

const _invoke = (action, code, pcId, data, callback) => {
	var url = '/ob20SI/' + action + '?fnzCod=OBF' + code + '&pcIds=' + pcId;
	
	var params = "fldJsn=" + encodeURIComponent(JSON.stringify({
		output_params: data,
		output_params_pcid: {},
	}));

	/*var params = "headers=" + encodeURIComponent(JSON.stringify({
		"Cookie": "JSESSIONID=329FE6FAB8EDF7463F3D98D1DA5C43B7",		
	}));*/
	
	//axios.post(url, encodeURI(params))
	/*
	axios.post(url, params)
        .then(res => {
        	var response = JSON.parse(res.request.response);
        	console.log(res.request.response);
        	if (response.error_type) {
        		_parseException(response);
        	} else {
        		alert("SUCCESS");
        		callback();
        	}
        })
        .catch(error => {
			console.log(error);
			})
			;*/

	var ajaxParams = {};
		//ajaxParams['timeout'] = AJAX_CONNECTION_TIMEOUT_MILLISECONDS;
		ajaxParams['dataType'] = 'json';
		ajaxParams['url'] = /*'http://127.0.0.1:8080' + */url;
		ajaxParams['type'] = 'post';
		ajaxParams['data'] = {
			fldJsn: JSON.stringify({
				output_params: data,
			})
		};

	$.ajax(ajaxParams).then((response, textStatus, jqXHR) => {
		//var response = JSON.parse(response.request.response);
    	//console.log(response.request.response);
    	if (response.error_type) {
    		_parseException(response);
    	} else {
    		var pdId = Object.keys(response.input_struct_pcId)[0];
    		callback(response.input_struct_pcId[pdId]);
    	}
	})
}

const Navigation = {
	invoke: (code, pcId, data, callback) => {
		_invoke('ControllerJS.do', code, pcId, data, callback);
	},
	login: (code, pcId, data, callback) => {
		_invoke('LogonJS.do', code, pcId, data, callback);
	},
}

export default Navigation;