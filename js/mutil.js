/**
 * 手机端辅助类	
**/


var mu = (function(){
	function isMobile(){
            var appVersion = navigator.appVersion.toLowerCase();
            var matches = ['mobile','iphone','ipod','ipad','android'
                ,'nokia','symbianos','symbian','windows phone'
                ,'phone','linux armv71','maui','umtrusted/1.0'
                ,'windows ce','blackberry','iemobile'];
            for(var i= 0,len=matches.length;i<len;i++){
                if(appVersion.match(matches[i])){
                    return true;
                }
            }

            //做这一部分是因为Android手机的内核也是Linux
            //X11是UC浏览器的平台
            if(appVersion.match(/linux/i)&&appVersion.match(/x11/i))
            {
                return true;
            }
            return false;
        }	
	
	
	return 	{
		isMobile:isMobile
	}
})();