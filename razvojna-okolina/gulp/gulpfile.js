const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const scss = require("gulp-sass")(require("sass"));
const cssNano = require("gulp-cssnano");
const browserSync = require("browser-sync");

gulp.task("es6ToEs5", () => {
  return gulp
    .src("./script.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("scssToCss", () => {
  return gulp
    .src("styles.scss")
    .pipe(scss())
    .pipe(cssNano())
    .pipe(rename({ basename: "styles" }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("./styles.scss", gulp.series("scssToCss"));
  gulp.watch("./main.js", gulp.series("es6ToEs5"));

  gulp.watch("./main.js").on("change", browserSync.reload);
  gulp.watch("./styles.scss").on("change", browserSync.reload);
});

gulp.task(
  "default",
  gulp.series(gulp.parallel("es6ToEs5", "scssToCss"), "serve")
);

// gulp.task("es6ToEs5", () => {
//   return gulp
//     .src("./script.js")
//     .pipe(
//       babel().on("error", function (err) {
//         console.error("Babel Transpilation Error:", err.message);
//         this.emit("end");
//       })
//     )
//     .pipe(
//       uglify().on("error", function (err) {
//         console.error("Uglify Minification Error:", err.message);
//         this.emit("end");
//       })
//     )
//     .pipe(rename({ suffix: ".min" }))
//     .pipe(gulp.dest("./dist"))
//     .on("end", () => console.log("ES6 to ES5 task completed!"))
//     .on("error", (err) => console.error("Gulp Task Error:", err.message));
// });

// gulp.task("scssToCss", () => {
//   return gulp
//     .src("./styles.scss")
//     .pipe(
//       scss().on("error", function (err) {
//         console.error("SCSS Compilation Error:", err.message);
//         this.emit("end");
//       })
//     )
//     .pipe(gulp.dest("./dist/css"))
//     .on("end", () => console.log("SCSS task completed!"))
//     .on("error", (err) => console.error("Gulp Error:", err.message));
// });
