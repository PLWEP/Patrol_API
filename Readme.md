# Patrol API
API that build only for Patrol APP

[![GitHub issues](https://img.shields.io/github/issues/PLWEP/Patrol_API?style=for-the-badge)](https://github.com/PLWEP/Patrol_API/issues)
[![GitHub forks](https://img.shields.io/github/forks/PLWEP/Patrol_API?style=for-the-badge)](https://github.com/PLWEP/Patrol_API/network)
[![GitHub stars](https://img.shields.io/github/stars/PLWEP/Patrol_API?style=for-the-badge)](https://github.com/PLWEP/Patrol_API/stargazers)
[![GitHub stars](https://img.shields.io/badge/NodeJs-v16.17.0-orange?style=for-the-badge)](https://github.com/PLWEP/Patrol_API/)
[![GitHub stars](https://img.shields.io/badge/ExpressJs-v4.16.1-orange?style=for-the-badge)](https://github.com/PLWEP/Patrol_API/)

**`Dependencies`** |
|---|
|[![GitHub stars](https://img.shields.io/badge/dotenv-v16.0.3-green?flat-square)](https://github.com/PLWEP/Patrol_API/) |
[![GitHub stars](https://img.shields.io/badge/fastestvalidator-v1.15.0-green?flat-square)](https://github.com/PLWEP/Patrol_API/) |
|[![GitHub stars](https://img.shields.io/badge/mysql2-v3.0.0-green?flat-square)](https://github.com/PLWEP/Patrol_API/)|
|[![GitHub stars](https://img.shields.io/badge/nodemon-v2.0.20-green?flat-square)](https://github.com/PLWEP/Patrol_API/) |
|[![GitHub stars](https://img.shields.io/badge/sequelize-v6.25.4-green?flat-square)](https://github.com/PLWEP/Patrol_API/) |
|[![GitHub stars](https://img.shields.io/badge/sequelizecli-v6.5.2-green?flat-square)](https://github.com/PLWEP/Patrol_API/) |

## How To Use
Field | Description |
--- | --- | 
clone | clone this github |
install | go to project dir then write ````npm install```` in terminal |
.env | create ````.env```` file then define ````DB_USERNAME, DB_PASSWORD, DB_HOSTNAME, DB_NAME, DB_DIALECT````|
migration  | edit migration in ```` /migrations ```` |
seeder  | edit seeder in ```` /seeder ```` |
init | write ````npm run init```` in terminal |
start | write ````npm start```` in terminal |

## Script
Field | Description |
--- | --- | 
````npm install```` | install dependencies |
````npm run migrate```` | database migration |
````npm run status-migrate```` | database migration status check |
````npm run undo-migrate````  | undo database migration |
````npm run seed```` | database seeder |
````npm run undo-seed```` | undo database seeder |
````npm run init````  | database migration and seeder |
````npm start```` | start the api |

## Endpoint

Command | Usage | Params  | Example | Description |
--- | --- | --- | --- | --- | 
GET | `/ruangan/:id` | `id : Ruangan id` | `/ruangan/R01` | Get information for id that Ruangan | 
GET | `/pertanyaan/:id` | `id: Ruangan id` | `/pertanyaan/R01` | Get question for id that Ruangan | 
GET | `/jawaban` | - | `/jawaban` | Get all the answer | 
GET | `/jawaban/:id` | `id: Ruangan id` | `/jawaban/R01` | Get the answer for id that Ruangan | 
POST | `/jawaban/` | - | `/jawaban/{DataJson}` | Post the answer | 
