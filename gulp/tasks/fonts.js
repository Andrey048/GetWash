import fonter from 'gulp-fonter';

export const convertFonts = () => {
   return app.gulp.src(`${app.path.src.fonts}/*.otf`)
      .pipe(fonter({
         formats: ['woff', 'ttf']
      }))
      .pipe(app.gulp.dest(app.path.build.fonts));
}
