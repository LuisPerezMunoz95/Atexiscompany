package com.example.Users.controller;


import com.example.Users.entity.User;
import com.example.Users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping
    public List<User> getUser() { return userService.findAll();}
    @GetMapping("/{id}")
    public User findById(@PathVariable String id) { return userService.findById(id).get();}
    @PostMapping()
    public void save(@RequestBody User user) { userService.save(user);}
    @PutMapping("/{id}")
    public void update(@PathVariable String id, @RequestBody User user) { userService.save(user);}
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable String id) { userService.deleteById(id);}
}