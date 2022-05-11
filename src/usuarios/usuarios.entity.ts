import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  rut_usuario: string;

  @Column({ length: 20 })
  nom_usuario: string;

  @Column({ length: 20 })
  ape_usuario: string;

  @Column()
  tel_usuario: number;

  @Column({ length: 30 })
  mail_usuario: string;

  @Column({ length: 20 })
  pass_usuario: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

}
