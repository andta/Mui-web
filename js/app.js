var andta = { //类似静态方法
	backwebview: function() {
		/*关闭network_none页面*/
		var subWebview = plus.webview.getWebviewById("network_none");
		subWebview.close();
	},
	networkif: function() {
		/*判断网络*/
		var net = plus.networkinfo.getCurrentType();
		var netcn = null;
		switch (net) {
			case plus.networkinfo.CONNECTION_ETHERNET:
			case plus.networkinfo.CONNECTION_WIFI:
				netcn = "当前wifi网络";
				break;
			case plus.networkinfo.CONNECTION_CELL2G:
			case plus.networkinfo.CONNECTION_CELL3G:
			case plus.networkinfo.CONNECTION_CELL4G:
				netcn = "当前为移动网络";
				break;
			default:
				netcn = "无网络";
				break;
		}
		console.log('调试：检测网络连接状态  = ' + netcn);

		if (net == plus.networkinfo.CONNECTION_NONE) {
			mui.toast("当前网络不给力，请稍后再试");
		} else {
			console.log('调试：关闭无网络界面 ！');
			andta.backwebview(); //网络畅通关闭本界面
		}
	},
	createwebnone: function() {
		/*预加载无网络页面*/
		var subWebview = mui.preload({
			url: 'network_none.html',
			id: "network_none",
			styles: {
				top: '45px',
				bottom: '0px',
			},
			extras: {
				mType: 'sub'
			}
		});
		//获取共用父窗体
		var template = plus.webview.getWebviewById("default-main");
		console.log('调试：当前共有的子窗体个数 = ' + template.children().length);
		template.append(subWebview);
	}
}

















var person = function(name, age) { //定义对象构造方法  
	this.name = name;
	this.age = age;
}
person.prototype = { //封装方法  
	getName: function() {
		alert(this.name);
	},
	getAge: function() {
		alert(this.age);
	}
}