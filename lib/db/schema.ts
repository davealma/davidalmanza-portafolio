import { mysqlTable, serial, varchar, timestamp, text } from "drizzle-orm/mysql-core";

 export const projects = mysqlTable('projects', {
    id: serial('id').autoincrement().primaryKey().notNull(),
    projectName: varchar('project_name', { length: 100 }).notNull(),
    description: text('description').notNull(),
    company: varchar('company', { length:100 }),
    technologies: varchar('technologies', { length: 250 }).notNull(),
    projectImage: varchar('project_image', { length: 200 }).notNull(),
    industry: varchar('industry', { length: 50 }).notNull(),
    startDate: timestamp('start_date', {mode: 'string'}),
    endDate: timestamp('end_date', {mode: 'string'}),
    position: varchar('position', { length: 100 }).notNull()
});

export const contact = mysqlTable('contact', {
    id: serial('id').autoincrement().primaryKey().notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    message: varchar('message', { length: 500 }),
    createdAt: timestamp('createdAt', { mode: 'string'}).defaultNow(),
});
