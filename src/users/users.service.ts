import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
	private users = ["Omar Watsica", "Mrs. Orlando Cormier"];

	public getUsers(): string[] {
		return this.users;
	}
}
