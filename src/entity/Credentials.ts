import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn } from "typeorm";


@Entity()
export class Credentials {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    access_token: String;

    @Column()
    refresh_token: String;

    @Column()
    is_active: Boolean;

    @Column()
    expires_at: Date;

    @Column()
    user_id: String

    @Column()
    company_id: number;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;



    @VersionColumn()
    version: number;


}