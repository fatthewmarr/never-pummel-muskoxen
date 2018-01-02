package com.ex.getItApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
	
	public User findUserByEmailAndPassword(String email, String password);
	public User findUserByEmail(String email);
	public User findUserById(Integer id);

}
