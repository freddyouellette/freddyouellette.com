// frontend framework

const path = require('path');

const F = {};

// directories
F.FRONTEND_DIR = process.cwd();
F.NPM_SCRIPTS_DIR = path.resolve(F.FRONTEND_DIR, 'npm-scripts'); 
F.ROOT_DIR = path.resolve(F.FRONTEND_DIR, '..');
F.SOURCE_DIR = path.resolve(F.FRONTEND_DIR, 'src');
F.PAGES_DIR = path.resolve(F.SOURCE_DIR, 'pages');
F.COMPONENTS_DIR = path.resolve(F.SOURCE_DIR, 'components');
F.UTILITIES_DIR = path.resolve(F.SOURCE_DIR, 'utilities');

// Export the Framework object.
module.exports = F;