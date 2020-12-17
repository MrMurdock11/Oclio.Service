import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AddUserDto } from "src/dtos/add-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly service: UsersService) {}

	@Get("all")
	public all(): string[] {
		return this.service.getUsers();
	}

	@Get("user")
	public user(@Query("index") index: number): string {
		const users = this.service.getUsers();

		return users[index];
	}

	@Post("add")
	public add(@Body() request: AddUserDto): string[] {
		const users = this.service.getUsers();

		return [...users, request.username];
	}
}
