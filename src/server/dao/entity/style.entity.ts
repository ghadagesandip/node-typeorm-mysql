import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'styles'})
export class Style {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column({length: 156})
    name: string;

    @Column({length: 300})
    description!: string
}