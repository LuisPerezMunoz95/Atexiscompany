package com.example.Users.service;

import com.example.Users.entity.User;
import com.example.Users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public void save(User user) {userRepository.save(user);}

    public List<User> findAll(){ return userRepository.findAll();}

    public Optional<User> findById(String id) { return userRepository.findById(id);}

    public void deleteById(String id){ userRepository.deleteById(id);}
}