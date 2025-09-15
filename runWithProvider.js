const { execSync } = require('child_process');

const command = process.argv[2];
if (!command) {
  console.error('É necessário passar um comando como argumento');
  process.exit(1);
}

try {
  execSync(command, { stdio: 'inherit', env: process.env });
} catch (err) {
  console.error(err);
  process.exit(1);
}
