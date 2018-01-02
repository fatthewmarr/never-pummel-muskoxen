package com.ex.getItApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.getItApp.model.User;
import com.ex.getItApp.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public void addUser(User client) {
		userRepo.save(client);
	}

	@Override
	public User findUserByEmailAndPassword(String email, String password) {
		return userRepo.findUserByEmailAndPassword(email, password);
	}

	@Override
	public User findUserByEmail(String email) {
		return userRepo.findUserByEmail(email);
	}

	@Override
	public User findUserById(Integer id) {
		// TODO Auto-generated method stub
		return userRepo.findUserById(id);
	}
	

}
