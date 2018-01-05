package com.ex.getItApp.service;

import java.util.List;

import com.ex.getItApp.model.User;

public interface UserService {

	public void addUser(User client);
	public User findUserByEmailAndPassword(String email, String password);
	public User findUserByEmail(String email);
	public User findUserById(Integer id);
	public List<User> findAll();
	public User updateUser(User u);
}
