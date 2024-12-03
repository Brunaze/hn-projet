package com.hnservice.projethn.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="UserType")
public class UserType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;

    @Column(name = "user_type")
    private String label;

    @Transient
    @OneToMany(mappedBy = "userType",
                cascade = {CascadeType.DETACH})
    private List<User> users;

    public UserType() {
    }

    public UserType(int id, String label) {
        this.label = label;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "UserType{" +
                "id=" + id +
                ", label='" + label + '\'' +
                ", users=" + users +
                '}';
    }
}
