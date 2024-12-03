package com.hnservice.projethn.service;

import com.hnservice.projethn.Entity.User;
import com.hnservice.projethn.Entity.UserType;

import java.util.List;

public interface UserTypeService {

    void addUserType(UserType userType);

    List<UserType> findAll();

    UserType getUserTypeById(int id);

    void updateUserType(UserType userType);

    void deleteUserType(int id);
}
