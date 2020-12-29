import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>
	) {}

	public findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	public findOne(id: string): Promise<User> {
		return this.usersRepository.findOne(id);
	}

	public async insert(user: User): Promise<void> {
		await this.usersRepository.insert(user);
	}

	public async updateFirstName(id: string, firstName: string): Promise<void> {
		const user = await this.usersRepository.findOne(id);

		// user.firstName = firstName;
		await this.usersRepository.update(user, { firstName });
	}

	public async remove(id: string): Promise<void> {
		await this.usersRepository.delete(id);
	}
}
