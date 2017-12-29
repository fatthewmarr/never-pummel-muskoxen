package com.ex.getItApp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ex.getItApp.model.User;
import com.ex.getItApp.service.UserService;

//@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("getit")
public class UserController {

	@Autowired
	UserService service;
	
	static {
		System.out.println("In the User Controller");
	}
	
	@RequestMapping(value="/register", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public void addUser(@RequestBody User client) {
		service.addUser(client);
	}
	
	@RequestMapping(value="/login",method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public User findUserByEmailAndPassword(@RequestBody User client) {
		return service.findUserByEmailAndPassword(client.getEmail(), client.getPassword());
	}
}
