
<div ng-if="formats.url" ng-init="finish(event)">

	<a class="btn btn-lg btn-download pull-left" href="{{formats.url}}?title={{title}}" download><span class="icon-if_Download_2202271"></span> DOWNLOAD </a> 
	
	<div class="clearfix"></div>
</div>
<div ng-if="!formats.url" ng-init="start(event)">
	<!-- <div id="com_load"> <button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading...</button></div> -->
</div>

   <div class="bao text-center" ng-show="loading">
    <span class="status">{{status}}</span>
    <div id="demo_contained1"></div>
  </div>
