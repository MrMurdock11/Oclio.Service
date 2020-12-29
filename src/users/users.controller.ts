import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AddUserDto } from "src/dtos/add-user.dto";
import { User } from "src/entities/user.entity";
import { UsersService } from "./users.service";
import { v4 } from "uuid";

@Controller("users")
export class UsersController {
	constructor(private readonly service: UsersService) {}

	@Get("all")
	public findAll(): Promise<User[]> {
		return this.service.findAll();
	}

	@Get("find")
	public find(@Query("id") id: string): Promise<User> {
		return this.service.findOne(id);
	}

	@Post("add")
	public async add(@Body() request: AddUserDto): Promise<void> {
		const user = new User();

		user.id = v4();
		user.username = request.username;
		user.firstName = request.firstName;
		user.lastName = request.lastName;

		await this.service.insert(user);
	}

	@Post("changeFirstName")
	public async changeFirstName(
		@Query("id") id: string,
		@Query("firstName") firstName: string
	): Promise<void> {
		await this.service.updateFirstName(id, firstName);
	}

	@Post("remove")
	public async remove(@Query("id") id: string): Promise<void> {
		await this.service.remove(id);
	}
}
