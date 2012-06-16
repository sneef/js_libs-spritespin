(function($, window, Spin){
  Spin.behaviors.hold = {
    name : "hold",
    mousedown  : function(e){
      var $this = $(this), data = $this.data('spritespin');
      Spin.updateInput(e, data);
      data.onDrag = true;
      $this.spritespin("animate", true);
    },
    mousemove  : function(e){
      var $this = $(this), data = $this.data('spritespin');
      
      if (data.onDrag){
        Spin.updateInput(e, data);
        
        var o = data.target.offset();
        var h = (data.width / 2);
        var d = (data.currentX - o.left - h) / h;
        data.reverse = d < 0;
        d = d < 0 ? -d : d;
        data.frameTime = 80 * (1 - d) + 20;        
      }
    },
    mouseup    : function(e){ 
      var $this = $(this), data = $this.data('spritespin');
      Spin.resetInput(data);
      data.onDrag = false;
      $this.spritespin("animate", false);
    },
    
    mouseenter : $.noop,
    mouseover  : $.noop,
    mouseleave : function(e){
      var $this = $(this), data = $this.data('spritespin');
      Spin.resetInput(data);
      data.onDrag = false;
      $this.spritespin("animate", false);
    },
    dblclick   : $.noop,
    
    onFrame : function(e){
      var $this = $(this), data = $this.data('spritespin');
      $this.spritespin("animate", true);
    }
  };
})(jQuery, window, window.SpriteSpin);