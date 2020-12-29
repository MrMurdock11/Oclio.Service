import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("Users")
export class User {
	@PrimaryColumn({ name: "Id" })
	public id: string;

	@Column({ name: "Username" })
	public username: string;

	@Column({ name: "FirstName" })
	public firstName: string;

	@Column({ name: "LastName" })
	public lastName: string;
}
