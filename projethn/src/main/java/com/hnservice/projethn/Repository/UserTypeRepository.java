package com.hnservice.projethn.Repository;

import com.hnservice.projethn.Entity.UserType;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserTypeRepository extends CrudRepository<UserType, Integer> {

    List<UserType> findAll();

}
