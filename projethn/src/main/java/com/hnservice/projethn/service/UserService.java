package com.hnservice.projethn.service;

import com.hnservice.projethn.Entity.User;

import java.util.List;

public interface UserService {

    void addUser(User user);

    List<User> findAll();

    User getUserById(int id);

    void updateUser(User user);

    void deleteUser(int id);
}
