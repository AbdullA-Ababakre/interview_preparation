var Event = {
	handlers: {},
	 /**
	 * 监听指定函数
	 * @param eventName {string} 事件名称
	 * @param callback {function} 处理函数
	 */
	on: function(eventName, callback) {
		var handlers = this.handlers;

		// 判断是否有相关事件的监听者，如果没有则创建
		if (!handlers[eventName]) {
			handlers[eventName] = [];
		}
		// 增加指定事件的监听者
		handlers[eventName].push(callback);
	},
	/**
	 * 触发指定事件
	 * @param eventName {string} 事件名称
	 */
	emit: function(eventName) {
		var eventHandlers = this.handlers[eventName];
		// 循环调用相关观察者处理函数
		if (eventHandlers) {
			for (var i = 0, len = eventHandlers.length; i < len; i++) {
				var handler = eventHandlers[i];
				// 调用
				handler(eventName);
			}
		}
	}
};

// 第一个监听观察 topic1
Event.on('someTopic', function() {
	console.log('someTopic1');
});
// 第二个监听观察 topic1
Event.on('someTopic', function() {
	console.log('someTopic2');
});

console.log(Event.handlers.someTopic);
// 第一个监听观察 topic2
Event.on('otherTopic', function() {
	console.log('otherTopic');
});

Event.emit('someTopic'); // 输出 'someTopic1' 和 'someTopic2'
Event.emit('otherTopic'); // 输出 'otherTopic'
