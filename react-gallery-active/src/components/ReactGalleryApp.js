'use strict';

var React = require('react/addons');
// var ReactTransitionGroup = React.addons.TransitionGroup;//用来处理react动画的底层api;

// CSS
require('normalize.css');
require('../styles/main.scss');

//获取图片相关的数据;
var imageDatas = require('../data/imagedata.json');

//利用自执行函数，将图片和信息转成图片的URL路径信息;
//imageDataArr:获取到的json文件中的文件名和说明等信息;
imageDatas = (function genImageURL(imageDataArr){
	for(var i = 0, j = imageDataArr.length; i < j; i++){
		var singleImageData = imageDataArr[i];
		singleImageData.imageUrl = require('../images/' + singleImageData.fileName);

		imageDataArr[i] = singleImageData;
	}

	return imageDataArr;
})(imageDatas);

var ReactGalleryApp = React.createClass({
  render: function() {
    return (
        <section className="stage">
            <section className="img-sec">
            </section>
            <nav className="controller-nav">
            </nav>
        </section>
    );
  }
});
React.render(<ReactGalleryApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ReactGalleryApp;
