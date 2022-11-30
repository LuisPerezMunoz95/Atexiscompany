package com.example.Users.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

public class User {
    @Id
    private String id;
    @Field
    private String name;
    @Field
    private String surName;
    @Field
    private String nationality;
    @Field
    private String dni;
    @Field
    private int age;

    public User(){}

    public User(String id, String name, String surName, String nationality, String dni, int age) {
        this.id = id;
        this.name = name;
        this.surName = surName;
        this.nationality = nationality;
        this.dni = dni;
        this.age = age;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", surName='" + surName + '\'' +
                ", nationality='" + nationality + '\'' +
                ", dni='" + dni + '\'' +
                ", age=" + age +
                '}';
    }
}
