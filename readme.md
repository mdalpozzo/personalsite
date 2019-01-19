<!-- mac terminal instructions for local deployment for development:

from repo root

(make sure nodeman is installed or dev start script will not work, sometimes devdependencies not installing correctly b/c of env production mode/ dev mode)


cd client yarn install && yarn install && npm run dev

available at http://localhost/8000 unless port otherwise specified or customized -->
*will need to adjust database uri settings for your development in server.js
or rename client/config/keys_prod.js and add uri

from terminal
from root

  yarn install

  cd client

  yarn install

  cd ..

  npm run build-dev

*open new terminal window

  npm run start-dev


available at localhost port 8000