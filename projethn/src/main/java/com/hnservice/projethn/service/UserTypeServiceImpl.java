package com.hnservice.projethn.service;

import com.hnservice.projethn.Entity.User;
import com.hnservice.projethn.Entity.UserType;
import com.hnservice.projethn.Repository.UserTypeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserTypeServiceImpl implements UserTypeService {

    private final UserTypeRepository userTypeRepository;

    @Autowired
    public UserTypeServiceImpl(UserTypeRepository userTypeRepository) {
        this.userTypeRepository = userTypeRepository;
    }

    @Override
    public void addUserType(UserType userType) {
        userTypeRepository.save(userType);
    }

    @Override
    public List<UserType> findAll() {
        return userTypeRepository.findAll();
    }

    @Override
    public UserType getUserTypeById(int id) {
        return userTypeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Id non valide"));
    }

    @Override
    public void updateUserType(UserType userType) {
        UserType userTypeBefore = userTypeRepository.findById(userType.getId()).orElseThrow(() -> new EntityNotFoundException("Id non valide"));
        userType.setId(userTypeBefore.getId());
        userTypeRepository.save(userType);
    }

    @Override
    public void deleteUserType(int id) {
        UserType userType = userTypeRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Id non valide"));
        userTypeRepository.delete(userType);
    }

}
