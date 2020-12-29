import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as path from "path";
import { Connection } from "typeorm";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "1",
			database: "Oclio",
			entities: [path.join(__dirname, "**/*.entity{.ts,.js}")],
		}),
		UsersModule,
	],
	providers: [],
	controllers: [],
})
export class AppModule {
	constructor(private connection: Connection) {}
}
