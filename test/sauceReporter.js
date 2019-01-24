(function(f){typeof define==='function'&&define.amd?define(f):f();}(function(){'use strict';window.failedTests = [];

window.runner = null;

mocha.run = (function() {
  var orig;
  orig = mocha.run.bind(mocha);
  return function() {
    var runner;
    runner = orig(...arguments);
    runner.on('end', function() {
      window.mochaResults = runner.stats || {};
      return window.mochaResults.reports = window.failedTests;
    });
    runner.on('pass', function() {});
    runner.on('fail', function(test, err) {
      return failedTests.push({
        name: test.title,
        result: false,
        message: err.message,
        stack: err.stack,
        titles: (function() {
          var titles;
          titles = [];
          while (test.parent.title) {
            titles.push(test.parent.title);
            test = test.parent;
          }
          return titles.reverse();
        })()
      });
    });
    return runner;
  };
})();}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F1Y2VSZXBvcnRlci5qcyIsInNvdXJjZXMiOlsic2F1Y2VSZXBvcnRlci5jb2ZmZWUiXSwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmZhaWxlZFRlc3RzID0gW11cbndpbmRvdy5ydW5uZXIgPSBudWxsXG5tb2NoYS5ydW4gPSBkbyAoKS0+XG5cdG9yaWcgPSBtb2NoYS5ydW4uYmluZChtb2NoYSlcblx0cmV0dXJuICgpLT5cblx0XHRydW5uZXIgPSBvcmlnKGFyZ3VtZW50cy4uLilcblxuXHRcdHJ1bm5lci5vbiAnZW5kJywgKCktPlxuXHRcdFx0d2luZG93Lm1vY2hhUmVzdWx0cyA9IHJ1bm5lci5zdGF0cyBvciB7fVxuXHRcdFx0d2luZG93Lm1vY2hhUmVzdWx0cy5yZXBvcnRzID0gd2luZG93LmZhaWxlZFRlc3RzXG5cdFx0XG5cdFx0cnVubmVyLm9uICdwYXNzJywgKCktPiBcblx0XHRydW5uZXIub24gJ2ZhaWwnLCAodGVzdCwgZXJyKS0+XG5cdFx0XHRmYWlsZWRUZXN0cy5wdXNoXG5cdFx0XHRcdG5hbWU6IHRlc3QudGl0bGVcblx0XHRcdFx0cmVzdWx0OiBmYWxzZVxuXHRcdFx0XHRtZXNzYWdlOiBlcnIubWVzc2FnZVxuXHRcdFx0XHRzdGFjazogZXJyLnN0YWNrXG5cdFx0XHRcdHRpdGxlczogZG8gKCktPlxuXHRcdFx0XHRcdHRpdGxlcyA9IFtdXG5cdFx0XHRcdFx0d2hpbGUgdGVzdC5wYXJlbnQudGl0bGVcblx0XHRcdFx0XHRcdHRpdGxlcy5wdXNoIHRlc3QucGFyZW50LnRpdGxlXG5cdFx0XHRcdFx0XHR0ZXN0ID0gdGVzdC5wYXJlbnRcblxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXMucmV2ZXJzZSgpXG5cblx0XHRyZXR1cm4gcnVubmVyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0RkFBQSxNQUFNLENBQUMsV0FBUCxHQUFxQjs7QUFDckIsTUFBTSxDQUFDLE1BQVAsR0FBZ0I7O0FBQ2hCLEtBQUssQ0FBQyxHQUFOLEdBQWUsQ0FBQTtNQUNkO0VBQUEsSUFBQSxHQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBVixDQUFlLEtBQWY7U0FDQTtRQUNOO0lBQUEsTUFBQSxHQUFTLElBQUEsQ0FBSyxHQUFBLFNBQUw7SUFFVCxNQUFNLENBQUMsRUFBUCxDQUFVLEtBQVYsRUFBaUI7TUFDaEIsTUFBTSxDQUFDLFlBQVAsR0FBc0IsTUFBTSxDQUFDLEtBQVAsSUFBZ0I7YUFDdEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFwQixHQUE4QixNQUFNLENBQUM7S0FGdEM7SUFJQSxNQUFNLENBQUMsRUFBUCxDQUFVLE1BQVYsRUFBa0IsYUFBbEI7SUFDQSxNQUFNLENBQUMsRUFBUCxDQUFVLE1BQVYsRUFBa0IsU0FBQyxJQUFELEVBQU8sR0FBUDthQUNqQixXQUFXLENBQUMsSUFBWixDQUNDO1FBQUEsSUFBQSxFQUFNLElBQUksQ0FBQyxLQUFYO1FBQ0EsTUFBQSxFQUFRLEtBRFI7UUFFQSxPQUFBLEVBQVMsR0FBRyxDQUFDLE9BRmI7UUFHQSxLQUFBLEVBQU8sR0FBRyxDQUFDLEtBSFg7UUFJQSxNQUFBLEVBQVcsQ0FBQTtjQUNWO1VBQUEsTUFBQSxHQUFTO2lCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsS0FBbEI7WUFDQyxNQUFNLENBQUMsSUFBUCxDQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBeEI7WUFDQSxJQUFBLEdBQU8sSUFBSSxDQUFDOztpQkFFTixNQUFNLENBQUMsT0FBUDtTQU5HO09BTFo7S0FERDtXQWNPOztDQXhCTSJ9
