import { Table } from "typeorm";
export class UserUpdate1587106248890 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "int",
                }
            ]
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user");
    }
}
