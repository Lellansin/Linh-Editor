var child_process = require('child_process');
var path = require('path');
var cwd = process.cwd();
var filepath = 'E:/gcc/test.c';
// var childProcess = child_process.execFile(path.join(cwd, 'run.bat'), [filepath], {
// 	cwd: cwd
// }, function(err) {
// 	if (err) {
// 		console.log('- err: ' + err);
// 	}
// });

child = child_process.exec(cwd + '/run.bat ' + filepath,
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});