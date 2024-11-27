package com.hnservice.projethn.service;

import com.hnservice.projethn.Entity.User;
import com.hnservice.projethn.Repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public void updateUser(User user) {
        User userBefore = userRepository.findById(user.getId()).orElseThrow(() -> new EntityNotFoundException("Id non valide"));
        user.setId(userBefore.getId());
        userRepository.save(user);
    }

    @Override
    public void deleteUser(int id) {
        User user = userRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Id non valide"));
        userRepository.delete(user);
    }
}
