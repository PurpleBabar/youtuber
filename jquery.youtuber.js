/** PurpleBabar Youtuber **/

(function($)
{
    $.fn.youtuber=function(options)
    {
        var defauts=
        {
            quality:'default',
            width: 320,
            height: 180,
            youtubeStyle: true,
            playButton: '',
            autoplay: false
        };  

        var parameters=$.extend(defauts, options); 
        return this.each(function()
        {
            var code = $(this).data('youtuber');
            src = 'http://img.youtube.com/vi/'+code+'/default.jpg';
            switch(parameters.quality) {
                case 'default':
                    src = 'http://img.youtube.com/vi/'+code+'/default.jpg';
                    break;
                case 'maxresdefault':
                    src = 'http://img.youtube.com/vi/'+code+'/maxresdefault.jpg';
                    break;
                case 'sddefault':
                    src = 'http://img.youtube.com/vi/'+code+'/sddefault.jpg';
                    break;
                case 'mqdefault':
                    src = 'http://img.youtube.com/vi/'+code+'/mqdefault.jpg';
                    break;
                case 'hqdefault':
                    src = 'http://img.youtube.com/vi/'+code+'/hqdefault.jpg';
                    break;
                case '0':
                    src = 'http://img.youtube.com/vi/'+code+'/0.jpg';
                    break;
                case '1':
                    src = 'http://img.youtube.com/vi/'+code+'/1.jpg';
                    break;
                case '2':
                    src = 'http://img.youtube.com/vi/'+code+'/2.jpg';
                    break;
                case '3':
                    src = 'http://img.youtube.com/vi/'+code+'/3.jpg';
                    break;
            }

            if (this.tagName == 'IMG') {
                $(this).attr('src', src);
            }else{
                var code = $(this).data('youtuber');
                if (parameters.hasOwnProperty('autoplay')){
                    if (parameters.autoplay){
                        code += "?autoplay=1";
                    }
                }
                var specs = "";
                if(parameters.hasOwnProperty('width')){
                    specs += "width=\""+ parameters.width +"\"";
                }
                if(parameters.hasOwnProperty('height')){
                    specs += "height=\""+ parameters.height +"\"";
                }
                if(parameters.hasOwnProperty('frameborder')){
                    specs += "frameborder=\""+ parameters.frameborder +"\"";
                }else{
                    specs += "frameborder=\"0s\"";
                }
                var frame = "<iframe "+ specs +" src=\"https://www.youtube.com/embed/"+ code +"\" allowfullscreen></iframe>";
                if(parameters.hasOwnProperty('youtubeStyle')){
                    if (!parameters.youtubeStyle){
                        var playButton = '';
                        var style = '';
                        if(parameters.hasOwnProperty('width')){
                            style += "width:"+ parameters.width +"px;";
                        }
                        if(parameters.hasOwnProperty('height')){
                            style += "height:"+ parameters.height +"px;";
                        }
                        style += 'background-image: url('+ src +');position: relative;';
                        var div = '<div style="'+style+'">';
                        if(parameters.hasOwnProperty('playButton')){
                            playButton = '<img class="youtuber triggerer" src="'+parameters.playButton+'"" alt="" style="display: block;margin: auto; vertical-align: middle;height:50px;width:auto;position: absolute;top: 50%;left: 50%;margin: -25px 0 0 -25px;">';
                        }
                        div += playButton + '</div>';
                        $(this).append(div);
                        var frame = "<iframe "+ specs +" src=\"https://www.youtube.com/embed/"+ code +"?autoplay=1\" allowfullscreen></iframe>";
                    }else{
                        $(this).append(frame);
                    }
                }
                $(this).on('click', function(event) {
                    event.preventDefault();
                    console.log($(this).children());
                    $(this).children('div').replaceWith(frame);
                });
            }
        });
    };
})(jQuery);