(function(g,f){typeof exports==='object'&&typeof module!=='undefined'?module.exports=f():typeof define==='function'&&define.amd?define(f):(g=g||self,g.quickdom=f());}(this,function(){'use strict';var origDescriptors;

origDescriptors = {
  'innerWidth': Object.getOwnPropertyDescriptor(window, 'innerWidth'),
  'innerHeight': Object.getOwnPropertyDescriptor(window, 'innerHeight')
};

var simulate = new function() {
  var current, overwrite, overwritten;
  overwritten = false;
  current = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  overwrite = function() {
    if (!overwritten) {
      overwritten = true;
      Object.defineProperty(window, 'innerWidth', {
        configurable: true,
        get: function() {
          return current.width;
        },
        set: function(newValue) {
          return current.width = newValue;
        }
      });
      return Object.defineProperty(window, 'innerHeight', {
        configurable: true,
        get: function() {
          return current.height;
        },
        set: function(newValue) {
          return current.height = newValue;
        }
      });
    }
  };
  this.simulate = function(width, height) {
    var event;
    if (width) {
      current.width = width;
    }
    if (height) {
      current.height = height;
    }
    overwrite();
    event = document.createEvent('Event');
    event.initEvent('resize', true, false);
    return window.dispatchEvent(event);
  };
  this.restore = function() {
    Object.defineProperty(window, 'innerWidth', origDescriptors.innerWidth);
    return Object.defineProperty(window, 'innerHeight', origDescriptors.innerHeight);
  };
  return this;
};return simulate;}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltdWxhdGUuanMiLCJzb3VyY2VzIjpbInNpbXVsYXRlLmNvZmZlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJvcmlnRGVzY3JpcHRvcnMgPSBcblx0J2lubmVyV2lkdGgnOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdywgJ2lubmVyV2lkdGgnKVxuXHQnaW5uZXJIZWlnaHQnOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdywgJ2lubmVySGVpZ2h0JylcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgKCktPlxuXHRvdmVyd3JpdHRlbiA9IGZhbHNlXG5cdGN1cnJlbnQgPSB3aWR0aDp3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OndpbmRvdy5pbm5lckhlaWdodFxuXHRcblx0Z2V0UmVhbCA9IChkaW1lbnNpb24pLT5cblx0XHRkaW1lbnNpb24gPSAnaW5uZXInK2RpbWVuc2lvbi5yZXBsYWNlIC9cXGIuLywgKGxldHRlciktPiBsZXR0ZXIudG9VcHBlckNhc2UoKVxuXHRcdG9yaWdEZXNjcmlwdG9yc1tkaW1lbnNpb25dLmdldC5jYWxsKHdpbmRvdylcblxuXHRvdmVyd3JpdGUgPSAoKS0+IHVubGVzcyBvdmVyd3JpdHRlblxuXHRcdG92ZXJ3cml0dGVuID0gdHJ1ZVxuXHRcdFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB3aW5kb3csICdpbm5lcldpZHRoJyxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0Z2V0OiAoKS0+IGN1cnJlbnQud2lkdGhcblx0XHRcdHNldDogKG5ld1ZhbHVlKS0+IGN1cnJlbnQud2lkdGggPSBuZXdWYWx1ZVxuXHRcdFxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB3aW5kb3csICdpbm5lckhlaWdodCcsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdGdldDogKCktPiBjdXJyZW50LmhlaWdodFxuXHRcdFx0c2V0OiAobmV3VmFsdWUpLT4gY3VycmVudC5oZWlnaHQgPSBuZXdWYWx1ZVxuXHRcblxuXHRAc2ltdWxhdGUgPSAod2lkdGgsIGhlaWdodCktPlxuXHRcdGN1cnJlbnQud2lkdGggPSB3aWR0aCBpZiB3aWR0aFxuXHRcdGN1cnJlbnQuaGVpZ2h0ID0gaGVpZ2h0IGlmIGhlaWdodFxuXHRcdFxuXHRcdG92ZXJ3cml0ZSgpXG5cdFx0ZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuXHRcdGV2ZW50LmluaXRFdmVudCgncmVzaXplJywgdHJ1ZSwgZmFsc2UpXG5cdFx0d2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG5cblxuXHRAcmVzdG9yZSA9ICgpLT5cblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkgd2luZG93LCAnaW5uZXJXaWR0aCcsIG9yaWdEZXNjcmlwdG9ycy5pbm5lcldpZHRoXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5IHdpbmRvdywgJ2lubmVySGVpZ2h0Jywgb3JpZ0Rlc2NyaXB0b3JzLmlubmVySGVpZ2h0XG5cblxuXHRyZXR1cm4gQCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib01BQUEsSUFBQTs7QUFBQSxlQUFBLEdBQ0M7RUFBQSxZQUFBLEVBQWMsTUFBTSxDQUFDLHdCQUFQLENBQWdDLE1BQWhDLEVBQXdDLFlBQXhDLENBQWQ7RUFDQSxhQUFBLEVBQWUsTUFBTSxDQUFDLHdCQUFQLENBQWdDLE1BQWhDLEVBQXdDLGFBQXhDOzs7QUFFaEIsWUFBQSxHQUFpQixJQUFJO01BQ3BCLE9BQUEsRUFBQSxBQUFBLFNBQUEsRUFBQTtFQUFBLFdBQUEsR0FBYztFQUNkLE9BQUEsR0FBVTtJQUFBLEtBQUEsRUFBTSxNQUFNLENBQUMsVUFBYjtJQUF5QixNQUFBLEVBQU8sTUFBTSxDQUFDOztFQU1qRCxTQUFBLEdBQVk7SUFBSyxJQUFBLENBQU8sV0FBUDtNQUNoQixXQUFBLEdBQWM7TUFFZCxNQUFNLENBQUMsY0FBUCxDQUFzQixNQUF0QixFQUE4QixZQUE5QixFQUNDO1FBQUEsWUFBQSxFQUFjLElBQWQ7UUFDQSxHQUFBLEVBQUs7aUJBQUssT0FBTyxDQUFDO1NBRGxCO1FBRUEsR0FBQSxFQUFLLFNBQUMsUUFBRDtpQkFBYSxPQUFPLENBQUMsS0FBUixHQUFnQjs7T0FIbkM7YUFLQSxNQUFNLENBQUMsY0FBUCxDQUFzQixNQUF0QixFQUE4QixhQUE5QixFQUNDO1FBQUEsWUFBQSxFQUFjLElBQWQ7UUFDQSxHQUFBLEVBQUs7aUJBQUssT0FBTyxDQUFDO1NBRGxCO1FBRUEsR0FBQSxFQUFLLFNBQUMsUUFBRDtpQkFBYSxPQUFPLENBQUMsTUFBUixHQUFpQjs7T0FIcEMsRUFSZ0I7OztFQWNqQixJQUFDLENBQUEsUUFBRCxHQUFZLFNBQUMsS0FBRCxFQUFRLE1BQVI7UUFDWDtJQUFBLElBQXlCLEtBQXpCO01BQUEsT0FBTyxDQUFDLEtBQVIsR0FBZ0IsTUFBaEI7O0lBQ0EsSUFBMkIsTUFBM0I7TUFBQSxPQUFPLENBQUMsTUFBUixHQUFpQixPQUFqQjs7SUFFQSxTQUFBO0lBQ0EsS0FBQSxHQUFRLFFBQVEsQ0FBQyxXQUFULENBQXFCLE9BQXJCO0lBQ1IsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsUUFBaEIsRUFBMEIsSUFBMUIsRUFBZ0MsS0FBaEM7V0FDQSxNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFyQjs7RUFHRCxJQUFDLENBQUEsT0FBRCxHQUFXO0lBQ1YsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsWUFBOUIsRUFBNEMsZUFBZSxDQUFDLFVBQTVEO1dBQ0EsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsYUFBOUIsRUFBNkMsZUFBZSxDQUFDLFdBQTdEOztTQUdNOyJ9
