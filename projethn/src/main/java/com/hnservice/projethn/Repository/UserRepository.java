package com.hnservice.projethn.Repository;

import com.hnservice.projethn.Entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    List<User> findAll();
}
