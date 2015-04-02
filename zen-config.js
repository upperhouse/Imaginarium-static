/*------------------------------------*\
    ::Common Configuration
    ----------------------------------*
    common configuration options
    typical for most projects
\*------------------------------------*/
var config = {
    site: {
        // client folder name
        client: 'dps',
        // project folder name
        proj:   'Imaginarium-static'
    },
    url: {
        // address of the home page
        root: 'http://localhost:8888/sites/dps/Imaginarium-static'
    },
    sass: {
        // location to look for sass files - expects a relative path ending in "/"
        // uses globbing for sub directories and files
        src:    './sass/',
        // destination for compiled css file - expects a relative path ending in "/"
        dest:   './css/'
    },
    svg: {
        // name of svg sprite to process (must not contain a "-" character)
        general: {
            // destination of files to process - can use globbing
            src: './images/general-src/**/*.svg',
            // destination of output file - expects relative path ending in "/"
            dest: './images/general-sprite/'
        }
    },
    watch: {
        // files to watch - can accept a string or an array of strings
        src: './**/*.{php,html}'
    }
};

/*------------------------------------*\
    ::Project Specific Configuration
    ----------------------------------*
    atypical configuration options
    applicable to this project only
\*------------------------------------*/
// egsample:
// config.someOptionName = {
//     someOptionProperty: 'Some Option Value'
// };

/*------------------------------------*\
    ::Object Export to for Gulp
\*------------------------------------*/
module.exports = config;
