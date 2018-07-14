/**
 * 打包配置
 */
const gulp = require('gulp');
const zip = require('gulp-zip');
const moment = require('moment');

// 压缩存档，生成zip包
gulp.task('archive', () => {
	let filename = moment().format('YYYYMMDDHHmm');
	gulp.src(['./dist/**/*', '!./dist/*.zip'])
		.pipe(zip(filename + '.zip'))
		.pipe(gulp.dest('dist'))
});
