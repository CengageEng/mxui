//load("jupiter/positionable/test/funcunit/run.js")


//load global selenium settings, change if you want something different
load('settings/selenium.js')

load('jmvc/rhino/loader.js');
rhinoLoader(function(){
    include.plugins('jupiter/positionable/test/funcunit');  // load tests
}, true);