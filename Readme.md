## Model for Backend Project with Node, TypeScript and TypeORM

First - Uncomment the line .env line in the file .gitignore, this is to development

Second - Rename Field Name in package.json and choice pg or mysql (default mysql):
`"pg": "^8.2.1",` or `"mysql": "^2.18.1"`

Third - Edit .env and ormconfig files with your data from database

Fourth - Remove directory .git

Fifth - Run to create directories:
`mkdir src/database/migrations`

Sixth - Create node-modules, run:
`yarn`

Seventh - If want create table users run:
`yarn typeorm migration:generate -- -n CreateUsers`
`yarn typeorm migration:run`

Eighth - Run to Dev:
`yarn dev`
