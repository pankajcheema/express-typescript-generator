import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Credentials1587472997266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "credentials",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "access_token",
                    type: "varchar",
                },
                {
                    name: "refresh_token",
                    type: "varchar",
                },
                {
                    name: "is_active",
                    type: "boolean",
                },
                {
                    name: "expires_at",
                    type: "date",
                },
                {
                    name: "user_id",
                    type: "varchar",
                },
                {
                    name: "company_id",
                    type: "int",
                },
                {
                    name: "created_at",
                    type: "date",
                },
                {
                    name: "updated_at",
                    type: "date",
                },
                {
                    name: "version",
                    type: "int"
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("credentials");
    }

}
