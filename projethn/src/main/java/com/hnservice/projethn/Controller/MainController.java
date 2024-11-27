package com.hnservice.projethn.Controller;

import com.hnservice.projethn.Entity.User;
import com.hnservice.projethn.Entity.UserType;
import com.hnservice.projethn.Repository.UserRepository;
import com.hnservice.projethn.Repository.UserTypeRepository;
import com.hnservice.projethn.service.UserService;
import com.hnservice.projethn.service.UserTypeService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

    private final UserService userService;

    private final UserTypeService userTypeService;

    @Autowired
    public MainController(UserService userService, UserTypeService userTypeService) {
        this.userService = userService;
        this.userTypeService = userTypeService;
    }

    // User

    @GetMapping("/users")
    public @ResponseBody List<User> getAllUsers(){
        return userService.findAll();
    }

    @PostMapping("/users")
    void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @PutMapping("/user-update")
    void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/user-delete/{id}")
    void deleteUser(@PathVariable int id){
        userService.deleteUser(id);
    }

    // User Type

    @GetMapping("/usertypes")
    public @ResponseBody List<UserType> getAllUserTypes(){
        return userTypeService.findAll();
    }

    @PostMapping("/usertypes")
    void addUserType(@RequestBody UserType userType){
        userTypeService.addUserType(userType);
    }

    @PutMapping("/usertype-update")
    void updateUserType(@RequestBody UserType userType) {
        userTypeService.updateUserType(userType);
    }

    @DeleteMapping("/usertype-delete/{id}")
    void deleteUserType(@PathVariable int id) {
        userTypeService.deleteUserType(id);
    }


}
